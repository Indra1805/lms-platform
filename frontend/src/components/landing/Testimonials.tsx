import Reveal from "../ui/Reveal";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      text: "This platform helped me transition into web development with practical projects.",
    },
    {
      name: "Maria Lopez",
      role: "Data Analyst",
      text: "The courses are structured perfectly for beginners and professionals alike.",
    },
    {
      name: "Daniel Kim",
      role: "DevOps Engineer",
      text: "Excellent instructors and real-world content. Highly recommended.",
    },
  ];

  return (
    <Reveal>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Learners Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <p className="text-gray-600">{t.text}</p>

                <div className="mt-4 font-semibold">{t.name}</div>

                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
