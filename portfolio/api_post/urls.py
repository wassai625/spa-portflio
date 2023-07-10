from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api_post import views
from .views import *

app_name = 'api_post'

router = DefaultRouter()
router.register('post', views.PostViewSet, basename='post')
router.register('comments',views.PostCommentViewSet,basename='comments')
router.register('post_search', views.PostListView, basename='post_search')

urlpatterns = [
    path('', include(router.urls)),
    path('search_comments/', PostCommentListView.as_view(), name='search_comments'),
]
