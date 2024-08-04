from flask import Flask, request, jsonify, Response
from scraper import read_article
from flask_cors import CORS
import requests
import os
import json

app = Flask(__name__)
CORS(app)  # Enable CORS
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"
OPENAI_API_SYSTEM = """You will take in the links to multiple articles and provide the following output in json format: 
{
\"news_source\": [*comma and space separated array containing, in alphabetic order, all distinct news sources (i.e. company names of the websites) that appear in the set of article links*],
\"bias\": *a number to two decimals between 0 and 100 that represents the percentage of articles provided in the list of links that are liberal biased (implying that 100 subtract this number = percentage of articles that are conservative biased)*,
\"article_title\": \"*a string that represents an article title that is an unbiased summarization of the article titles of all the articles provided in the article links*\",
\"rewritten_version\": \"*a string that represents an unbiased, child-language-friendly summarization of all the articles provided in the article links, that is at most 4000 characters in length*\"
}
"""

def get_chatgpt_response(prompt):
    # What to return from ChatGPT:
    # - News source
    # - If it's leaning towards conservative or liberal
    # - Article title
    # - Rewritten version 

    url = OPENAI_API_URL
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": OPENAI_API_SYSTEM},
            {"role": "user", "content": prompt}
        ]
    }
    
    response = requests.post(url, headers=headers, json=data)

    # Check if the request was successful
    if response.status_code == 200:
        
        response_data = response.json()
        
        # Extract the text from the response
        response_text = response_data.get('choices', [{}])[0].get('message', {}).get('content', '')
    
        # Parse the response_text assuming it's a JSON-formatted string
        try:
            parsed_data = json.loads(response_text)
        except json.JSONDecodeError:
            
            # Handle JSON parse error
            return Response(response=json.dumps({"error": "Failed to parse JSON response"}), mimetype="application/json")

        return jsonify(parsed_data)
    else:
        
        # Handle error response
        error = response.json().get('error', 'Unknown error occurred')
        return Response(response=json.dumps({"error": error}), mimetype="application/json")

@app.route("/summarize", methods=['POST'])
def summarize_article_links():

    article_links = request.json.get('article_links')

    if not article_links:
        return Response(response=json.dumps({"error": "No article links provided"}), mimetype="application/json")

    articles=""
    for article_link in article_links:
        articles+=read_article(article_link)+"\n"
        
    return get_chatgpt_response(articles)

if __name__ == '__main__':
    app.run(debug=True)