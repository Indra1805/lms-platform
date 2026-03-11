from oauth2_provider.contrib.rest_framework import OAuth2Authentication


class CookieOAuth2Authentication(OAuth2Authentication):
    """
    Allows OAuth2 token to be read from HttpOnly cookie
    instead of Authorization header.
    """

    def authenticate(self, request):
        # 1️⃣ If Authorization header exists → use default behavior
        if request.META.get("HTTP_AUTHORIZATION"):
            return super().authenticate(request)

        # 2️⃣ Try reading token from cookie
        token = request.COOKIES.get("access_token")

        if not token:
            return None

        # 3️⃣ Inject Authorization header
        request.META["HTTP_AUTHORIZATION"] = f"Bearer {token}"

        # 4️⃣ Continue normal OAuth authentication
        return super().authenticate(request)



# from oauth2_provider.contrib.rest_framework import OAuth2Authentication

# class CookieOAuth2Authentication(OAuth2Authentication):
#     """
#     Allows OAuth2 token to be read from HttpOnly cookie
#     instead of Authorization header.
#     """

#     def authenticate(self, request):
#         # If Authorization header exists → normal behavior
#         auth = request.META.get("HTTP_AUTHORIZATION")
#         if auth:
#             return super().authenticate(request)

#         # Else → try cookie
#         token = request.COOKIES.get("access_token")
#         if not token:
#             return None

#         request.META["HTTP_AUTHORIZATION"] = f"Bearer {token}"
#         return super().authenticate(request)
