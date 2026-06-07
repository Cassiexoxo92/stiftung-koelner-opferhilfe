"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrollt bei jeder Client-seitigen Navigation zuverlässig nach ganz oben.
 * Nötig damit der sticky Header keine Headlines verdeckt.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Nur scrollen wenn kein Hash-Anker in der URL (der regelt sich selbst)
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
