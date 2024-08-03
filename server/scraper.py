import requests
import json

from bs4 import BeautifulSoup

def read_article(url):
    if(url[0:22]=="https://www.ctvnews.ca"):
        return read_ctv(url)
    elif(url[0:23]=="https://www.foxnews.com"):
        return read_foxnews(url)
    elif(url[0:19]=="https://www.cnn.com"):
        return read_cnn(url)
    elif(url[0:18]=="https://www.cbc.ca"):
        return read_cbc(url)
    else:
        return "Invalid URL"

def read_ctv(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    title = soup.find("title").get_text()
    description = soup.find_all("div", {'class':"c-text"})
    text = ""
    for div in description:
        paragraphs = div.find_all('p')
        for paragraph in paragraphs:
            text += paragraph.get_text()
            
    ret = {
        "source": "CTV",
        "title": title,
        "content": text,
    }
    
    return json.dumps(ret)

def read_foxnews(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    title = soup.find("title").get_text()
    
    foxDescription = soup.find('script', type='application/ld+json')

    article_body = ''

    if foxDescription:
        json_content = foxDescription.string
        data = json.loads(json_content)

        # Step 5: Get the articleBody value
        article_body = data.get('articleBody', 'No articleBody found')
            
    ret = {
        "source": "Fox News",
        "title": title,
        "content": article_body,
    }
    
    return json.dumps(ret)

def read_cnn(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    title = soup.find("title").get_text()
    
    cnnDescription = soup.find('script', type='application/ld+json')

    article_body = ''

    if cnnDescription:
        json_content = cnnDescription.string
        data = json.loads(json_content)

        # Step 5: Get the articleBody value
        article_body = data.get('articleBody', 'No articleBody found')
            
    ret = {
        "source": "CNN",
        "title": title,
        "content": article_body,
    }
    
    return json.dumps(ret)

def read_cbc(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    title = soup.find("title").get_text()
    
    cbcDescription = soup.find('script', type='application/ld+json')

    article_body = ''

    if cbcDescription:
        json_content = cbcDescription.string
        data = json.loads(json_content)

        # Step 5: Get the articleBody value
        article_body = data.get('articleBody', 'No articleBody found')
            
    ret = {
        "source": "CBC",
        "title": title,
        "content": article_body,
    }
    
    return json.dumps(ret)