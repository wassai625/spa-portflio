from rest_framework import serializers

from core.models import PostImage

class PostImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PostImage
        fields = "__all__"
