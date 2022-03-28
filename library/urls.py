"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework import permissions
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from authors.views import AuthorModelViewSet, BookModelViewSet, BiographyModelViewSet
from userapp.views import UserListAPIView

schema_view = get_schema_view(
    openapi.Info(
        title='Library',
        default_version='v2',
        description='Project',
        contact=openapi.Contact(email='test@mail.ru'),
        license=openapi.License(name='ST License')
    ),
    public=True,
    permission_classes=(permissions.AllowAny,)
)

# router = SimpleRouter()
router = DefaultRouter()
router.register('authors', AuthorModelViewSet)
router.register('books', BookModelViewSet)
router.register('biographies', BiographyModelViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # path('swagger<str:format>',schema_view.without_ui()),  # for json file
    path('swagger/', schema_view.with_ui('swagger')),
    path('redoc/', schema_view.with_ui('redoc')),

    # re_path(r'^api/(?P<version>\d\.\d)/userlist/$', UserListAPIView.as_view()),
    # re_path(r'^api/(?P<version>\d)/userlist/$', UserListAPIView.as_view()),
    # path('api/<str:version>/userlist/', UserListAPIView.as_view()),
    # path('api/userlist/v1/', include('userapp.urls', namespace='v1')),
    # path('api/userlist/v2/', include('userapp.urls', namespace='v2')),

    path('graphql/', GraphQLView.as_view(graphiql=True)),
]
