import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Seitenfuß">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-koh.gif"
                alt="Stiftung Kölner Opferhilfe"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
                unoptimized
              />
              <span className="font-semibold text-white leading-tight text-sm">
                Stiftung Kölner
                <br />
                Opferhilfe
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Gegründet 2012. Wir helfen Menschen im Raum Köln, die durch Gewalt
              oder Unfall zu Opfern geworden sind — vertraulich, unbürokratisch
              und kostenlos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/stiftung", label: "Die Stiftung" },
                { href: "/helfen", label: "Helfen & Spenden" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/satzung", label: "Satzung" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+492214666670"
                  className="flex items-center gap-2 hover:text-white transition-colors font-medium text-teal-400"
                  aria-label="Anrufen: 0221 466667"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0221 466667
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@stiftungkoelneropferhilfe.de"
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@stiftungkoelneropferhilfe.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  Kennedy-Ufer 1<br />
                  50679 Köln
                </span>
              </li>
            </ul>

            {/* Spendenkonto */}
            <div className="mt-5 p-3 bg-gray-800 rounded-lg text-xs">
              <p className="text-white font-medium mb-1">Spendenkonto</p>
              <p className="text-gray-400">Sparkasse KölnBonn</p>
              <p className="font-mono text-gray-300 mt-1">IBAN: DE12 3705 0198 1931 1469 12</p>
              <p className="font-mono text-gray-400">BIC: COLSDE33XXX</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Stiftung Kölner Opferhilfe. Alle Rechte vorbehalten.</p>
          <p className="text-sm font-medium text-[#4db8bc]">
            Designed by Sandra Rautenberg
          </p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors focus:outline-none focus-visible:underline">
              Impressum
            </Link>
            <Link href="/datenschutzhinweis" className="hover:text-gray-300 transition-colors focus:outline-none focus-visible:underline">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
