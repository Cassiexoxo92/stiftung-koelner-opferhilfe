import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helfen & Spenden",
  description:
    "Unterstützen Sie die Stiftung Kölner Opferhilfe mit einer Spende oder Zustiftung. Alle Spenden sind steuerlich absetzbar.",
};

const ways = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Einmalige oder regelmäßige Spende",
    text: "Jeder Betrag zählt. Eine einmalige Spende oder ein Dauerauftrag — Sie entscheiden. Alle Spenden werden zeitnah und direkt für Betroffene eingesetzt.",
    badge: "Beliebt",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Zustiftung",
    text: "Mit einer Zustiftung erhöhen Sie das Stiftungskapital dauerhaft. Ihr Beitrag wirkt nachhaltig — nicht nur einmalig, sondern für kommende Generationen.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Unternehmenssponsoring",
    text: "Als Unternehmen können Sie die Opferhilfe gezielt fördern. Wir erarbeiten gerne ein passendes Engagement — von der Einzelspende bis zur langfristigen Partnerschaft.",
    badge: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Vermächtnis & Testament",
    text: "Hinterlassen Sie ein Stück Gutes. Wer die Stiftung testamentarisch bedenkt, stellt sicher, dass seine Werte weiterleben — und Betroffene langfristig profitieren.",
    badge: null,
  },
];

export default function HelfenPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Gemeinsam stärker
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Helfen & Spenden
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Ihre Unterstützung ermöglicht schnelle, unbürokratische Hilfe für
            Menschen, die durch Gewalt oder Unfälle in Not geraten sind.
          </p>
        </div>
      </section>

      {/* Wege zu helfen */}
      <section className="py-16 sm:py-24" aria-labelledby="ways-heading">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="ways-heading" className="text-3xl font-bold text-gray-900 mb-10">
            So können Sie helfen
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ways.map((way) => (
              <div
                key={way.title}
                className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-teal-200 hover:shadow-md transition-all"
              >
                {way.badge && (
                  <span className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 bg-[#f0fafa] text-[#0d7377] rounded-full border border-teal-200">
                    {way.badge}
                  </span>
                )}
                <div className="w-14 h-14 bg-[#f0fafa] text-[#0d7377] rounded-xl flex items-center justify-center mb-5">
                  {way.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{way.title}</h3>
                <p className="text-gray-600 leading-relaxed">{way.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spendenkonto */}
      <section className="py-16 sm:py-24 bg-[#0d7377] text-white" aria-labelledby="account-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-3">
                Direkt spenden
              </p>
              <h2 id="account-heading" className="text-3xl font-bold mb-4">
                Spendenkonto
              </h2>
              <p className="text-teal-100 leading-relaxed mb-6">
                Sie können direkt auf unser Konto überweisen. Als gemeinnützige
                Stiftung stellen wir Ihnen auf Wunsch eine Spendenquittung aus —
                für jeden Betrag, unaufgefordert.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0d7377] font-semibold rounded-lg hover:bg-teal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Spendenbescheinigung anfragen
              </Link>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
              <h3 className="font-semibold text-lg mb-5">Bankverbindung</h3>
              <dl className="space-y-4">
                {[
                  { label: "Bank", value: "Sparkasse KölnBonn" },
                  { label: "Kontoinhaber", value: "Stiftung Kölner Opferhilfe" },
                  { label: "IBAN", value: "DE12 3705 0198 1931 1469 12" },
                  { label: "BIC", value: "COLSDE33XXX" },
                  { label: "Verwendungszweck", value: "Spende Opferhilfe" },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <dt className="text-teal-200 text-sm">{row.label}</dt>
                    <dd className={`font-mono font-medium ${row.label === "IBAN" || row.label === "BIC" ? "text-yellow-200 text-sm" : "text-white"}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Steuerinfo */}
      <section className="py-12 sm:py-16 bg-[#f8f7f5]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <svg className="w-10 h-10 text-[#0d7377] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Alle Spenden sind steuerlich absetzbar
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            Die Stiftung Kölner Opferhilfe ist als gemeinnützig anerkannt. Sie
            erhalten automatisch eine Spendenquittung — ohne extra nachfragen zu müssen.
            Bei Beträgen bis 300 € reicht Ihr Kontoauszug als Nachweis.
          </p>
        </div>
      </section>
    </>
  );
}
