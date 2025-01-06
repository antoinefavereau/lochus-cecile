"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [angle, setAngle] = useState(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const rotationDeg = 18.62;

  const ellipses = [
    {
      radiusRatio: 0.2,
      words: ["Audiovisuel", "UI/UX Design"],
    },
    {
      radiusRatio: 0.3,
      words: ["Design graphique", "Communication"],
    },
  ];

  const startAnglesRef = useRef<number[]>([]);

  if (startAnglesRef.current.length === 0) {
    const totalWords = ellipses.reduce((sum, e) => sum + e.words.length, 0);

    let lastAngle = 0;

    for (let i = 0; i < totalWords; i++) {
      const angle =
        (Math.random() * 0.6 + 0.2) * 2 * Math.PI + (lastAngle % (2 * Math.PI));
      startAnglesRef.current.push(angle);
      lastAngle = angle;
    }
  }

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setWidth(rect.width);
        setHeight(rect.height);
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const lastTimeRef = { current: performance.now() };

    function animate(currentTime: number) {
      const delta = (currentTime - lastTimeRef.current) / 1000;

      setAngle((prev) => prev + 0.3 * delta);

      lastTimeRef.current = currentTime;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center gap-16 h-screen">
      <div
        ref={containerRef}
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
      >
        <Image
          className="relative w-full h-auto start-0 top-0"
          src="/ellipses.svg"
          alt="ellipses"
          width={1920}
          height={1080}
        />
        {(() => {
          let globalIndex = 0;
          const elements = [];

          for (
            let ellipseIndex = 0;
            ellipseIndex < ellipses.length;
            ellipseIndex++
          ) {
            const ellipse = ellipses[ellipseIndex];

            const centerX = width / 2;
            const centerY = height / 2;

            const radiusX = width * ellipse.radiusRatio;
            const radiusY = height * 0.7 * ellipse.radiusRatio;

            const phi = (rotationDeg * Math.PI) / 180;

            for (let w = 0; w < ellipse.words.length; w++) {
              const word = ellipse.words[w];

              const startAngle = startAnglesRef.current[globalIndex];

              const offsetAngle = startAngle + angle;

              const cosT = Math.cos(offsetAngle);
              const sinT = Math.sin(offsetAngle);

              const cosPhi = Math.cos(phi);
              const sinPhi = Math.sin(phi);

              const x =
                centerX + radiusX * cosT * cosPhi - radiusY * sinT * sinPhi;
              const y =
                centerY + radiusX * cosT * sinPhi + radiusY * sinT * cosPhi;

              elements.push(
                <div
                  key={`${ellipseIndex}-${w}`}
                  className="absolute text-xs xs:text-sm md:text-base text-light"
                  style={{
                    left: x,
                    top: y,
                    transform: "translate(-50%, -30%)",
                  }}
                >
                  {word}
                </div>
              );

              globalIndex++;
            }
          }

          return elements;
        })()}
      </div>
      <h1 className="relative flex flex-col items-center gap-5 pt-16 text-4xl xs:text-5xl md:text-7xl font-extrabold text-center">
        <span className="text-3xl xs:text-4xl md:text-6xl font-medium text-primary">
          Portfolio
        </span>
        <span>LOCHUS Cécile</span>
      </h1>
      <button
        type="button"
        className="relative bg-transparent border-none outline outline-2 w-6 h-10 rounded-xl"
        title="Voir plus"
        onClick={() => {
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <div className="absolute top-2 start-0 h-6 w-full flex flex-col items-center justify-end gap-0.5 overflow-hidden animate-[scrollDashes_2s_linear_infinite]">
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
        </div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-2 start-2 animate-[scrollDot_2s_linear_infinite]"></div>
      </button>
    </section>
  );
}
