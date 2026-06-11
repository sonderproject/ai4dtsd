"use client";

import { useEffect, useState } from "react";

/**
 * Sticky bottom CTA shown on mobile. Appears after the user scrolls past the
 * hero and hides once the signup form is in view (no point repeating the CTA).
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById("signup");

    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > 480;

      let formInView = false;
      if (form) {
        const rect = form.getBoundingClientRect();
        formInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setShow(scrolledPastHero && !formInView);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#signup"
        className="block rounded-lg bg-teal-accent px-6 py-3 text-center text-base font-semibold text-navy-deep"
      >
        Reserve Your Spot
      </a>
    </div>
  );
}
