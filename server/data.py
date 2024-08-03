import requests

from bs4 import BeautifulSoup
import json

# parse into html reader
URL = "https://www.cbsnews.com/news/donald-trump-kamala-harris-debate-fox-news-abc-news/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

# search title (all news outlets)
title = soup.find("title").get_text()
print(title)

# # CTV body description only
# ctvDescription = soup.find_all("div", class_="c-text")

# for line in ctvDescription:
#      oneLine = line.find('p').get_text()
#      print(oneLine)


# # CNN, FOX body description only
# description = soup.find('script', type='application/ld+json')

# if description:
#     json_content = description.string
#     data = json.loads(json_content)

#     # Step 5: Get the articleBody value
#     article_body = data.get('articleBody', 'No articleBody found')

#     # Print the articleBody
#     print(article_body)
# else:
#     print('No JSON-LD script found')


description = soup.find_all("div", class_="gnt_ar_b")

for line in description:
     oneLine = line.find('p').get_text()
     print(oneLine)
