from django.db import models
from django.conf import settings
if not settings.DEBUG:
    import sys
    reload(sys)
    sys.setdefaultencoding('utf-8')
