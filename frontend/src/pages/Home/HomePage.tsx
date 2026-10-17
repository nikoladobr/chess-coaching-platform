import Header from "../../components/layout/Header";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        {/* Temporary section targets */}
        <section id="casovi" className="px-6 py-20">
          <h2 className="font-serif text-3xl">
            Naši časovi
          </h2>
        </section>

        <section id="o-nama" className="px-6 py-20">
          <h2 className="font-serif text-3xl">
            O treneru
          </h2>
        </section>

        <section id="kontakt" className="px-6 py-20">
          <h2 className="font-serif text-3xl">
            Kontakt
          </h2>
        </section>
      </main>
    </>
  );
}