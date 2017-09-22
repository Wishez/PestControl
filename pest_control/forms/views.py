# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import *
from django.http import HttpResponse
from present.models import Service, Space
# Create your views here.

@csrf_exempt
def order_callback(request):
    if request.method == 'POST':
        data = request.POST

        full_name = data['full_name']
        phone = data['phone']

        callback = Callback.objects.create(
            full_name=full_name,
            phone=phone
        )

        callback.save()

        return HttpResponse('Пожалуйста, ожидайте звонка. Скоро оператор позвонит вам.')
    return HttpResponse('Внутренняя ошибка сервера')

@csrf_exempt
def make_order(request):
    if request.method == 'POST':
        data = request.POST

        full_name = data['full_name']
        phone = data['phone']
        email = data['email']
        service = Service.objects.get(id=data['service'])
        space = Space.objects.get(id=data['space'])

        order = Order.objects.create(
            full_name=full_name,
            phone=phone,
            email=email,
            service=service,
            space=space
        )
        print(order)
        order.save()

        return HttpResponse('Наш оператор позвонит вам, чтобы сверить данные и уточнить детали. Пожалуйста, ожидайте звонка.')
    return HttpResponse('Внутренняя ошибка сервера')

@csrf_exempt
def ask_question(request):
    if request.method == 'POST':
        data = request.POST

        author_name = data['author_name']
        email = data['email']
        question = data['question']

        question = Question.objects.create(
            author_name=author_name,
            email=email,
            question=question
        )

        question.save()

        return HttpResponse('Ваш вопрос не останется без ответа!')
    return HttpResponse('Внутренняя ошибка сервера')