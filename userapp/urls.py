from django.urls import path, include, re_path
from userapp.views import UserListAPIView

app_name = 'userapp'
urlpatterns = [
    # re_path(r'^api/(?P<version>\d\.\d)/users/$', UserListAPIView.as_view()),
    path('', UserListAPIView.as_view()),
]
