import Reveal from "../ui/Reveal";

export default function SocialProof() {
  const companies = ["Google", "Amazon", "Microsoft", "Meta", "Netflix"];

  return (
    <Reveal>
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-6">
            Trusted by learners from top companies
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-gray-700 font-semibold">
            {companies.map((company) => (
              <span key={company}>{company}</span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
