"use client";

import { useEffect, useRef } from "react";

export default function MouseRadar() {
  const radarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const render = () => {
      if (radarRef.current) {
        radarRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      }
      animationFrame = 0;
    };

    const updatePosition = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }

      radarRef.current?.classList.add("is-visible");
    };

    const hideRadar = () => {
      radarRef.current?.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideRadar);

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      document.documentElement.removeEventListener("pointerleave", hideRadar);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={radarRef} className="mouse-radar" aria-hidden="true">
      <span className="mouse-radar__ring mouse-radar__ring--one" />
      <span className="mouse-radar__ring mouse-radar__ring--two" />
      <span className="mouse-radar__ring mouse-radar__ring--three" />
    </div>
  );
}
