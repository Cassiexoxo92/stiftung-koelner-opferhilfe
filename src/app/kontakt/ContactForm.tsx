"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setState("success");
        setFormData(INITIAL_FORM);
      } else {
        const data = (await res.json()) as { error?: string };
        setErrorMsg(data.error ?? "Unbekannter Fehler");
        setState("error");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es erneut.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center" role="status" aria-live="polite">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Nachricht gesendet</h3>
        <p className="text-gray-600 mb-6">
          Vielen Dank. Wir melden uns so schnell wie möglich bei Ihnen.
          <br />
          In dringenden Fällen erreichen Sie uns unter{" "}
          <a href="tel:+492214666670" className="text-[#0d7377] font-semibold hover:underline">
            0221 466667
          </a>
          .
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-[#0d7377] font-medium hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Kontaktformular">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr vollständiger Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            E-Mail <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ihre@email.de"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefon <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0221 …"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
            Betreff <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:border-transparent transition-colors bg-white"
          >
            <option value="">Bitte wählen …</option>
            <option value="Ich benötige Hilfe">Ich benötige Hilfe</option>
            <option value="Ich möchte spenden">Ich möchte spenden</option>
            <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
            <option value="Presse & Medien">Presse & Medien</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Ihre Nachricht <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Wie können wir Ihnen helfen? Schreiben Sie so viel oder wenig, wie Sie möchten."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7377] focus:border-transparent transition-colors resize-none"
        />
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und
        nicht an Dritte weitergegeben. Weitere Informationen in unserem{" "}
        <a href="/datenschutzhinweis" className="text-[#0d7377] hover:underline">
          Datenschutzhinweis
        </a>
        .
      </p>

      {state === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm" role="alert" aria-live="assertive">
          <strong>Fehler:</strong> {errorMsg} — Bitte versuchen Sie es erneut oder rufen Sie uns an:{" "}
          <a href="tel:+492214666670" className="font-semibold hover:underline">
            0221 466667
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0d7377] text-white font-semibold rounded-lg hover:bg-[#0a5c5f] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377] focus-visible:ring-offset-2"
      >
        {state === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Wird gesendet …
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>
    </form>
  );
}
