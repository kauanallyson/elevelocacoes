"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_CHANGED_EVENT,
  getConsent,
  setConsent,
} from "@/lib/consent";

export default function CookieConsent() {
  const [visivel, setVisivel] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const atualizarEspacamento = useCallback(() => {
    const banner = bannerRef.current;
    const altura = banner && !banner.classList.contains("hidden") ? banner.offsetHeight : 0;

    document.body.style.paddingBottom = altura ? `${altura}px` : "";
    document.documentElement.style.setProperty("--cookie-offset", `${altura}px`);
  }, []);

  const atualizarBanner = useCallback(() => {
    setVisivel(getConsent() === null);
  }, []);

  useEffect(() => {
    atualizarBanner();
    window.addEventListener(CONSENT_CHANGED_EVENT, atualizarBanner);
    window.addEventListener("resize", atualizarEspacamento);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, atualizarBanner);
      window.removeEventListener("resize", atualizarEspacamento);
    };
  }, [atualizarBanner, atualizarEspacamento]);

  useEffect(() => {
    atualizarEspacamento();
  }, [visivel, atualizarEspacamento]);

  return (
    <div
      ref={bannerRef}
      id="cookie-consent"
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-graphite-700 bg-graphite-900 px-4 py-4 sm:px-6 ${
        visivel ? "" : "hidden"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-graphite-100">
          Usamos cookies para entender como você usa o site e melhorar sua
          experiência. Você pode aceitar ou recusar o uso desses cookies.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            className="rounded-md border border-graphite-700 px-4 py-2 text-sm text-graphite-100 transition-colors hover:border-accent hover:text-accent"
            onClick={() => setConsent("denied")}
          >
            Recusar
          </button>
          <button
            type="button"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-graphite-900 transition-colors hover:bg-accent-dark"
            onClick={() => setConsent("granted")}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
