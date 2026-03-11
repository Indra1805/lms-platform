"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

interface CourseCardProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

export default function CourseCard({
  id,
  title,
  thumbnail,
  price,
}: CourseCardProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  // const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "");

  // const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${thumbnail}`;

  const imageUrl = thumbnail;

  function handleAction(action: "cart" | "enroll") {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (action === "cart") {
      router.push(`/cart?course=${id}`);
    }

    if (action === "enroll") {
      router.push(`/courses/${id}`);
    }
  }

  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition hover-scale">

      {/* Image */}
      <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover"
        />
      </div>

      {/* Course name + price */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <h3 className="font-bold text-xl line-clamp-1">
          {title}
        </h3>

        <span className="font-bold text-xl text-gray-700">
          ₹{price}
        </span>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 border-t">

        <button
          onClick={() => handleAction("cart")}
          className="py-3 text-xl font-bold hover:bg-gray-100 border-r"
        >
          Add to Cart
        </button>

        <button
          onClick={() => handleAction("enroll")}
          className="py-3 text-xl font-bold hover:bg-gray-100"
        >
          Get Enrolled
        </button>

      </div>

    </div>
  );
}