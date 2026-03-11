"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    handleCallback();
  }, []);

  async function handleCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const verifier = sessionStorage.getItem("pkce_verifier");

    if (!code || !verifier) {
      router.replace("/login");
      return;
    }

    try {
      await api.post(
        "/auth/exchange/",
        new URLSearchParams({
          code,
          code_verifier: verifier,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        }),
        { withCredentials: true }
      );

      sessionStorage.removeItem("pkce_verifier");

      // verify session
      await api.get("/users/me/");

      router.replace("/dashboard");

    } catch (err) {
      console.error(err);
      router.replace("/login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Logging you in...</p>
    </div>
  );
}