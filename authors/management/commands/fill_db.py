import json
import os
from django.core.management import call_command
from django.core.management.base import BaseCommand
from authors.models import Author


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
        Author.objects.create(first_name='Фёдор', last_name='Достоевский', birth_year='1821',)
        Author.objects.create(first_name='Александр', last_name='Грин', birth_year='1880',)

        # User.objects.all().delete()
        # for name in ['authapp']:
        #     filename = f'./{name}/fixtures/{name}.json'
        #     call_command('loaddata', filename, app_label=name)
