from rest_framework.viewsets import ModelViewSet
from .models import Author, Book, Biography
from .serializers import AuthorModelSerializer, BiographyModelSerializer, BookModelSerializer
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


# Create your views here.
# @api_view(['GET'])
# @renderer_classes([JSONRenderer])
class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer


class BiographyModelViewSet(ModelViewSet):
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
