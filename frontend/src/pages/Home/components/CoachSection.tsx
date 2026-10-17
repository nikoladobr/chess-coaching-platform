import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Individualni pristup svakom učeniku",
  "Rad na taktici, strategiji i završnicama",
  "Časovi prilagođeni vašem nivou",
];

export default function CoachSection() {
  return (
    <section
      id="o-nama"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Coach image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/coach.jpg"
            alt="Šahovski trener"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        {/* Coach information */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Upoznajte trenera
          </p>

          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-heading sm:text-5xl">
            Učite šah uz
            <span className="block text-primary">
              stručnu podršku
            </span>
          </h2>

          <p className="mb-8 max-w-lg text-base leading-8 text-muted">
            Bez obzira na to da li tek upoznajete šah
            ili želite da unapredite svoju igru,
            časovi su osmišljeni tako da učite
            postepeno, razumete pozicije i
            razvijate samostalno razmišljanje.
          </p>

          {/* Benefits */}
          <ul className="mb-9 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-primary"
                />

                <span className="text-sm text-heading">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 rounded-lg border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Saznaj više
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}