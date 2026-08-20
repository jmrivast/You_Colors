import { useEffect, useState } from "react";
import { Arrow, LogoSlot } from "./Primitives";

const navItems = [
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Empresas", "#empresas"],
  ["Nosotros", "#taller"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header" data-od-id="site-header">
      <a className="brand-link" href="#inicio" aria-label="Ir al inicio de You Color">
        <LogoSlot />
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <a className="button button--primary header-cta" href="#cotizar" data-od-id="header-quote-cta">
        <span>Cotizar</span><Arrow />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMenuOpen((value) => !value)}
        data-od-id="mobile-menu-toggle"
      >
        <span /><span /><span />
      </button>
      <nav
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-label="Navegación móvil"
      >
        {navItems.map(([label, href], index) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{label}<Arrow direction="right" />
          </a>
        ))}
        <a className="mobile-menu__quote" href="#cotizar" onClick={() => setMenuOpen(false)}>
          Cotizar proyecto <Arrow />
        </a>
      </nav>
    </header>
  );
}
