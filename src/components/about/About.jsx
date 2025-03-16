import styles from "./about.module.css";
import img from "./imgs/Code typing-bro.png";
export default function About() {
  return (
    <>
      <section className={`${styles.about}`} id="About">
        <div
          className={`${styles.blur} blur wow fadeInLeft`}
          data-wow-duration=".4s"
          data-wow-delay="0.5s"
        ></div>
        <div className={`container ${styles.about_container}`}>
          <div className={`${styles.image} wow fadeInLeft `}>
            <img src={img} alt="img not found" />
          </div>
          <div className={`${styles.text}`}>
            <h1 className={`wow fadeInRight`}>
              About <span className="main-color">Me</span>
            </h1>
            <h5 data-wow-delay="0.2s" className={`wow fadeInRight`}>
              <span className="main-color">MernStack</span> Developer
            </h5>
            <p>
              I’m a <span className="main-color">MERN</span> stack developer
              focused on building dynamic web applications. I love solving
              challenges and collaborating on projects. In my spare time, I
              explore new technologies and contribute to open-source. Let’s
              connect!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
