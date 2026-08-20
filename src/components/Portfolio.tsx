import { useMemo, useState } from "react";
import { Arrow, PrintVisual, SectionLabel } from "./Primitives";

const filters = ["Todos", "Editorial", "Corporativo", "Gran formato", "Señalización", "Personalizados"] as const;
type Filter = (typeof filters)[number];

const works = [
  { id: "021", category: "Editorial", type: "OFFSET / FULL COLOR", visual: "spread", size: "large" },
  { id: "024", category: "Corporativo", type: "IMPRESIÓN DIGITAL", visual: "paper", size: "tall" },
  { id: "031", category: "Gran formato", type: "IMPRESIÓN GRAN FORMATO", visual: "signage", size: "wide" },
  { id: "036", category: "Señalización", type: "PRODUCCIÓN / MONTAJE", visual: "ink", size: "small" },
  { id: "042", category: "Personalizados", type: "CORTE / ACABADO", visual: "finishing", size: "small" },
  { id: "018", category: "Editorial", type: "ENCUADERNADO", visual: "binding", size: "wide" },
] as const;

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");
  const filteredWorks = useMemo(
    () => works.filter((work) => activeFilter === "Todos" || work.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="portfolio section-shell" id="proyectos" data-od-id="portfolio-section">
      <div className="portfolio__sidebar">
        <SectionLabel>PROYECTOS</SectionLabel>
        <div className="filter-list" role="group" aria-label="Filtrar proyectos">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeFilter === filter ? "is-active" : ""}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              data-od-id={`portfolio-filter-${filter.toLowerCase().replace(/\s/g, "-")}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <Arrow direction="right" />
      </div>
      <div className="portfolio-gallery" aria-live="polite">
        {filteredWorks.map((work) => (
          <article
            className={`portfolio-work portfolio-work--${work.size}`}
            key={work.id}
            data-od-id={`portfolio-work-${work.id}`}
          >
            <PrintVisual
              variant={work.visual}
              label={`Trabajo genérico de muestra, categoría ${work.category}`}
            />
            <div className="portfolio-work__meta">
              <p>PROJECT / {work.id}</p>
              <h3>{work.category}</h3>
              <p>{work.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
