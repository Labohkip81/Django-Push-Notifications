from os import stat
from django.conf import settings
from django.urls import path
from django.urls.conf import include
from django.conf.urls.static import static
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('send_push', views.send_push, name='send_push'),
    path('web_push/', include('webpush.urls')),
    path('sw.js', TemplateView.as_view(template_name='sw.js', content_type='application/x-javascript'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
