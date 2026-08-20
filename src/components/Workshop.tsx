import { PrintVisual } from "./Primitives";

const workshopStages = ["PREPRESS", "PRINT", "FINISH", "DELIVERY", "SANTO DOMINGO"];

export function Workshop() {
  return (
    <section className="workshop" id="taller" data-od-id="workshop-section">
      <div className="workshop__heading">
        <p>TALLER / PRODUCCIÓN</p>
        <h2 data-od-id="workshop-heading">Donde las ideas toman forma.</h2>
        <p>Una representación temporal del entorno físico de producción.</p>
      </div>
      <PrintVisual
        variant="press"
        className="workshop__visual"
        label="Maquinaria y flujo físico de producción gráfica"
      />
      <div className="workshop__stages" aria-label="Áreas del proceso de taller">
        {workshopStages.map((stage) => <span key={stage}>{stage}</span>)}
      </div>
    </section>
  );
}
