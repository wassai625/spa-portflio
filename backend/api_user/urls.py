from django.urls import path, include
from api_user import views
from rest_framework.routers import DefaultRouter

app_name = 'user'

router = DefaultRouter()
router.register('profile', views.ProfileViewSet)
router.register('approval', views.FriendRequestViewSet)

urlpatterns = [
    path('create', views.CreateUserView.as_view(), name='create'),
    path('profile', views.ProfileListView.as_view(), name='profile'),
    path('', include(router.urls))
]
