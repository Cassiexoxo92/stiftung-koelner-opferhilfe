import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit der Stiftung Kölner Opferhilfe auf. Telefon: 0221 466667 | E-Mail: info@stiftungkoelneropferhilfe.de",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d7377] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Wir sind für Sie da
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-teal-100 text-xl max-w-2xl leading-relaxed">
            Sie benötigen Hilfe, haben Fragen oder möchten die Stiftung
            unterstützen? Melden Sie sich direkt.
          </p>
        </div>
      </section>

      {/* Vorstand + Kontaktdaten */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100" aria-labelledby="vorstand-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Foto-Karte */}
            <div className="bg-[#f0fafa] rounded-3xl overflow-hidden border border-teal-100 shadow-sm">
              <div className="relative w-full aspect-[4/5] bg-white">
                <Image
                  src="/jochen-duerselen.png"
                  alt="Jochen Dürselen, Stiftungsvorstand der Stiftung Kölner Opferhilfe"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="px-7 py-6">
                <p className="text-xs text-[#0d7377] font-semibold uppercase tracking-widest mb-1">
                  Ihr persönlicher Ansprechpartner
                </p>
                <h2 id="vorstand-heading" className="text-2xl font-bold text-gray-900">
                  Jochen Dürselen
                </h2>
                <p className="text-gray-500 font-medium mt-1">Stiftungsvorstand</p>
              </div>
            </div>

            {/* Kontaktinfo + Text */}
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Als Stiftungsvorstand ist Jochen Dürselen der persönliche
                  Ansprechpartner für alle Anliegen — ob Sie Hilfe benötigen,
                  spenden möchten oder Fragen zur Arbeit der Stiftung haben.
                  Er steht Ihnen direkt zur Verfügung.
                </p>
              </div>

              {/* Kontaktmittel */}
              <div className="space-y-3">
                <a
                  href="tel:+492214666670"
                  className="flex items-center gap-4 p-4 bg-[#0d7377] text-white rounded-2xl hover:bg-[#0a5c5f] transition-colors"
                >
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-200 text-xs font-medium">Telefon</p>
                    <p className="text-xl font-bold tracking-wide">0221 466667</p>
                  </div>
                </a>

                <a
                  href="tel:+4917177741300"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:bg-[#f0fafa] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#f0fafa] text-[#0d7377] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Mobil</p>
                    <p className="font-bold text-gray-900">0171 7774130</p>
                  </div>
                </a>

                <a
                  href="mailto:info@stiftungkoelneropferhilfe.de"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:bg-[#f0fafa] transition-colors"
                >
                  <div className="w-11 h-11 bg-[#f0fafa] text-[#0d7377] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">E-Mail</p>
                    <p className="font-bold text-gray-900 text-sm">
                      info@stiftungkoelneropferhilfe.de
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-2xl">
                  <div className="w-11 h-11 bg-[#f0fafa] text-[#0d7377] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Adresse</p>
                    <address className="not-italic font-bold text-gray-900 text-sm leading-relaxed">
                      Kennedy-Ufer 1<br />50679 Köln
                    </address>
                    <p className="text-xs text-gray-400 mt-1">Fax: 0221 500 686 55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spendenkonto */}
      <section className="py-14 sm:py-20 bg-[#0d7377]" aria-labelledby="spende-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white mb-10">
            <p className="text-teal-200 font-semibold text-sm uppercase tracking-widest mb-2">
              Jede Hilfe zählt
            </p>
            <h2 id="spende-heading" className="text-3xl sm:text-4xl font-bold mb-3">
              Spendenkonto
            </h2>
            <p className="text-teal-100 max-w-xl mx-auto">
              Ihre Spende kommt direkt und vollständig bei Betroffenen an.
              Als gemeinnützige Stiftung erhalten Sie automatisch eine
              steuerlich absetzbare Spendenquittung.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#0a5c5f] px-6 py-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <span className="text-white font-semibold">Bankverbindung</span>
            </div>
            <dl className="divide-y divide-gray-100">
              {[
                { label: "Empfänger", value: "Stiftung Kölner Opferhilfe", mono: false },
                { label: "Bank", value: "Sparkasse KölnBonn", mono: false },
                { label: "IBAN", value: "DE12 3705 0198 1931 1469 12", mono: true },
                { label: "BIC", value: "COLSDE33XXX", mono: true },
                { label: "Verwendungszweck", value: "Stiftung Kölner Opferhilfe", mono: false },
              ].map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1">
                  <dt className="text-sm text-gray-500 sm:w-44 shrink-0">{row.label}</dt>
                  <dd className={`font-semibold text-gray-900 ${row.mono ? "font-mono tracking-wide text-[#0d7377]" : ""}`}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="bg-[#f0fafa] px-6 py-4 flex items-center gap-2 text-sm text-[#0d7377]">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Spenden sind steuerlich absetzbar — Quittung auf Wunsch oder automatisch.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formular */}
      <section id="hilfe-formular" className="py-16 sm:py-24" aria-label="Kontaktformular">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Direkt schreiben
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Nachricht senden</h2>
            <p className="text-gray-500 mt-2">
              Wir antworten so schnell wie möglich — in der Regel innerhalb von 24 Stunden.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
