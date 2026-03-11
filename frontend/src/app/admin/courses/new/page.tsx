"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/api/courses/", {
        title,
        description
      });

      router.push("/courses");
    } catch (err: any) {
      alert(err.response?.data?.detail || "Not allowed");
    }
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl mb-4">Create Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2"
        >
          Create
        </button>

      </form>
    </div>
  );
}