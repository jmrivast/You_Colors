import { PrintVisual, SectionLabel } from "./Primitives";

const stages = [
  ["01", "Envíanos tu idea", "paper"],
  ["02", "Preparamos el arte", "spread"],
  ["03", "Imprimimos", "press"],
  ["04", "Terminamos", "finishing"],
  ["05", "Entregamos", "edge"],
] as const;

export function Process() {
  return (
    <section className="process section-shell" data-od-id="process-section">
      <div className="process__intro">
        <div>
          <SectionLabel>PROCESO</SectionLabel>
          <h2 data-od-id="process-heading">De tu pantalla a tus manos.</h2>
        </div>
        <p>Un proceso claro, preciso y acompañado de principio a fin.</p>
      </div>
      <div className="process-track" aria-label="Proceso de producción en cinco etapas">
        <span className="travel-sheet" aria-hidden="true"><i /></span>
        {stages.map(([number, label, variant]) => (
          <article className="process-stage" key={number} data-od-id={`process-stage-${number}`}>
            <h3><span>{number}</span>{label}</h3>
            <PrintVisual variant={variant} label={`Etapa ${number}: ${label}`} />
          </article>
        ))}
      </div>
    </section>
  );
}
