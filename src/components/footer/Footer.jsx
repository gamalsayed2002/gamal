import styles from "./footer.module.css";

export default function Footer() {
  return (
    <section className={`${styles.footer}`}>
      <div className={`container ${styles.footer_contianer}`}>
        <div className={`${styles.text}`}>
          Gamal <span className="main-color">Sayed</span>
        </div>
        <div className={`${styles.socail}`}>
          <a href="https://web.facebook.com/gamal.fathisayed/" target="_blank">
            <i className="fa-brands fa-facebook" style={{ color: "#046fe5" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/gamal-sayed-458397244/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" style={{ color: "#015dbe" }} />
          </a>
          <a href="https://wa.me/+20128575219" target="_blank">
            <i
              className="fa-brands fa-square-whatsapp"
              style={{ color: "#05bc3c" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
