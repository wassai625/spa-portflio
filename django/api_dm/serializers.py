from django.db.models import Q
from rest_framework import serializers

from core.models import Message, User, FriendRequest


class FriendsFilter(serializers.PrimaryKeyRelatedField):

    def get_queryset(self):
        request = self.context['request']
        friends = FriendRequest.objects.filter(Q(askTo=request.user) & Q(approved=True))

        list_friend = []
        for friend in friends:
            list_friend.append(friend.askFrom.id)

        queryset = User.objects.filter(id__in=list_friend)
        return queryset


class MessageSerializer(serializers.ModelSerializer):
    receiver = FriendsFilter()

    class Meta:
        model = Message
        fields = ('id', 'sender', 'receiver', 'message')
        extra_kwargs = {'sender': {'read_only': True}}
