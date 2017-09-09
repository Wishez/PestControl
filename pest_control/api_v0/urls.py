from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'services', SingleServiceViewset)
router.register(r'advice', AdviceViewset)

urlpatterns = router.urls
