import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Die Stiftung",
  description:
    "Erfahren Sie mehr über die Stiftung Kölner Opferhilfe — unsere Geschichte, unsere Werte und warum wir 2012 gegründet wurden.",
};

export default function StiftungPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Wer wir sind
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Die Stiftung
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Seit 2012 stehen wir an der Seite von Menschen, die durch Gewalt oder
            Unfälle zu Opfern wurden — im Raum Köln, vertraulich und kostenlos.
          </p>
        </div>
      </section>

      {/* Stiftungsanliegen */}
      <section className="py-16 sm:py-24" aria-labelledby="mission-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="mission-heading" className="text-3xl font-bold text-gray-900 mb-5">
                Unser Stiftungsanliegen
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Die Stiftung Kölner Opferhilfe bietet{" "}
                <strong className="text-gray-800">
                  vertrauliche, unbürokratische und unentgeltliche Hilfe
                </strong>{" "}
                für Menschen im Raum Köln, die durch Gewalt oder Unfall zu Opfern
                geworden sind.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wir glauben: Wer in Not geraten ist, braucht keine Formulare — der
                braucht Menschen, die zuhören, und schnelle, konkrete Unterstützung.
                Genau das ist unser Anspruch.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Als rechtsfähige Stiftung des bürgerlichen Rechts handeln wir
                unabhängig und gemeinnützig. Die Bezirksregierung Köln beaufsichtigt
                unsere Arbeit — ein Zeichen von Transparenz und Vertrauen.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Direkte Hilfe für Opfer",
                  text: "Wir unterstützen Opfer von Straftaten und Unfällen direkt — zum Beispiel durch die Übernahme von Kosten für Psychotherapie oder durch finanzielle Soforthilfe in akuten Notlagen.",
                },
                {
                  title: "Prävention & Opferschutz",
                  text: "Wir fördern Maßnahmen, die zukünftige Opfer schützen und das gesellschaftliche Bewusstsein für Opferschutz stärken.",
                },
                {
                  title: "Netzwerk gemeinnütziger Organisationen",
                  text: "Wir beschaffen Mittel für andere gemeinnützige Organisationen, die sich mit den Folgen von Gewalt und Unfällen befassen.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#f0fafa] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#0d7377]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte */}
      <section className="py-16 sm:py-24 bg-[#f8f7f5]" aria-labelledby="history-heading">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Unsere Geschichte
          </p>
          <h2 id="history-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Gegründet aus Überzeugung
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 text-lg">
            2012 haben engagierte Kölnerinnen und Kölner die Stiftung gegründet — mit
            einer klaren Vision: Opfer von Gewalt und Unfällen sollen nicht allein
            gelassen werden.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hinter der Stiftung stehen Menschen aus Wirtschaft, Justiz und
            Gesellschaft, die ihr Engagement, ihre Netzwerke und ihr Wissen
            einbringen. Gemeinsam tragen wir dazu bei, dass Betroffene in Köln
            schnell und unkompliziert Unterstützung finden.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Sie haben Fragen zur Stiftung?
            </h2>
            <p className="text-gray-600">
              Sprechen Sie uns direkt an — wir antworten gerne.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/kontakt"
              className="px-5 py-2.5 bg-[#0d7377] text-white font-semibold rounded-lg hover:bg-[#0a5c5f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377]"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/ueber-uns"
              className="px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377]"
            >
              Unser Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
