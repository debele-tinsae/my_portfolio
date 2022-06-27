from django import forms
from django.shortcuts import render
from django.http import HttpResponse

from . import form
# Create your views here.

def index(request):
    print(request)
    return render(request, 'index.html')
    

def contact_form(request):
    form = forms.FormName()
    return render(request,'index.html', {'form': form} )
