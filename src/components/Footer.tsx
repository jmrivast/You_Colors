import { LogoSlot } from "./Primitives";

const footerLinks = [
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Empresas", "#empresas"],
  ["Nosotros", "#taller"],
  ["Contacto", "#contacto"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer" id="contacto" data-od-id="site-footer">
      <LogoSlot compact />
      <div className="site-footer__content">
        <nav aria-label="Navegación de pie de página">
          {footerLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <span aria-label="Instagram, enlace pendiente de URL verificada">Instagram</span>
        </nav>
        <p>YOU COLOR® / SANTO DOMINGO / PRINT WITH PURPOSE</p>
      </div>
    </footer>
  );
}
