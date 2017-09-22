# -*- encoding: utf-8 -*-
from rest_framework import serializers
from present.models import *

class SpaceSerializer(serializers.ModelSerializer):
    ensure = serializers.StringRelatedField()

    class Meta:
        model = Space
        fields = ('id', 'space_name', 'price', 'ensure',)

class OptionSerializer(serializers.ModelSerializer):
    spaces = SpaceSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Option
        fields = ('id', 'option_name', 'spaces',)

class SingleServiceSerializer(serializers.ModelSerializer):
    options = OptionSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Service
        fields = (
            'id',
            'service_name',
            'options',
            'service_description',
        )

class ListServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'service_name',)

class AdviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advice
        fields = ('id', 'advice_title', 'created_at', 'advice_text',)