import React, { useState } from "react";
import styles from "./services.module.css";

const Services = () => {
  const [cards, setCards] = useState([
    {
      delay: ".2s",
      icon: "fa-solid fa-user main-color",
      title: "Ui&Ux Design",
      description:
        "Building the latest website and application designs through one of the most famous and best design programs",
      highlight: "Figma",
    },
    {
      delay: ".4s",
      icon: "fa-solid fa-keyboard main-color",
      title: "PDF TO WORD",
      description:
        "Convert files from word to pdf and vice versa professionally and with very high accuracy",
    },
    {
      delay: ".6s",
      icon: "fa-solid fa-wand-magic-sparkles main-color",
      title: "Web Design Services",
      description:
        "I offer professional web design services using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to create responsive, visually appealing, and user-friendly websites tailored to your needs.",
    },
    {
      delay: ".8s",
      icon: "fa-solid fa-file-code main-color",
      title: "Web Development Services",
      description:
        "I provide expert web development services using React.js and Next.js, delivering fast, dynamic, and scalable web applications tailored to enhance user experience and functionality.",
    },
    {
      delay: "1s",
      icon: "fa-solid fa-code main-color",
      title: "Backend Development Services",
      description:
        "I offer backend development services using Node.js with Express.js and MongoDB, creating robust, scalable, and efficient server-side applications tailored to your specific business needs.",
    },
  ]);

  return (
    <section className={`${styles.Services}`}>
      <div
        className={`${styles.blur} blur wow fadeInLeft`}
        data-wow-duration=".4s"
        data-wow-delay="0.5s"
      ></div>
      <h2 className="main-h2">
        My <span className="main-color">Services</span>
      </h2>
      <div className={styles.services_container}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`wow fadeIn ${styles.card}`}
            data-wow-delay={`${parseFloat(card.delay) + index * 0.1}s`}
          >
            <div
              className={`${styles.blur} wow fadeInLeft`}
              data-wow-delay={`${parseFloat(card.delay) + index * 0.1}s`}
            ></div>
            <i
              className={`${card.icon} wow fadeInUp`}
              data-wow-delay={`${parseFloat(card.delay) + index * 0.1}s`}
            />
            <h3 dangerouslySetInnerHTML={{ __html: card.title }}></h3>
            <p>
              {card.description}
              {card.highlight && (
                <span className="main-color" style={{ fontWeight: 900 }}>
                  {card.highlight}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
