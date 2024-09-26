// src/components/LenisScroll.js (Client Component)
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Import Lenis for smooth scrolling

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // This component handles scroll but doesn't render any UI
}
