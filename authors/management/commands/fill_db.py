import json
import os
from django.core.management import call_command
from django.core.management.base import BaseCommand
from authors.models import Author, Biography, Book


def load_from_json(file_name):
    try:
        with open(file_name, mode='r', encoding='utf-8') as infile:
            return json.load(infile)
    except UnicodeDecodeError:
        with open(file_name, mode='r', encoding='windows-1251') as infile:
            return json.load(infile)


class Command(BaseCommand):
    def handle(self, *args, **options):
        Author.objects.all().delete()
        Biography.objects.all().delete()
        Book.objects.all().delete()
        author1 = Author.objects.create(first_name='Фёдор', last_name='Достоевский', birth_year='1821')
        author2 = Author.objects.create(first_name='Александр', last_name='Грин', birth_year='1880')
        author3 = Author.objects.create(first_name='Михаил', last_name='Булгаков', birth_year='1891')
        biography1 = Biography.objects.create(text='Текст биографии автора 1', author=author1)
        biography2 = Biography.objects.create(text='Текст биографии автора 2', author=author2)
        biography3 = Biography.objects.create(text='Текст биографии автора 3', author=author3)
        book1 = Book.objects.create(name='Мастер и маргарита')
        book1.authors.set([author3])
        book2 = Book.objects.create(name='Война и мир')
        book2.authors.set([author1, author2])

        # User.objects.all().delete()
        # for name in ['authapp']:
        #     filename = f'./{name}/fixtures/{name}.json'
        #     call_command('loaddata', filename, app_label=name)
