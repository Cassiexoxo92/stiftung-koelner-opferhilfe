import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "Unterstützen Sie die Stiftung Kölner Opferhilfe mit einer Spende. Alle Spenden sind steuerlich absetzbar. IBAN: DE12 3705 0198 1931 1469 12",
};

const ways = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Banküberweisung",
    text: "Überweisen Sie direkt auf unser Konto — einmalig oder als Dauerauftrag. Ab dem ersten Euro helfen Sie, schnelle und unbürokratische Unterstützung zu ermöglichen.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    title: "Zustiftung",
    text: "Mit einer Zustiftung erhöhen Sie das Grundkapital der Stiftung dauerhaft. Ihr Beitrag wirkt nicht nur heute, sondern langfristig für alle zukünftigen Generationen.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Unternehmenssponsoring",
    text: "Engagieren Sie sich als Unternehmen. Wir entwickeln gemeinsam ein passendes Förderkonzept — von der einmaligen Spende bis zur strategischen Partnerschaft.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Vermächtnis & Testament",
    text: "Hinterlassen Sie bleibendes Gutes. Ein Vermächtnis an die Stiftung Kölner Opferhilfe ist erbschaftssteuerfrei — Ihr gesamter Beitrag kommt den Betroffenen zugute.",
    highlight: false,
  },
];

export default function SpendenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d7377] text-white py-16 sm:py-24" aria-labelledby="spenden-hero-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Jede Hilfe zählt
            </p>
            <h1 id="spenden-hero-heading" className="text-4xl sm:text-5xl font-bold mb-5">
              Spenden Sie für Opferhilfe
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              Ihre Spende ermöglicht direkte, schnelle Hilfe für Menschen in Köln,
              die durch Gewalt oder Unfälle in Not geraten sind. Kostenlos und
              unbürokratisch — dank Ihrer Unterstützung.
            </p>
            <a
              href="#spendenkonto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0d7377] font-bold rounded-lg hover:bg-teal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Direkt zum Spendenkonto
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Spendenkonto — prominent */}
      <section id="spendenkonto" className="py-16 sm:py-24 bg-[#f0fafa]" aria-labelledby="konto-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Bankverbindung
            </p>
            <h2 id="konto-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
              Unser Spendenkonto
            </h2>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100">
            <div className="bg-[#0d7377] px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Sparkasse KölnBonn</span>
            </div>

            <dl className="divide-y divide-gray-100">
              {[
                { label: "Empfänger", value: "Stiftung Kölner Opferhilfe", mono: false, large: false },
                { label: "IBAN", value: "DE12 3705 0198 1931 1469 12", mono: true, large: true },
                { label: "BIC", value: "COLSDE33XXX", mono: true, large: false },
                { label: "Verwendungszweck", value: "Spende Stiftung Kölner Opferhilfe", mono: false, large: false },
              ].map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1">
                  <dt className="text-sm text-gray-500 sm:w-44 shrink-0">{row.label}</dt>
                  <dd className={`font-semibold ${row.mono ? "font-mono tracking-wider text-[#0d7377]" : "text-gray-900"} ${row.large ? "text-lg sm:text-xl" : ""}`}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="bg-[#f0fafa] px-6 py-4 flex items-start gap-3 border-t border-teal-100">
              <svg className="w-5 h-5 text-[#0d7377] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-[#0d7377] font-medium">
                Alle Spenden sind steuerlich absetzbar. Sie erhalten automatisch eine
                Spendenquittung. Bei Beträgen bis 300 € genügt Ihr Kontoauszug als Nachweis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wege zu helfen */}
      <section className="py-16 sm:py-24" aria-labelledby="ways-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Ihre Möglichkeiten
            </p>
            <h2 id="ways-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
              Wie Sie spenden können
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ways.map((way) => (
              <div
                key={way.title}
                className={`rounded-2xl p-7 border transition-all hover:shadow-md ${
                  way.highlight
                    ? "bg-[#0d7377] text-white border-[#0d7377]"
                    : "bg-white border-gray-100 hover:border-teal-200"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  way.highlight ? "bg-white/20" : "bg-[#f0fafa] text-[#0d7377]"
                }`}>
                  {way.icon}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${way.highlight ? "text-white" : "text-gray-900"}`}>
                  {way.title}
                </h3>
                <p className={`leading-relaxed text-sm ${way.highlight ? "text-teal-100" : "text-gray-600"}`}>
                  {way.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wofür geht die Spende */}
      <section className="py-16 sm:py-24 bg-[#f8f7f5]" aria-labelledby="impact-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
                Transparenz
              </p>
              <h2 id="impact-heading" className="text-3xl font-bold text-gray-900 mb-5">
                Wofür wird Ihre Spende eingesetzt?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Jeder gespendete Euro fließt direkt in die Unterstützung von Betroffenen
                in Köln — ohne Umwege, ohne bürokratischen Overhead.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Als rechtsfähige Stiftung des bürgerlichen Rechts unter Aufsicht der
                Bezirksregierung Köln handeln wir transparent und verantwortungsbewusst.
                Unsere Gremien arbeiten ehrenamtlich.
              </p>
              <Link
                href="/stiftung"
                className="inline-flex items-center gap-2 text-[#0d7377] font-semibold hover:gap-3 transition-all group"
              >
                Mehr zur Stiftung
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "🧠",
                  title: "Psychotherapie-Kosten",
                  text: "Übernahme von Therapiekosten, wenn Krankenkassen oder staatliche Hilfen nicht ausreichen.",
                },
                {
                  icon: "⚡",
                  title: "Sofortige Nothilfe",
                  text: "Direkte finanzielle Unterstützung in akuten Notlagen — ohne lange Wartezeit.",
                },
                {
                  icon: "🔗",
                  title: "Vermittlung & Netzwerk",
                  text: "Verbindung von Betroffenen mit Fachstellen und Beratungsangeboten in Köln.",
                },
                {
                  icon: "🛡️",
                  title: "Prävention & Opferschutz",
                  text: "Förderung von Projekten, die zukünftige Opfer schützen sollen.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                  <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Kontakt */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Fragen zum Spenden?</h2>
            <p className="text-gray-600">
              Jochen Dürselen steht Ihnen persönlich zur Verfügung —{" "}
              <a href="tel:+492214666670" className="text-[#0d7377] font-semibold hover:underline">
                0221 466667
              </a>
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 px-5 py-2.5 bg-[#0d7377] text-white font-semibold rounded-lg hover:bg-[#0a5c5f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377]"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
