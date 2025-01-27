import Hero from "@/components/Hero/hero";
import FeaturesSection from "@/components/Features/features";
import FAQSection from "@/components/FAQ/faq";
import TestimonialSection from "@/components/Testimonial/testimonial";
import Footer from "@/components/Footer/footer";
import FounderSection from "@/components/Founder/founder";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <FounderSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
