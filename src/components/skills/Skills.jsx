import styles from "./skills.module.css";
import skills from "./data/skills.json";
import left_img from "./imgs/Programming-bro.png";
import { useState } from "react";
export default function Skills() {
  let [mainData, setMainData] = useState(skills);
  return (
    <section className={`${styles.skills_section}`} id="Skills">
      <h2 className="main-h2">
        My <span className="main-color">Skills</span>
      </h2>
      <div className={`container ${styles.skills_container}`}>
        <div
          className={`${styles.left_container} wow fadeInLeft`}
          data-wow-delay="0.2s"
        >
          <img src={left_img} alt="img not found" />
        </div>

        <div className={`${styles.skill_container}`}>
          {mainData.map((skill) => {
            return (
              <div className={`${styles.skill_box} `}>
                <img src={skill.img_url} className={`wow fadeInUp`}></img>
                <span className={`wow fadeInUp`} data-wow-delay="0.5s">
                  {" "}
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
