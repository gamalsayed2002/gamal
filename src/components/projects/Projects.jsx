import styles from "./projects.module.css";
import { useState } from "react";
import maindata from "./items.json";
export default function Projects() {
  let [currentActive, setCurrentActive] = useState("all");
  let [mainData, setMainData] = useState(maindata);
  return (
    <section id="portfolio" className={`${styles.portfolio}`}>
      <div className={`container ${styles.projects_container}`}>
        <div className={`${styles.buttons}`}>
          <button
            className={currentActive === "all" ? "active" : null}
            onClick={() => {
              setCurrentActive("all");
              setMainData(maindata);
            }}
          >
            all projects
          </button>

          <button
            className={currentActive === "css" ? "active" : null}
            onClick={() => {
              setCurrentActive("css");
              let data = maindata.filter((i) => {
                return i.category === "css";
              });
              setMainData(data);
            }}
          >
            HTML & CSS
          </button>
          <button
            className={currentActive === "js" ? "active" : null}
            onClick={() => {
              setCurrentActive("js");
              let data = maindata.filter((i) => {
                return i.category === "js";
              });
              setMainData(data);
            }}
          >
            JavaScript
          </button>
          <button
            className={currentActive === "react" ? "active" : null}
            onClick={() => {
              setCurrentActive("react");
              let data = maindata.filter((i) => {
                return i.category === "react";
              });
              setMainData(data);
            }}
          >
            React Js
          </button>
        </div>

        <div className={`${styles.projects}`}>
          {mainData.map((item) => {
            return (
              <a className={`${styles.item}`} target="_blank" href={item.link}>
                <img src={item.imgUrl} alt="img not found" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
