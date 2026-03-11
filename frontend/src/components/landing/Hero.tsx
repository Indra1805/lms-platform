"use client";

import { useRouter } from "next/navigation";
import Reveal from "../ui/Reveal";

export default function Hero() {
  const router = useRouter();

  return (
    <Reveal>
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-32 overflow-hidden">
        {/* floating gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="absolute top-40 -right-32 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Build Skills That
              <span className="text-blue-600"> Shape Your Future</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Learn from industry professionals through hands-on courses
              designed to help you master real-world technologies and advance
              your career.
            </p>

            <div className="flex gap-4 mt-10">
              <button
                onClick={() => router.push("/courses")}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Browse Courses
              </button>

              <button
                onClick={() => router.push("/login")}
                className="border px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
              >
                Start Learning
              </button>
            </div>
          </div>

          {/* HERO ILLUSTRATION */}
          <div className="flex justify-center">
            <img
              src="/hero-learning.svg"
              alt="Learning illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
