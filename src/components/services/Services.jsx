import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={`${styles.Services}`} id="Services">
      <h2 className="main-h2 wow fadeIn" data-wow-duration="1s">
        My <span className="main-color">Services</span>
      </h2>
      <div className={`container ${styles.services_container}`}>
        <div className={`wow fadeIn ${styles.card}`} data-wow-delay="0s">
          <i className="fa-solid fa-code main-color" />
          <h3>Web Development</h3>
          <p>
            Building stable and interactive websites with modern designs and
            very high performance through the latest programming tools
          </p>
        </div>
        <div className={`wow fadeIn ${styles.card}`} data-wow-delay=".2s">
          <i className="fa-solid fa-user main-color" />
          <h3>
            Ui<span className="main-color">&amp;</span>Ux Design
          </h3>
          <p>
            Building the latest website and application designs through one of
            the most famous and best design programs
            <span className="main-color" style={{ fontWeight: 900 }}>
              Figma
            </span>
          </p>
        </div>
        <div className={`wow fadeIn ${styles.card}`} data-wow-delay=".4s">
          <i className="fa-solid fa-keyboard main-color" />
          <h3>
            PDF <i className="fa-solid fa-arrows-left-right main-color" /> WORD
          </h3>
          <p>
            Convert files from word to pdf and vice versa professionally and
            with very high accuracy
          </p>
        </div>
        <div className={`wow fadeIn ${styles.card}`} data-wow-delay=".6s">
          <i className="fa-solid fa-image main-color" />
          <h3>Photo Editing</h3>
          <p>
            Professionally remove elements from the image and modify the images
          </p>
        </div>
        <div className={`wow fadeIn ${styles.card}`} data-wow-delay=".8s">
          <i className="fa-solid fa-eye main-color" />
          <h3>Visual identity design</h3>
          <p>Very professional visual identity design</p>
        </div>
      </div>
    </section>
  );
}
