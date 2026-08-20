import { Arrow, RegistrationMark, SectionLabel } from "./Primitives";

const services = [
  { number: "01", title: "Impresión Digital", copy: "Tiradas cortas, datos variables y entregas rápidas con calidad consistente.", color: "blue" },
  { number: "02", title: "Impresión Offset", copy: "Calidad superior para tiradas medias y altas con definición y color.", color: "orange" },
  { number: "03", title: "Editorial", copy: "Libros, revistas, catálogos y memorias con acabados profesionales.", color: "orange" },
  { number: "04", title: "Corporativo", copy: "Papelería, carpetas, reportes y materiales institucionales.", color: "blue" },
  { number: "05", title: "Gran Formato y Señalización", copy: "Formatos para eventos, imagen comercial y señalética.", color: "red" },
  { number: "06", title: "Personalizados y Acabados", copy: "Troquelado, barniz, plastificado, stamping y más para elevar cada detalle.", color: "green" },
] as const;

export function Services() {
  return (
    <section className="services section-shell" id="servicios" data-od-id="services-section">
      <div className="services__intro">
        <div>
          <SectionLabel>SERVICIOS</SectionLabel>
          <h2 data-od-id="services-heading">Todo lo que necesitas para llevar tu idea al papel.</h2>
        </div>
        <p>Soluciones de impresión y producción gráfica para marcas, empresas e instituciones.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article
            className={`service-card service-card--${service.color}`}
            key={service.number}
            data-od-id={`service-${service.number}`}
          >
            <div className="service-card__technical">
              <span>YC / SVC {service.number}</span>
              <RegistrationMark />
            </div>
            <h3><span>{service.number}</span>{service.title}</h3>
            <p>{service.copy}</p>
            <Arrow direction="right" />
          </article>
        ))}
      </div>
    </section>
  );
}
