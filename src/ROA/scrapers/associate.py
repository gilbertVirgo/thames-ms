# associate.py, a scraper uses thesaurus.com to associate words with university courses

from courses import courses
from requests import get
from urllib.parse import quote, unquote
from re import findall


def words_related_to(course):
  page = get(f'https://www.thesaurus.com/browse/{quote(course)}').text
  
  # find all synonyms

  syns = findall('"/browse/((\w+|%\d{2})+)" data-linkid="nn1ov4" class="css-1[^5]', page)

  return [unquote(syn[0]) for syn in syns]


def scrape():
  print('[*] starting')
  batch = []

  for course in courses:
    try:
      batch[course] = words_related_to[course.lower()]
    except:
      print(f'[!] failed on {course}')

  print('[*] finished')
  print(batch)


if __name__ == '__main__':
  scrape()
