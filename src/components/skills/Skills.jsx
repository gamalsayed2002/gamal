import styles from "./skills.module.css";
import skills from "./data/skills.json";
import { useState } from "react";
export default function Skills() {
  let [mainData] = useState(skills);
  return (
    <section className={`${styles.skills_section}`} id="Skills">
      <h2 className="main-h2">
        My <span className="main-color">Skills</span>
      </h2>
      <div className={`container ${styles.skills_container}`}>
  

        <div className={`${styles.skill_container}`}>
          {mainData.map((skill) => {
            return (
              <div className={`${styles.skill_box} `}>
                <img src={skill.img_url} alt="img not found" className={`wow fadeInUp`}></img>
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
