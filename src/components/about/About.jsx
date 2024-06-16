import styles from "./about.module.css";
import img from "./imgs/Code typing-bro.png";
export default function About() {
  return (
    <>
      <section className={`${styles.about}`} id="About">
        <div className={`container ${styles.about_container}`}>
          <div className={`${styles.image} wow fadeInLeft `}>
            <img src={img} alt="img not found" />
          </div>
          <div className={`${styles.text}`}>
            <h1 className={`wow fadeInRight`}>
              About <span className="main-color">Me</span>
            </h1>
            <h5 data-wow-delay="0.2s" className={`wow fadeInRight`}>
              <span className="main-color">FrontEnd</span> Developer
            </h5>
            <p data-wow-delay="0.3s" className={`wow fadeInRight`}>
              I am a front-end developer and
              <span className="main-color">Ui&amp;Ux</span> designer i can
              provide clean code and pixel perfext design. i also make website
              more &amp; more interactive
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
