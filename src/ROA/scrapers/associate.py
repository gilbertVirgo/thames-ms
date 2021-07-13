# associate.py, a scraper uses thesaurus.com to associate words with university courses

from courses import courses
from reqeusts import get



def words_related_to(course):
  page = get(f'https://www.thesaurus.com/browse/{"+".join(course.split(" ")}')



def scrape():
  for course in courses:
    pass
