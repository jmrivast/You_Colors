import { Arrow } from "./Primitives";

export function FinalCta() {
  return (
    <section className="final-cta" id="cotizar" data-od-id="final-cta-section">
      <h2 data-od-id="final-cta-heading">¿Qué vamos a imprimir?</h2>
      <div className="final-cta__content">
        <p>Cuéntanos qué necesitas y prepara tu próximo proyecto con You Color.</p>
        <a href="#contacto" data-od-id="final-quote-cta">
          Solicitar cotización <Arrow />
        </a>
      </div>
      <span className="final-cta__wedge" aria-hidden="true" />
    </section>
  );
}
