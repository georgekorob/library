from rest_framework import permissions
from rest_framework.permissions import BasePermission, IsAdminUser
from rest_framework.viewsets import ModelViewSet
from .models import Author, Book, Biography
from .serializers import AuthorModelSerializer, BiographyModelSerializer, BookModelSerializer
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


class StaffOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff


# Create your views here.
# @api_view(['GET'])
# @renderer_classes([JSONRenderer])
class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    # permission_classes = [IsAdminUser]


class BiographyModelViewSet(ModelViewSet):
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer


class BookModelViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
