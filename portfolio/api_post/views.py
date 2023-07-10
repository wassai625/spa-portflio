from rest_framework import viewsets, permissions, generics

from api_post import serializers
from core.models import Post, PostComment


# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PostSerializer

class PostCommentViewSet(viewsets.ModelViewSet):
    queryset = PostComment.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PostCommentWithForeignSerializer

class PostCommentListView(generics.ListAPIView):
    serializer_class = serializers.PostCommentWithForeignSerializer

    def get_queryset(self):
        queryset = PostComment.objects.all()
        title = self.request.query_params.get('title')
        if title is not None:
            queryset = queryset.filter(post__title__icontains=title)
        return queryset


class PostListView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = serializers.PostWithForeignSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(post__title__icontains=title)
        return queryset
