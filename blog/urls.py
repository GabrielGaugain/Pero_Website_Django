from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('index', views.index_blog, name='index_blog' ),
    path('',views.accueil, name='accueil'),
    path('article/<int:id>', views.lire, name='lire')
]
