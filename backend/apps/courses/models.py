from django.db import models
from apps.users.models import User

# Create your models here.


class Course(models.Model):
    title = models.CharField(max_length=255)

    description = models.TextField()

    thumbnail = models.ImageField(
        upload_to="courses/",
        null=True,
        blank=True
    )

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        default=0
    )

    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="created_courses"
    )

    is_published = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title