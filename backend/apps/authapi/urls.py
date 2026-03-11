from django.urls import path
from .views import exchange_code, logout

# create your authapi requests here

urlpatterns = [
    path("exchange/", exchange_code),
    path("logout/", logout),
]