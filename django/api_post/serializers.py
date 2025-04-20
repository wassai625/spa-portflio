from rest_framework import serializers

from core.models import Post,PostComment
from api_user.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'writer', 'title', 'text', 'created_at')

class PostWithForeignSerializer(serializers.ModelSerializer):
    user = UserSerializer
    class Meta:
        model = Post
        fields = '__all__'

class PostCommentWithForeignSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = '__all__'

    # def create(self, validated_data):
    #     return PostComment(**validated_data)
    #

