


from django.contrib import admin
from django.urls import path
from my_web import views

urlpatterns = [
    path('', views.index , name='index' ),
]
