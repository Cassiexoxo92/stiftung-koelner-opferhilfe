import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzhinweis",
  description: "Datenschutzhinweis der Stiftung Kölner Opferhilfe gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Datenschutzhinweis
          </h1>
          <p className="mt-3 text-gray-600">Stand: Juni 2025</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlich im Sinne der DSGVO ist:
            </p>
            <address className="not-italic mt-2 p-4 bg-[#f8f7f5] rounded-xl text-sm">
              <strong>Stiftung Kölner Opferhilfe</strong><br />
              Kennedy-Ufer 1, 50679 Köln<br />
              Telefon:{" "}
              <a href="tel:+492214666670" className="text-[#0d7377] hover:underline">
                0221 466667
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@stiftungkoelneropferhilfe.de" className="text-[#0d7377] hover:underline">
                info@stiftungkoelneropferhilfe.de
              </a>
              <br />
              Vorstand: Jochen Dürselen, Arnold Dircks
            </address>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Welche Daten wir erheben</h2>
            <h3 className="font-semibold text-gray-900 mb-2">Bei Websitebesuch</h3>
            <p>
              Beim Aufruf unserer Website werden durch den Webserver automatisch
              technische Zugriffsdaten erfasst (sog. Server-Logs): IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge,
              Browser-Typ und Betriebssystem. Diese Daten werden ausschließlich zur
              technischen Bereitstellung der Website verwendet und nach spätestens
              7 Tagen gelöscht.
            </p>
            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Bei Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, speichern
              wir Ihren Namen, Ihre E-Mail-Adresse, ggf. Ihre Telefonnummer sowie den
              Inhalt Ihrer Nachricht. Diese Daten werden ausschließlich zur Bearbeitung
              Ihrer Anfrage verwendet und danach gelöscht, sobald sie nicht mehr
              benötigt werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) bei
              Kontaktanfragen sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              für Server-Logs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
            <p>
              Diese Website verwendet <strong>keine Tracking-Cookies</strong> und keine
              Analyse-Tools von Drittanbietern. Es werden ausschließlich technisch
              notwendige Session-Cookies eingesetzt, die nach dem Schließen des Browsers
              automatisch gelöscht werden. Daher ist kein Cookie-Banner erforderlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Weitergabe an Dritte</h2>
            <p>
              Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben,
              verkauft oder zu Werbezwecken genutzt. Eine Übermittlung erfolgt nur,
              wenn wir gesetzlich dazu verpflichtet sind.
            </p>
            <p className="mt-2">
              Die Website wird über{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0d7377] hover:underline">
                Vercel Inc.
              </a>{" "}
              (San Francisco, USA) gehostet. Vercel ist nach dem EU-US Data Privacy
              Framework zertifiziert. Beim E-Mail-Versand über das Kontaktformular
              wird der Dienst{" "}
              <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-[#0d7377] hover:underline">
                Resend
              </a>{" "}
              verwendet, der ebenfalls DSGVO-konform operiert.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Um diese Rechte auszuüben, wenden Sie sich bitte an:{" "}
              <a href="mailto:info@stiftungkoelneropferhilfe.de" className="text-[#0d7377] hover:underline">
                info@stiftungkoelneropferhilfe.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren. Die zuständige Behörde für die Stiftung Kölner Opferhilfe ist:
            </p>
            <address className="not-italic mt-2 p-4 bg-[#f8f7f5] rounded-xl text-sm">
              Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
              Kavalleriestraße 2–4<br />
              40213 Düsseldorf<br />
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-[#0d7377] hover:underline">
                www.ldi.nrw.de
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Aktualität</h2>
            <p>
              Wir behalten uns vor, diesen Datenschutzhinweis bei Bedarf anzupassen.
              Die aktuelle Fassung ist stets auf dieser Seite abrufbar.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
