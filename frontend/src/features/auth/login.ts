import { generateCodeVerifier, generateCodeChallenge } from "@/lib/pkce";

export async function loginWithOAuth() {
  // Clear any previous verifier
  sessionStorage.removeItem("pkce_verifier");

  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);

  sessionStorage.setItem("pkce_verifier", verifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
    code_challenge: challenge,
    code_challenge_method: "S256",
    scope: "read write",
  });

  window.location.href =
    `${process.env.NEXT_PUBLIC_OAUTH_AUTHORIZE_URL}?${params.toString()}`;
}