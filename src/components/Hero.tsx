import type { CSSProperties, PointerEvent } from "react";
import { Arrow, RegistrationMark } from "./Primitives";

export function Hero() {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
  };

  return (
    <section className="hero" id="inicio" data-od-id="hero-section">
      <div className="hero__copy">
        <p className="technical-kicker">YOU COLOR® / SANTO DOMINGO</p>
        <h1 className="hero__title" data-od-id="hero-heading">
          Tus ideas, impresas como las imaginaste.
        </h1>
        <p className="hero__support">
          Impresión digital, offset y soluciones gráficas para marcas, empresas e instituciones.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#cotizar" data-od-id="hero-quote-cta">
            Cotizar proyecto <Arrow />
          </a>
          <a className="button button--outline" href="#proyectos" data-od-id="hero-projects-cta">
            Ver proyectos
          </a>
        </div>
      </div>

      <div
        className="hero-composition"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        role="img"
        aria-label="Composición temporal de catálogo, papelería, tarjeta, folleto y póster impresos"
        data-od-id="hero-print-composition"
      >
        <div className="print-object print-object--booklet">
          <span className="object-label">YC / PRINT 001</span>
          <span className="booklet-architecture" aria-hidden="true" />
          <RegistrationMark />
        </div>
        <div className="print-object print-object--blue-card">
          <span className="blind-mark">YC</span>
        </div>
        <div className="print-object print-object--business-card">
          <span>YC / PRINT 001</span>
          <small>SANTO DOMINGO</small>
          <RegistrationMark />
        </div>
        <div className="print-object print-object--letterhead">
          <span>YC / PRINT 001</span>
          <span className="measure">210 × 297 mm</span>
          <RegistrationMark />
        </div>
        <div className="print-object print-object--poster">
          <span className="poster-code">YC / PRINT 001</span>
          <span className="poster-shape poster-shape--red" />
          <span className="poster-shape poster-shape--black" />
          <span className="measure">520 × 720 mm</span>
        </div>
        <div className="print-object print-object--catalog">
          <span className="object-label">YC / PRINT 001</span>
          <span className="catalog-arc" />
        </div>
        <span className="crop-mark crop-mark--top" aria-hidden="true" />
        <span className="crop-mark crop-mark--bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
