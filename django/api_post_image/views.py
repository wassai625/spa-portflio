from django.shortcuts import render
from rest_framework import viewsets, permissions

from core.models import PostImage
from api_post_image import serializers
# Create your views here.

class PostImageViewSet(viewsets.ModelViewSet):
    queryset = PostImage.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PostImageSerializer

