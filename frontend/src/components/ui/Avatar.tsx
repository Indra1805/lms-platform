"use client";

interface AvatarProps {
  name?: string;
  size?: number;
}

export default function Avatar({ name = "", size = 36 }: AvatarProps) {
  const letter = name ? name.trim().charAt(0).toUpperCase() : "?";

  return (
    <div
      className="flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
      }}
    >
      {letter}
    </div>
  );
}