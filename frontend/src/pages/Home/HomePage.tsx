
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import CoachSection from "./components/CoachSection";
import LessonsSection from "./components/LessonsSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <BenefitsSection />
        <CoachSection />
        <LessonsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
