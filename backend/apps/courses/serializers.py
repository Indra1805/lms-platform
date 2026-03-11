from rest_framework import serializers
from .models import Course

# create your courses serializers here

class CourseSerializer(serializers.ModelSerializer):
    trainer_name = serializers.CharField(
        source="created_by.full_name",
        read_only=True
    )

    class Meta:
        model = Course
        fields = [
            "id",
            "title",
            "description",
            "thumbnail",
            "price",
            "trainer_name",
            "created_by",
            "is_published",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_by",
            "created_at",
        ]

        def get_thumbnail(self, obj):
            request = self.context.get("request")

            if obj.thumbnail and request:
                return request.build_absolute_uri(obj.thumbnail.url)

            return None