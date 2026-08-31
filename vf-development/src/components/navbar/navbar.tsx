"use client";

import { useEffect, useState } from "react";
import VfIcon from "../icon/vficon";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre", label: "Sobre mí" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <header>
      <div className="wrap">
        <nav>
          <div className="logo">
            <VfIcon />
            <span className="sub">Development</span>
          </div>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <a href="#contacto" className="nav-cta">
              Hablemos →
            </a>
            <button
              className="theme-toggle"
              aria-label="Cambiar tema"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
            <button
              className="burger"
              aria-label="Abrir menú"
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Hablemos →
          </a>
        </div>
      </div>
    </header>
  );
}