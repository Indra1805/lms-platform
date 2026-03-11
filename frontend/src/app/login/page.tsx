"use client";
import { loginWithOAuth } from "@/features/auth/login";

export default function LoginPage() {
  return (
    <button
      onClick={loginWithOAuth}
      className="bg-blue-600 text-white p-2"
    >
      Login
    </button>
  );
}
