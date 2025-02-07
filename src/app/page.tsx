'use client';

import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ServicesSection from "../components/services-section"
import CTASection from "../components/cta-section"
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects";
import Navbar from "@/components/navBar";
import TestimonialsSection from "@/components/clients";
import PaymentMethods from "@/components/payment-methods";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection  />
      <TestimonialsSection />
      <CTASection />
      <PaymentMethods />
      <Footer />
    </main>
  )
}