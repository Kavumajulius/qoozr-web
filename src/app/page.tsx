import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DailyHabits from "@/components/DailyHabits";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import SmartAssist from "@/components/SmartAssist";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <DailyHabits />
      <AppShowcase />
      <Features />
      <UseCases />
      <Stats />
      <SmartAssist />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

