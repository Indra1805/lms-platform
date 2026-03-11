import requests
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# create your authapi views here

@csrf_exempt
def exchange_code(request):
    if request.method != "POST":
        return JsonResponse({"detail": "Method not allowed"}, status=405)

    code = request.POST.get("code")
    code_verifier = request.POST.get("code_verifier")
    client_id = request.POST.get("client_id")
    redirect_uri = request.POST.get("redirect_uri")

    if not code or not code_verifier:
        return JsonResponse({"detail": "Missing code"}, status=400)

    token_url = f"{request.scheme}://{request.get_host()}/o/token/"

    payload = {
        "grant_type": "authorization_code",
        "client_id": client_id,
        "code": code,
        "redirect_uri": redirect_uri,
        "code_verifier": code_verifier,
    }

    r = requests.post(token_url, data=payload)
    data = r.json()

    if "access_token" not in data:
        return JsonResponse(data, status=400)

    response = JsonResponse({"success": True})

    access_token = data["access_token"]
    refresh_token = data["refresh_token"]
    expires_in = data.get("expires_in", 3600)

    response.set_cookie(
        "access_token",
        access_token,
        httponly=True,
        secure=not settings.DEBUG,
        samesite="Lax",
        max_age=expires_in,
    )

    response.set_cookie(
        "refresh_token",
        refresh_token,
        httponly=True,
        secure=not settings.DEBUG,
        samesite="Lax",
    )

    return response


def logout(request):
    response = JsonResponse({"success": True})

    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")

    return response