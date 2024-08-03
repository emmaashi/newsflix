import requests

from bs4 import BeautifulSoup

# parse into html reader
URL = "https://www.cnn.com/2024/08/02/politics/plea-deal-9-11-khalid-sheikh-mohammed-revoked-austin/index.html"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

# search title (all news outlets)
title = soup.find("title").gettext()
print(title)


# CTV body description only 
description = soup.find_all("div", {'class':"c-text"})

for div in description:
    paragraphs = div.find_all('p')
    for paragraph in paragraphs:
        print('---')
        print(paragraph.get_text())
        print('---')
for line in description:
    oneLine = line.find('p').get_text()
    print(oneLine)
    
# CNN, FOX body description only
description = soup.find('script', type='application/ld+json')

if description:
    json_content = description.string
    data = json.loads(json_content)

    # Step 5: Get the articleBody value
    article_body = data.get('articleBody', 'No articleBody found')

    # Print the articleBody
    print(article_body)
else:
    print('No JSON-LD script found')



