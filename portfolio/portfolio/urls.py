"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.conf import settings # New
from django.contrib.staticfiles.urls import static # New
from django.contrib.staticfiles.urls import staticfiles_urlpatterns # New


urlpatterns = [
    path("admin/", admin.site.urls),
    path("authen", views.obtain_auth_token),
    path("api/user/", include("api_user.urls")),
    path("api/dm/", include("api_dm.urls")),
    path("api/post/", include("api_post.urls")),
    path("api/post/image/", include("api_post_image.urls")),

]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
