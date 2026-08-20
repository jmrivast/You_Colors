import { PrintVisual, SectionLabel } from "./Primitives";

const detailVisuals = [
  ["paper", "PAPEL", "Detalle macro de papel texturizado"],
  ["binding", "ENCUADERNADO", "Encuadernación abierta"],
  ["gloss", "ACABADO", "Contraste de acabado mate y brillante"],
  ["edge", "CORTE", "Canto de hojas cortadas"],
] as const;

export function Details() {
  return (
    <section className="details section-shell" data-od-id="details-section">
      <div className="details__intro">
        <SectionLabel>DETALLES</SectionLabel>
        <h2 data-od-id="details-heading">Los detalles importan.</h2>
        <p>Buen diseño se nota. Buen acabado se siente.</p>
      </div>
      <div className="details__grid">
        {detailVisuals.map(([variant, label, alt], index) => (
          <figure className={`detail-frame detail-frame--${index + 1}`} key={label}>
            <PrintVisual variant={variant} label={alt} />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
