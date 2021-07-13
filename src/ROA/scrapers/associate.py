# associate.py, a scraper uses thesaurus.com to associate words with university courses

from courses import courses
from requests import get
from urllib.parse import quote, unquote
from re import findall
from json import dump


def words_related_to(course):
  page = get(f'https://www.thesaurus.com/browse/{quote(course)}').text
  
  # find all synonyms

  syns = findall('"/browse/((\w+|%\d{2})+)"', page)[:10]

  return [unquote(syn[0]) for syn in syns]


def scrape():
  print('[*] starting')
  batch = {}

  for course in courses:
    try:
      batch[course] = words_related_to(course.lower())
      print(f'[*] scraped {course}')
      
      if not batch[course]: batch.pop(course)

    except Exception as e:
      print(f'[!] failed on {course}')
      print(e)

  print('[*] finished')

  with open('./tmp.json', 'w+') as file:
    dump(batch, file)


if __name__ == '__main__':
  scrape()
