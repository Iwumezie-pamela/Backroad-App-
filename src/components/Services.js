import React from "react";

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="service-title">
        our <span className="service-span">services</span>
      </h2>

      <div className="service-body">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span class="service-icon">
                <i class={icon}></i>
              </span>
              <div>
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
