from django.core.management.base import BaseCommand
from apps.users.models import Role

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        roles = [
            "SUPER_ADMIN",
            "ADMIN",
            "SME",
            "TRAINER",
            "LEARNER"
        ]
        for role in roles:
            Role.objects.get_or_create(name=role)

        self.stdout.write("Roles seeded")
