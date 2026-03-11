from rest_framework.permissions import BasePermission


class IsAuthenticatedAndActive(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_active
        )


class IsSuperAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "SUPER_ADMIN"


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.role in ["ADMIN", "SUPER_ADMIN"]


class IsTrainer(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "TRAINER"


class IsSME(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "SME"


class IsLearner(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "LEARNER"
