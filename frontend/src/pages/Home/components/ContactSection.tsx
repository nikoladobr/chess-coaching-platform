
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Clock } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.message.trim()) {
      setError("Molimo popunite sva obavezna polja.");
      return;
    }

    // TODO: Connect to backend API.
    console.log("Contact form data:", form);
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Contact information */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Kontaktirajte nas
          </p>

          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-heading sm:text-5xl">
            Napravite
            <span className="block text-primary">
              prvi potez.
            </span>
          </h2>

          <p className="mb-9 max-w-md text-base leading-8 text-muted">
            Imate pitanje o časovima ili želite da
            saznate više o načinu rada?
            Pošaljite nam poruku i rado ćemo vam
            pomoći da započnete svoje šahovsko putovanje.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-heading">
                  Email
                </p>
                <p className="text-sm text-muted">
                  Kontaktirajte nas putem forme
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-heading">
                  Radujemo se vašoj poruci
                </p>
                <p className="text-sm text-muted">
                  Odgovorićemo čim budemo u mogućnosti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm sm:p-10"
        >
          <div className="mb-6">
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-heading"
            >
              Ime i prezime
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vaše ime i prezime"
              className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-heading"
            >
              Email adresa
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ime@email.com"
              className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="mb-7">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-heading"
            >
              Poruka
            </label>

            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Kako vam možemo pomoći?"
              className="w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          {error && (
            <p role="alert" className="mb-4 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Pošalji poruku
            <ArrowRight size={18} />
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-muted">
            Forma je trenutno u pripremi.
            Slanje poruka još nije omogućeno.
          </p>
        </form>
      </div>
    </section>
  );
}
