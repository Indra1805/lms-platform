"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Avatar from "@/components/ui/Avatar";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const { user, isAuthenticated, logout } = useAuthStore();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/courses?q=${encodeURIComponent(query)}`);
  }

  function handleCart() {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    router.push("/cart");
  }

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-3">

        {/* LEFT — Logo */}
        <div className="flex justify-start">
          <Link href="/" className="text-xl font-bold">
            LMS
          </Link>
        </div>

        {/* CENTER — Search */}
        <div className="flex justify-center">
          <form onSubmit={handleSearch} className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* RIGHT — Navigation */}
        <div className="flex justify-end items-center gap-6">

          <Link href="/courses" className="text-sm font-medium">
            Courses
          </Link>

          <button
            onClick={handleCart}
            className="text-sm font-medium"
          >
            Cart
          </button>

          {/* Guest */}
          {!isAuthenticated && (
            <>
              <Link href="/login" className="text-sm font-medium">
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Signup
              </Link>
            </>
          )}

          {/* Logged User */}
          {isAuthenticated && user && (
            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2"
              >
                <Avatar name={user.full_name} />

                <span className="text-sm font-medium">
                  {user.full_name.split(" ")[0]}
                </span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">

                  <button
                    onClick={() => router.push("/dashboard")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}