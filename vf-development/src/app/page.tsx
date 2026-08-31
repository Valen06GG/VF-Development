'use client';

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero_section";
import Services from "../services/service";
import ProjectsSection from "../components/projects/projects_section";
import ProcessSection from "../components/process/process_section";
import AboutSection from "../components/about/about_section";
import CtaSection from "../components/cta/cta_section";
import ContactSection from "../components/contact/contact_section";
import Footer from "../components/footer/footer";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}