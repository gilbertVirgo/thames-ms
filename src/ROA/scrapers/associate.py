# associate.py, a scraper uses thesaurus.com to associate words with university courses

from courses import courses
from requests import get
from urllib.parse import quote, unquote
from re import findall
from json import dump


def words_related_to(course):
  page = get(f'https://www.thesaurus.com/browse/{quote(course)}').text
  print(f'- {course}')  
  # find all synonyms

  syns = findall('"/browse/((\w+|%\d{2})+)"', page)[:10]

  return [unquote(syn[0]) for syn in syns]


def scrape():
  print('[*] starting')
  batch = {}

  for course in courses:
    
    batch[course] = words_related_to(course.lower())
      
    if not batch[course]:
      batch.pop(course)
      continue

    # scrape second degree relations
    subbatch = []

    for syn in batch[course]: subbatch += words_related_to(syn)
    batch[course] += subbatch
      
    print(f'[*] scraped {course}')

  print('[*] finished')

  with open('./tmp.json', 'w+') as file:
    dump(batch, file)


if __name__ == '__main__':
  scrape()
