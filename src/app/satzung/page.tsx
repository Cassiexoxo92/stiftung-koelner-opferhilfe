import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Satzung",
  description:
    "Die Satzung der Stiftung Kölner Opferhilfe regelt Zweck, Gremien und den Umgang mit Stiftungsgeldern.",
};

export default function SatzungPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Transparenz & Governance
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Satzung
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Die Satzung regelt den Zweck der Stiftung, die Zusammensetzung der
            Gremien und den verantwortungsvollen Umgang mit Stiftungsgeldern.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="satzung-heading">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
            <div className="w-16 h-16 bg-[#f0fafa] text-[#0d7377] rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 id="satzung-heading" className="text-2xl font-bold text-gray-900 mb-3">
              Satzung als PDF
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">
              Die vollständige Satzung der Stiftung Kölner Opferhilfe steht Ihnen
              als PDF zum Download bereit.
            </p>
            <a
              href="https://www.stiftung-koelner-opferhilfe.de/wp-content/uploads/satzung-koelner-opferhilfe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d7377] text-white font-semibold rounded-lg hover:bg-[#0a5c5f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Satzung herunterladen (PDF)
            </a>
          </div>

          {/* Summary */}
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Das regelt die Satzung
            </h2>
            {[
              {
                title: "Stiftungszweck",
                text: "Die Satzung legt fest, wofür die Stiftung existiert: die Unterstützung von Opfern von Straftaten und Unfällen sowie die Förderung von Opferschutzmaßnahmen.",
              },
              {
                title: "Gremien & Besetzung",
                text: "Geregelt werden die Aufgaben und Zusammensetzung von Stiftungsvorstand und Kuratorium sowie deren Entscheidungskompetenzen.",
              },
              {
                title: "Stiftungsgelder",
                text: "Die Satzung definiert, wie das Stiftungsvermögen verwaltet und eingesetzt wird — transparent, zweckgebunden und im Einklang mit dem gemeinnützigen Status.",
              },
              {
                title: "Aufsicht",
                text: "Die Stiftung steht unter der Aufsicht der Bezirksregierung Köln (Dezernat 21) — ein Zeichen für Seriosität und Verantwortungsbewusstsein.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-6 h-6 bg-[#f0fafa] rounded-full flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <svg className="w-3.5 h-3.5 text-[#0d7377]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-600">
            Fragen zur Satzung oder zur Stiftungsstruktur?
          </p>
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
