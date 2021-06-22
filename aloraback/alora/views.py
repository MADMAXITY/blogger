from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .models import Posts

# Create your views here.


@csrf_exempt
def postuserpost(request):
    # print(data['username'], data['text'], data['file'])

    username = request.POST.get('username')
    text = request.POST.get('text')
    title = request.POST.get('title')

    post = Posts(username=username, text=text, name=title)
    post.save()
    return JsonResponse({'status': 'success'})


@csrf_exempt
def getallposts(request):
    posts = list(Posts.objects.all())
    final_list = []
    for post in posts:
        final_list.append({
            "title": post.name,
            "text": post.text,
            "username": post.username,
        })
    return JsonResponse({'status': 'success', 'data': final_list})
