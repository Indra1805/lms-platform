"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import CourseCard from "@/components/courses/CourseCard";
import Link from "next/link";
import Reveal from "../ui/Reveal";

interface Course {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

export default function PopularCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const res = await api.get("/courses/");

      // limit to 6 courses
      setCourses(res.data.slice(0, 6));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p>Loading courses...</p>
      </section>
    );
  }

  return (
    <Reveal>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-8">Popular Courses</h2>

        {/* Courses grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              thumbnail={course.thumbnail}
              price={course.price}
            />
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="text-blue-600 font-medium hover:underline"
          >
            View All Courses
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
