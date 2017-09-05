from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import *
from django.http import HttpResponse
# Create your views here.

@csrf_exempt
def order_callback(request):
    if request.method == 'POST':
        data = request['POST']

        callback = Callback.objects.create(data)
        print(callback)
        callback.save()

        return HttpResponse('Пожалуйста, ожидайте звонка')
    return HttpResponse('Внутренняя ошибка сервера')

@csrf_exempt
def make_order(request):
    if request.method == 'POST':
        data = request['POST']
        order = Order.objects.create(data)
        print(order)
        order.save()

        return HttpResponse('Наш оператор позвонит вам, чтобы сверить данные и уточнить детали. Пожалуйста, ожидайте звонка.')
    return HttpResponse('Внутренняя ошибка сервера')

@csrf_exempt
def ask_question(request):
    if request.method == 'POST':
        data = request['POST']
        question = Question.objects.create(data)
        print(question)
        question.save()

        return HttpResponse('Ваш вопрос не останется без ответа!')
    return HttpResponse('Внутренняя ошибка сервера')