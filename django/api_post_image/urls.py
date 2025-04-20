from django.urls import path, include
from api_post_image import views
from rest_framework.routers import DefaultRouter

app_name = 'api_post_image'

router = DefaultRouter()
router.register('image',views.PostImageViewSet,basename='image')

urlpatterns = [
    path('', include(router.urls))
]