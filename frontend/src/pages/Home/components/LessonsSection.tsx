
import { BookOpen, Target, Brain, ArrowRight } from "lucide-react";

const lessons = [
  {
    id: "beginners",
    title: "Šah za početnike",
    description:
      "Napravite prve korake u svetu šaha i izgradite dobre temelje za dalje učenje.",
    details:
      "Učenje pravila, vrednosti figura, osnovnih taktičkih motiva i principa otvaranja.",
    icon: BookOpen,
  },
  {
    id: "individual",
    title: "Individualni časovi",
    description:
      "Unapredite svoju igru kroz individualan pristup prilagođen vašim ciljevima.",
    details:
      "Analiza vaših partija, prepoznavanje slabosti i kreiranje plana za napredak.",
    icon: Target,
  },
  {
    id: "advanced",
    title: "Napredni trening",
    description:
      "Produbite razumevanje igre kroz složenije pozicije i strateške koncepte.",
    details:
      "Priprema otvaranja, strateško planiranje, završnice i detaljna analiza partija.",
    icon: Brain,
  },
];

export default function LessonsSection() {
  return (
    <section
      id="casovi"
      className="scroll-mt-20 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Programi obuke
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-heading sm:text-5xl">
            Časovi prilagođeni
            <span className="block text-primary">
              vašem nivou
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted">
            Bilo da tek počinjete ili već imate iskustva,
            pronađite pristup učenju koji odgovara vašim
            ciljevima.
          </p>
        </div>

        {/* Lesson cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;

            return (
              <article
                key={lesson.id}
                className="flex flex-col rounded-2xl border border-black/10 bg-cream p-8 transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={28} strokeWidth={1.6} />
                </div>

                <h3 className="mb-4 font-serif text-2xl font-semibold text-heading">
                  {lesson.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-muted">
                  {lesson.description}
                </p>

                {/* Expandable program information */}
                <details className="group mt-auto border-t border-black/10 pt-5">
                  <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
                    Saznaj više

                    <ArrowRight
                      size={17}
                      className="transition-transform group-open:rotate-90"
                    />
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {lesson.details}
                  </p>
                </details>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
