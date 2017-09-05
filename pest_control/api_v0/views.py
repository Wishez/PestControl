from rest_framework import viewsets
from .serializers import *

class SingleServiceViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = SingleServiceSerializer

class AdviceViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Advice.objects.all()
    serializer_class = AdviceSerializer
