import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Das Team und der Vorstand der Stiftung Kölner Opferhilfe — engagierte Kölnerinnen und Kölner für Opferschutz.",
};

const vorstand = [
  {
    name: "Jochen Dürselen",
    role: "Stiftungsvorstand",
    initials: "JD",
  },
  {
    name: "Arnold Dircks",
    role: "Stellvertretender Stiftungsvorstand",
    initials: "AD",
  },
];

const kuratorium = [
  {
    name: "Dr. h.c. Fritz Schramma",
    role: "Ehemaliger Oberbürgermeister der Stadt Köln",
    initials: "FS",
  },
  {
    name: "Heinz-Bert Schmitz",
    role: "Rechtsanwalt",
    initials: "HS",
  },
  {
    name: "Andreas Mühlenweg",
    role: "Steuerrechtsspezialist",
    initials: "AM",
  },
  {
    name: "Hans-Gerhard Wirtz",
    role: "Kuratoriumsmitglied",
    initials: "HW",
  },
];

function Avatar({ initials, color = "teal" }: { initials: string; color?: string }) {
  return (
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
        color === "teal" ? "bg-[#0d7377]" : "bg-[#0a5c5f]"
      }`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-[#f0fafa] border-b border-teal-100 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
            Menschen hinter der Stiftung
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Über uns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Engagierte Kölnerinnen und Kölner aus Wirtschaft, Recht und Gesellschaft —
            vereint durch den Einsatz für Opferschutz.
          </p>
        </div>
      </section>

      {/* Leitbild */}
      <section className="py-16 sm:py-24" aria-labelledby="leitbild-heading">
        <div className="max-w-3xl mx-auto px-4">
          <h2 id="leitbild-heading" className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Unser Leitbild
          </h2>
          <div className="bg-[#f0fafa] rounded-2xl p-8 border border-teal-100">
            <blockquote className="text-xl text-gray-700 leading-relaxed italic text-center">
              „Wer Unrecht erlitten hat, verdient Würde, Unterstützung und eine echte
              Chance auf Erholung — ohne Wenn und Aber, ohne Bürokratie."
            </blockquote>
          </div>
          <p className="text-gray-600 leading-relaxed mt-6 text-center">
            Dieses Prinzip leitet uns bei allem, was wir tun. Wir arbeiten
            ehrenamtlich und mit einem klaren Fokus: dem Wohlergehen der Betroffenen.
          </p>
        </div>
      </section>

      {/* Stiftungsvorstand */}
      <section className="py-16 sm:py-24 bg-[#f8f7f5]" aria-labelledby="vorstand-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Führung
            </p>
            <h2 id="vorstand-heading" className="text-3xl font-bold text-gray-900">
              Stiftungsvorstand
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Der Vorstand führt die laufenden Geschäfte und verwaltet das
              Stiftungsvermögen. Er wählt zu fördernde Projekte aus und entscheidet
              über die Mittelvergabe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {vorstand.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-gray-100 rounded-2xl p-7 text-center hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <Avatar initials={person.initials} color="teal" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{person.name}</h3>
                <p className="text-[#0d7377] text-sm mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kuratorium */}
      <section className="py-16 sm:py-24" aria-labelledby="kuratorium-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0d7377] font-semibold text-sm uppercase tracking-widest mb-3">
              Strategische Leitung
            </p>
            <h2 id="kuratorium-heading" className="text-3xl font-bold text-gray-900">
              Kuratorium
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Das Kuratorium ist das höchste Entscheidungsgremium für grundlegende
              Fragen des Stiftungszwecks. Es besteht aus engagierten Persönlichkeiten
              des Kölner öffentlichen Lebens.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kuratorium.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <Avatar initials={person.initials} color="dark" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">{person.name}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-snug">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Interesse an einem Engagement?</h2>
            <p className="text-gray-600">Wir freuen uns über Verstärkung — sprechen Sie uns an.</p>
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
