import { Arrow, PrintVisual, SectionLabel } from "./Primitives";

export function FeaturedProject() {
  return (
    <section className="featured-project section-shell" data-od-id="featured-project-section">
      <div className="featured-project__meta">
        <SectionLabel>PROYECTO EDITORIAL DESTACADO</SectionLabel>
        <p>PROJECT / 018</p>
        <h2>EDITORIAL</h2>
        <p>OFFSET / FULL COLOR</p>
        <p>SANTO DOMINGO</p>
        <a href="#proyectos" aria-label="Ver proyecto editorial destacado">
          <Arrow direction="right" />
        </a>
      </div>
      <div className="featured-project__gallery">
        <PrintVisual variant="cover" label="Cubierta genérica de publicación editorial" />
        <PrintVisual variant="spread" label="Doble página interior genérica" />
        <PrintVisual variant="closeup" label="Detalle cercano de papel impreso" />
        <PrintVisual variant="binding" label="Detalle genérico de encuadernación" />
      </div>
    </section>
  );
}
