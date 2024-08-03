import requests

import beautifulsoup
from bs4 import BeautifulSoup

#CTV links
ctvURL = "https://www.ctvnews.ca/world/masked-assailants-ransack-venezuela-opposition-s-headquarters-as-post-election-tensions-mount-1.6987204"
page = requests.get(URL)

soup = BeautifulSoup(html, "html.parser")

#CTV, CNN
title = soup.find("title")

print(title)

ctvDescription = soup.find_all("div", class_="c-text")

for line in description:
    oneLine = line.find('p').get_text()
    print(oneLine)


#CNN BODY PARAGRAPH 
cnnURL = "https://www.cnn.com/2024/08/02/politics/plea-deal-9-11-khalid-sheikh-mohammed-revoked-austin/index.html"
cnnDescription = soup.find_all(attrs={'articleBody': True})

for bodyParagraph in cnnDescription:
   print(bodyParagraph)



