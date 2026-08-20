import { PrintVisual, SectionLabel } from "./Primitives";

export function LargeFormat() {
  return (
    <section className="large-format" data-od-id="large-format-section">
      <div className="large-format__copy">
        <SectionLabel>GRAN FORMATO</SectionLabel>
        <h2 data-od-id="large-format-heading">Cuando necesitas que te vean.</h2>
        <span className="light-rule" />
        <p>Letreros, señalización y formatos que llevan tu marca más allá del papel.</p>
      </div>
      <div className="large-format__visual">
        <PrintVisual variant="signage" label="Producción espacial de gran formato" />
        <span className="large-format__rail" aria-hidden="true" />
        <span className="large-format__sheet" aria-hidden="true" />
      </div>
    </section>
  );
}
