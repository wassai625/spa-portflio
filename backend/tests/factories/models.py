import factory

import core.models


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = core.models.User
        django_get_or_create = ('email',)

    email = 'test5@gmail.com'
