import Reveal from "@/components/ui/Reveal";

export default function Categories() {
  const categories = [
    "Web Development",
    "Data Science",
    "DevOps",
    "Machine Learning",
    "Cloud Computing",
    "Mobile Development",
  ];

  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Popular Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                className="p-6 text-center border rounded-xl hover:shadow-md transition"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
