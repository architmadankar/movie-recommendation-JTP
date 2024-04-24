from rest_framework.authtoken.views import obtain_auth_token
from .views import *
from django.urls import path

urlpatterns = [
    path('list/', List.as_view(), name='movies'),
    path('suggestions/', Suggest.as_view(), name = 'i')
]
