# associate.py, a scraper uses thesaurus.com to associate words with university topics

from topics import topics
from requests import get
from urllib.parse import quote, unquote
from re import findall
from json import dump


def words_related_to(topic):
  page = get(f'https://www.thesaurus.com/browse/{quote(topic)}').text
  print(f'- {topic}')  
  # find all synonyms

  syns = findall('"/browse/((\w+|%\d{2})+)"', page)[:10]

  return [unquote(syn[0]) for syn in syns]


def scrape():
  print('[*] starting')
  batch = {}

  for topic in topics:
    
    batch[topic] = words_related_to(topic.lower())
      
    if not batch[topic]:
      batch.pop(topic)
      continue

    # scrape second degree relations
    subbatch = []

    for syn in batch[topic]: subbatch += words_related_to(syn)
    batch[topic] += subbatch
      
    print(f'[*] scraped {topic}')

  print('[*] finished')

  with open('./tmp.json', 'w+') as file:
    dump(batch, file)


if __name__ == '__main__':
  scrape()
