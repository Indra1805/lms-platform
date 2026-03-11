"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Course = {
  id: number;
  title: string;
  description: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.get("/api/courses/")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Courses</h1>

      <div className="grid gap-4">
        {courses.map(course => (
          <div key={course.id} className="border p-4 rounded">
            <h2 className="font-bold">{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}