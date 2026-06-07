import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiftung Kölner Opferhilfe – Wir sind für Sie da",
  description:
    "Kostenlose und vertrauliche Hilfe für Opfer von Gewalt und Unfällen im Raum Köln. Rufen Sie uns an: 0221 466667",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Psychotherapie-Kosten",
    text: "Wir übernehmen Kosten für professionelle psychotherapeutische Behandlung, wenn staatliche Hilfen nicht ausreichen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Soforthilfe",
    text: "Schnelle und unbürokratische finanzielle Unterstützung in akuten Notlagen — ohne lange Antragswege.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Opferschutz-Prävention",
    text: "Wir fördern Projekte und Maßnahmen, die zukünftige Opfer schützen und das Bewusstsein für Opferschutz stärken.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Netzwerk & Vermittlung",
    text: "Wir vernetzen Betroffene mit den richtigen Fachstellen, Beratungsstellen und Hilfsorganisationen in Köln.",
  },
];

const steps = [
  {
    number: "1",
    title: "Melden Sie sich",
    text: "Rufen Sie uns an oder schreiben Sie uns. Alles was Sie erzählen, bleibt vertraulich.",
  },
  {
    number: "2",
    title: "Wir klären gemeinsam",
    text: "In einem ersten Gespräch schauen wir gemeinsam, welche Hilfe Sie benötigen und was wir tun können.",
  },
  {
    number: "3",
    title: "Sie erhalten Unterstützung",
    text: "Wir handeln schnell und unbürokratisch — ohne lange Formulare, ohne Wartezeiten.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-[#0d7377] text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Stiftung Kölner Opferhilfe
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Sie sind nicht
              <br />
              allein.
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 mb-8 leading-relaxed max-w-xl">
              Wenn Gewalt oder ein Unfall Ihr Leben verändert hat — wir sind da.
              Kostenlos, vertraulich und unbürokratisch.
            </p>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                <svg className="w-5 h-5 text-[#0d7377]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-teal-200 font-medium">Direkte Hilfe</p>
                <a
                  href="tel:+492214666670"
                  className="text-2xl font-bold hover:text-teal-200 transition-colors"
                  aria-label="Jetzt anrufen: 0221 466667"
                >
                  0221 466667
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0d7377] font-semibold rounded-lg hover:bg-teal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d7377]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Ich brauche Hilfe
              </Link>
              <Link
                href="/helfen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ich möchte helfen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#f0fafa] border-b border-teal-100" aria-label="Schlüsselfakten">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Seit 2012", label: "für Köln da" },
              { value: "100 %", label: "kostenlos" },
              { value: "Vertraulich", label: "immer diskret" },
              { value: "Unbürokratisch", label: "schnelle Hilfe" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#0d7377]">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wer wir helfen */}
      <section className="py-16 sm:py-24" aria-labelledby="who-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
                Unsere Mission
              </p>
              <h2 id="who-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Für jeden Menschen,
                <br />
                dem Unrecht widerfahren ist.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Gewalt, ein schwerer Unfall, ein traumatisches Erlebnis — solche Momente
                können das Leben von einem Tag auf den anderen verändern. Wir helfen
                Menschen im Raum Köln dabei, wieder Boden unter die Füße zu bekommen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Die Stiftung Kölner Opferhilfe wurde 2012 gegründet, um eine Lücke zu
                schließen: Viele Betroffene wissen nicht, wo sie Hilfe finden. Andere
                schrecken vor Bürokratie zurück. Wir machen den Weg einfacher.
              </p>
              <Link
                href="/stiftung"
                className="inline-flex items-center gap-2 text-[#0d7377] font-semibold hover:gap-3 transition-all group"
              >
                Mehr über die Stiftung
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-[#f0fafa] rounded-2xl p-8 border border-teal-100">
              <p className="text-sm font-semibold text-[#0d7377] uppercase tracking-wider mb-5">
                Wir helfen bei
              </p>
              <ul className="space-y-4" role="list">
                {[
                  "Körperlicher Gewalt & Misshandlung",
                  "Raub, Einbruch & Diebstahl mit Gewalt",
                  "Sexualisierter Gewalt",
                  "Verkehrsunfällen mit schweren Folgen",
                  "Häuslicher Gewalt",
                  "Psychischen Folgeerkrankungen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0d7377] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-16 sm:py-24 bg-[#f8f7f5]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Was wir tun
            </p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
              Unsere Leistungen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#f0fafa] text-[#0d7377] rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-16 sm:py-24" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Einfach & klar
            </p>
            <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
              So funktioniert Hilfe bei uns
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-teal-100"
                    aria-hidden="true"
                  />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0d7377] text-white text-2xl font-bold rounded-full mb-5 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Helfen */}
      <section className="py-16 sm:py-24 bg-[#0d7377]" aria-labelledby="donate-heading">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 id="donate-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Sie möchten helfen?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Jede Spende ermöglicht uns, schnell und unbürokratisch zu helfen.
            Spenden sind steuerlich absetzbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/helfen"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#0d7377] font-semibold rounded-lg hover:bg-teal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Jetzt spenden
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
