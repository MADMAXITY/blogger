from django.urls import path
from alora import views
urlpatterns = [
    path('submitpost/', views.postuserpost),
    path('getallposts/', views.getallposts)]
