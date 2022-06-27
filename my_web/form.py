
from cgitb import text
import email
from unicodedata import name
from django import forms


class ContactForm(forms.Form):
    first_name = forms.CharField()
    last_name = forms.CharField()
    email = forms.EmailField()
    phone_number = forms.CharField()
    text =forms.ChoiceField(widget=forms.Textarea)
