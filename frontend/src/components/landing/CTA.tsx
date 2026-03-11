"use client";

import { useRouter } from "next/navigation";
import Reveal from "../ui/Reveal";

export default function CTA() {
  const router = useRouter();

  return (
    <Reveal>
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Start Learning Today</h2>

        <p className="mt-4 text-blue-100">
          Join thousands of learners building real-world skills.
        </p>

        <button
          onClick={() => router.push("/courses")}
          className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
        >
          Explore Courses
        </button>
      </section>
    </Reveal>
  );
}
