from django.shortcuts import render

def index_blog(request):
    return render(request, 'blog/index_blog.html')
