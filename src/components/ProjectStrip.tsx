import { Arrow, PrintVisual } from "./Primitives";

export function ProjectStrip() {
  return (
    <section className="project-strip" aria-label="Vista previa de proyecto editorial" data-od-id="opening-project-strip">
      <div className="project-strip__meta">
        <p>YC / PROJECT 024</p>
        <span className="technical-rule" />
        <h2>EDITORIAL</h2>
        <p>OFFSET / FULL COLOR</p>
        <a href="#proyectos" aria-label="Ver proyecto editorial">
          <Arrow direction="right" />
        </a>
      </div>
      <PrintVisual variant="cover" label="Cubierta editorial naranja" />
      <PrintVisual variant="spread" label="Interior de catálogo abierto" />
      <PrintVisual variant="edge" label="Cantos de publicaciones apiladas" />
      <PrintVisual variant="ink" label="Detalle de tinta negra sobre papel" />
    </section>
  );
}
