from django.shortcuts import render

def Cv(request):
    return render(request, 'CV/index_CV.html')