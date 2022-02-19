from django.contrib import admin
from authors.models import Author, Book, Biography

# Register your models here.
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Biography)
