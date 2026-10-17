import {
  GraduationCap,
  Users,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const benefits = [
  {
    title: "Strukturisani časovi",
    description:
      "Jasan plan i postepeni napredak, prilagođen vašem nivou.",
    icon: GraduationCap,
  },
  {
    title: "Za decu i odrasle",
    description:
      "Časovi prilagođeni uzrastu, znanju i ciljevima svakog polaznika.",
    icon: Users,
  },
  {
    title: "Praćenje napretka",
    description:
      "Redovne povratne informacije i jasni ciljevi učenja.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:px-6">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex items-start gap-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream text-primary">
                <Icon size={26} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-heading">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}