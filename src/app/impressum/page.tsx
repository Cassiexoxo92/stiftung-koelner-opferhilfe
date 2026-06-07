import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Stiftung Kölner Opferhilfe.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Impressum</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>Stiftung Kölner Opferhilfe</strong>
                <br />
                (Rechtsfähige Stiftung des bürgerlichen Rechts)
                <br />
                Kennedy-Ufer 1<br />
                50679 Köln
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Vertreten durch</h2>
              <p>
                <strong>Stiftungsvorstand:</strong>
                <br />
                Jochen Dürselen (Stiftungsvorstand)
                <br />
                Arnold Dircks (Stellvertretender Stiftungsvorstand)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Kontakt</h2>
              <p>
                Telefon:{" "}
                <a href="tel:+492214666670" className="text-[#0d7377] hover:underline">
                  0221 466667
                </a>
                <br />
                Telefax: 0221 500 686 55
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@stiftungkoelneropferhilfe.de"
                  className="text-[#0d7377] hover:underline"
                >
                  info@stiftungkoelneropferhilfe.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Aufsichtsbehörde</h2>
              <p>
                Bezirksregierung Köln, Dezernat 21
                <br />
                Zeughausstraße 2–10
                <br />
                50667 Köln
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Kuratorium</h2>
              <ul className="list-none space-y-1 pl-0">
                <li>Dr. h.c. Fritz Schramma</li>
                <li>Heinz-Bert Schmitz</li>
                <li>Andreas Mühlenweg</li>
                <li>Hans-Gerhard Wirtz</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Haftungsausschluss</h2>
              <h3 className="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
                die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich.
              </p>
              <h3 className="font-semibold text-gray-900 mt-4 mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
