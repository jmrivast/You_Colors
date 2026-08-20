import { Arrow, PrintVisual, SectionLabel } from "./Primitives";

const items = [
  ["blue", "Impresión por volumen"],
  ["orange", "Material corporativo"],
  ["red", "Publicaciones institucionales"],
  ["green", "Señalización"],
  ["blue", "Eventos"],
  ["orange", "Producción recurrente"],
] as const;

export function Companies() {
  return (
    <section className="companies section-shell" id="empresas" data-od-id="companies-section">
      <div className="companies__content">
        <SectionLabel>EMPRESAS &amp; INSTITUCIONES</SectionLabel>
        <h2 data-od-id="companies-heading">Producción gráfica para empresas e instituciones.</h2>
        <ul>
          {items.map(([color, label]) => (
            <li className={`company-item company-item--${color}`} key={label}>{label}</li>
          ))}
        </ul>
        <a className="corporate-link" href="#cotizar" data-od-id="corporate-quote-cta">
          <Arrow direction="right" />
          <span>Solicitar cotización corporativa</span>
          <Arrow />
        </a>
      </div>
      <PrintVisual
        variant="paper"
        className="companies__visual"
        label="Composición temporal de carpetas, reportes y papelería corporativa"
      />
    </section>
  );
}
