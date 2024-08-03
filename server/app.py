from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os
import json

from openai import OpenAI

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"
OPENAI_API_SYSTEM = """You will take in the links to multiple articles and provide the following output in json format: 
\{
\"news_source\": [*comma and space separated array containing, in alphabetic order, all distinct news sources (i.e. company names of the websites) that appear in the set of article links*],
\"bias\": *a number to two decimals between 0 and 100 that represents the percentage of articles provided in the list of links that are liberal biased (implying that 100 subtract this number = percentage of articles that are conservative biased)*,
\"article_title\": \"*a string that represents an article title that is an unbiased summarization of the article titles of all the articles provided in the article links*\",
\"rewritten_version\": \"*a string that represents an unbiaseds, child-language-friendly summarization of all the articles provided in the article links*\"
\}
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
        "model": "gpt-4o-mini",
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
        text = response_data.get('choices', [{}])[0].get('message', {}).get('content', '')
        return Response(response=text, mimetype="application/json")
    else:
        # Handle error response
        error = response.json().get('error', 'Unknown error occurred')
        return Response(response="\{'error': {error}\}", mimetype="application/json")

@app.route('/summarize-article-links', methods=['POST'])
def chat():
    prompt = request.json.get('prompt')
    if not prompt:
        return Response(response="\"{\"error\": \"No prompt provided\"\}", mimetype="application/json")
    
    return get_chatgpt_response(prompt)
    # response = get_chatgpt_response(prompt)
    # return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
