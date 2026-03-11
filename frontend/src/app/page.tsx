import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import AboutMetrics from "@/components/landing/Metrics";
import Categories from "@/components/landing/Categories";
import PopularCourses from "@/components/landing/PopularCourses";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";

export default function HomePage() {

  return (
    <main>

      <Hero />

      <SocialProof />

      <AboutMetrics />

      <Categories />

      <PopularCourses />

      <Testimonials />

      <CTA />

    </main>
  );
}