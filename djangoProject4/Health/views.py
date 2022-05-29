from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'Health/login.html')

def main(request):
    return render(request, 'Health/Main.html')

def health(request):
    return render(request, 'Health/Health.html')

def diet(request):
    return render(request, 'Health/diet.html')
