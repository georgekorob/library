from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer, UserSerializerWithFullName


# Create your views here.
class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserSerializerWithFullName
        return UserSerializer
