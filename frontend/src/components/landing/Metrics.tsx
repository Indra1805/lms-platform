"use client";

import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function AboutMetrics() {
  const metrics = [
    { value: 10000, label: "Students" },
    { value: 120, label: "Courses" },
    { value: 45, label: "Expert Trainers" },
    { value: 95, label: "Completion Rate" },
  ];

  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* ABOUT */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              About Our Learning Platform
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our mission is to make high-quality education accessible to
              everyone. We partner with experienced trainers and industry
              professionals to deliver practical courses that help learners gain
              real-world skills. Whether you are starting your journey or
              advancing your career, our platform provides the tools and
              guidance you need to succeed.
            </p>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  <Counter target={item.value} />+
                </h3>

                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
