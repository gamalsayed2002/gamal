import styles from "./header.module.css";
import git from "./header imgs/github-desktop.512x512.png";
import facebook from "./header imgs/facebook.512x511.png";
import whatsapp from "./header imgs/whatsapp.512x512.png";
import insta from "./header imgs/instagram.512x511.png";
import linkedin from "./header imgs/linkedin.512x512.png";
import landing from "./header imgs/landing page.png";
export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <div className={`container ${styles.nav_container}`}>
          <h2 className="main-color">portfolio</h2>
          {/* burger icon */}
          <div className={`${styles.menu}`}>
            <div></div>
            <div className={`${styles.special}`}></div>
            <div></div>
          </div>
          {/* burger
           icon */}
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`${styles.landing}`}>
        <div className={`container ${styles.landing_container}`}>
          <div className={`${styles.content}`}>
            <h4 className="wow fadeInUp" data-wow-delay="0s">
              Hello, My name is
            </h4>
            <h1 className="wow fadeInUp" data-wow-delay="0.2s">
              Gamal <span className="main-color">Sayed</span>
            </h1>
            <h3 className="wow fadeInUp" data-wow-delay="0.4s">
              I’m a <span className="main-color">Frontend</span> Developer &
              <br />
              <span className="main-color">Ui & Ux </span>Designer
            </h3>
            <a
              data-wow-delay="0.6s"
              href="https://drive.google.com/file/d/1254kWA4aa6Bjpv41NGjfOmEf-Gl5qk5Y/view?usp=drive_link"
              className={` wow fadeInUp ${styles.cv}`}
              target="_blank"
            >
              Download CV
            </a>

            <div className={`${styles.social}`}>
              <a
                className={`wow fadeInUp`}
                data-wow-delay="0.8s"
                href="https://web.facebook.com/gamal.fathisayed/"
                target="_blank"
              >
                <img src={facebook} alt="icon not found" />
              </a>
              <a
                className={`wow fadeInUp`}
                data-wow-delay="1s"
                href="https://www.linkedin.com/in/gamal-sayed-458397244/"
                target="_blank"
              >
                <img src={linkedin} alt="icon not found" />
              </a>
              <a
                className={`wow fadeInUp`}
                data-wow-delay="1.2s"
                href="https://wa.me/+201129340477"
                target="_blank"
              >
                <img src={whatsapp} alt="icon not found" />
              </a>

              <a
                className={`wow fadeInUp`}
                data-wow-delay="1.4s"
                href="https://wa.me/+201129340477"
                target="_blank"
              >
                <img src={insta} alt="icon not found" />
              </a>
            </div>
          </div>
          <div
            className={`wow fadeInRight ${styles.img_container}`}
            data-wow-delay="1s"
          >
            <img src={landing} alt="img not found" />
          </div>
        </div>
      </div>
    </header>
  );
}
