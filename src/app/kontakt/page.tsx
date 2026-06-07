import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit der Stiftung Kölner Opferhilfe auf. Telefon: 0221 466667 | E-Mail: info@stiftungkoelneropferhilfe.de",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Wir sind für Sie da
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Sie haben Fragen, benötigen Hilfe oder möchten die Stiftung
            unterstützen? Melden Sie sich — wir antworten so schnell wie möglich.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-label="Kontaktbereich">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  Direkt erreichen
                </h2>

                {/* Emergency phone */}
                <a
                  href="tel:+492214666670"
                  className="flex items-center gap-4 p-5 bg-[#0d7377] text-white rounded-2xl hover:bg-[#0a5c5f] transition-colors mb-4 group"
                  aria-label="Anrufen: 0221 466667"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-200 text-xs font-medium">Telefon</p>
                    <p className="text-xl font-bold">0221 466667</p>
                  </div>
                </a>

                {/* Mobil */}
                <a
                  href="tel:+4917177741300"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-teal-200 transition-colors mb-3"
                  aria-label="Mobil anrufen: 0171 7774130"
                >
                  <div className="w-10 h-10 bg-[#f0fafa] text-[#0d7377] rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Mobil</p>
                    <p className="font-semibold text-gray-900">0171 7774130</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@stiftungkoelneropferhilfe.de"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-teal-200 transition-colors mb-3 break-all"
                  aria-label="E-Mail senden"
                >
                  <div className="w-10 h-10 bg-[#f0fafa] text-[#0d7377] rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">E-Mail</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      info@stiftungkoelneropferhilfe.de
                    </p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                  <div className="w-10 h-10 bg-[#f0fafa] text-[#0d7377] rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Adresse</p>
                    <address className="not-italic font-semibold text-gray-900 text-sm">
                      Kennedy-Ufer 1<br />
                      50679 Köln
                    </address>
                  </div>
                </div>
              </div>

              {/* Fax */}
              <div className="p-4 bg-[#f8f7f5] rounded-xl text-sm">
                <span className="text-gray-500">Telefax: </span>
                <span className="font-medium text-gray-700">0221 500 686 55</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nachricht schreiben
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
