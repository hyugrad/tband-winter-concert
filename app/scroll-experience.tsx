"use client";

import { useEffect, useRef } from "react";

const sectionIds = ["top", "about", "bands", "setlist", "ticket", "venue", "guide"];

export function ScrollExperience() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const progress = progressRef.current;
    const hero = document.querySelector<HTMLElement>(".hero");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".site-nav a[href^='#']"),
    );
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress?.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, ratio))),
      );

      if (hero && !reducedMotion.matches) {
        const heroProgress = Math.min(
          1,
          Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)),
        );
        hero.style.setProperty("--hero-field-x", `${pointerX}px`);
        hero.style.setProperty(
          "--hero-field-y",
          `${pointerY - heroProgress * 34}px`,
        );
      }
    };

    const queueProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    const updatePointerPosition = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;
      pointerX = (event.clientX / window.innerWidth - 0.5) * 36;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 22;
      queueProgressUpdate();
    };

    const resetPointerPosition = () => {
      pointerX = 0;
      pointerY = 0;
      queueProgressUpdate();
    };

    const setActiveSection = (id: string) => {
      document.body.dataset.activeSection = id;
      navLinks.forEach((link) => {
        if (link.hash === `#${id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];

        if (current?.target.id) {
          setActiveSection(current.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    window.addEventListener("scroll", queueProgressUpdate, { passive: true });
    window.addEventListener("resize", queueProgressUpdate);
    window.addEventListener("pointermove", updatePointerPosition, {
      passive: true,
    });
    window.addEventListener("blur", resetPointerPosition);
    updateProgress();

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", queueProgressUpdate);
      window.removeEventListener("resize", queueProgressUpdate);
      window.removeEventListener("pointermove", updatePointerPosition);
      window.removeEventListener("blur", resetPointerPosition);
      hero?.style.removeProperty("--hero-field-x");
      hero?.style.removeProperty("--hero-field-y");
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" ref={progressRef} aria-hidden="true">
      <i />
    </div>
  );
}
