
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="pocetna"
      className="relative isolate overflow-hidden bg-cream"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/chess-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/10 lg:via-cream/80 lg:to-transparent" />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-2xl">

          {/* Eyebrow text */}
          <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Nauči. Napreduj. Uživaj u šahu.
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl leading-[1.15] font-semibold tracking-tight text-heading sm:text-6xl lg:text-7xl">
            Škola šaha za
            <span className="block text-primary">
              decu i odrasle
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Unapredite svoju igru uz strukturisane časove,
            individualni pristup i prijatno okruženje za
            učenje. Bilo da ste početnik ili želite da
            podignete nivo igre, ovde ćete pronaći
            stručnu podršku i jasne korake ka napretku.
          </p>

          {/* Primary CTA */}
          <div className="mt-9">
            <a
              href="#casovi"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
            >
              Rezerviši čas
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}