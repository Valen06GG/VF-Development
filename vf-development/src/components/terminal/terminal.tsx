"use client";

import { useEffect, useRef, useState } from "react";

type Line = { t: "prompt" | "ok" | "line" | "stat"; text: string };

const LINES: Line[] = [
  { t: "prompt", text: "$ vf init proyecto-cliente" },
  { t: "ok", text: "✓ analizando objetivos" },
  { t: "ok", text: "✓ diseñando interfaz" },
  { t: "ok", text: "✓ optimizando rendimiento" },
  { t: "line", text: "" },
  { t: "prompt", text: "$ vf deploy --prod" },
  { t: "ok", text: "✓ build completado en 1.8s" },
  { t: "ok", text: "✓ sitio en línea" },
  { t: "line", text: "" },
  { t: "stat", text: "Lighthouse Performance ▸ 98/100" },
];

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderedLines, setRenderedLines] = useState<{ t: string; text: string }[]>([]);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          runTyping();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    function runTyping() {
      let i = 0;
      const next = () => {
        if (i >= LINES.length) return;
        const line = LINES[i];
        if (reduced) {
          setRenderedLines((prev) => [...prev, { t: line.t, text: line.text }]);
          i++;
          next();
          return;
        }
        let c = 0;
        const speed = line.t === "prompt" ? 35 : 12;
        const interval = setInterval(() => {
          c++;
          setRenderedLines((prev) => {
            const copy = [...prev];
            copy[i] = { t: line.t, text: line.text.slice(0, c) };
            return copy;
          });
          if (c >= line.text.length) {
            clearInterval(interval);
            setTimeout(() => {
              i++;
              next();
            }, 220);
          }
        }, speed);
        setRenderedLines((prev) => [...prev, { t: line.t, text: "" }]);
      };
      next();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="terminal reveal in" ref={containerRef}>
      <div className="terminal-bar">
        <span></span>
        <span></span>
        <span></span>
        <span className="label">vf-development — zsh</span>
      </div>
      <div className="terminal-body">
        {renderedLines.map((l, idx) => (
          <div key={idx} className={`line ${l.t}`}>
            {l.text}
          </div>
        ))}
      </div>
    </div>
  );
}