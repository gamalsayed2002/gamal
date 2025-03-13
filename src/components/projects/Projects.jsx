// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import styles from "./projects.module.css";
import { useState } from "react";
import maindata from "./items.json";
import bg from "./imgs/bg.png";
export default function Projects() {
  let [currentActive, setCurrentActive] = useState("all");
  let [mainData, setMainData] = useState(maindata);
  return (
    <section id="Portfolio" className={`${styles.portfolio}`}>
      <img src={bg} alt="bg not found" className={styles.bg} />
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
            className={currentActive === "web" ? "active" : null}
            onClick={() => {
              setCurrentActive("web");
              let data = maindata.filter((i) => {
                return i.category === "web";
              });
              setMainData(data);
            }}
          >
            Web projects
          </button>
          <button
            className={currentActive === "ui" ? "active" : null}
            onClick={() => {
              setCurrentActive("ui");
              let data = maindata.filter((i) => {
                return i.category === "ui";
              });
              setMainData(data);
            }}
          >
            Ui & Ux projects
          </button>
        </div>

        <div className={`${styles.projects}`}>
          <Swiper
            className={styles.swiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
          >
            {mainData.map((item) => {
              return (
                <SwiperSlide className={styles.slide} key={item.id}>
                  <a href="" className={styles.img}>
                    {" "}
                    <img src={item.imgUrl} alt="" />
                  </a>
                  <a
                    className={`${styles.item} wow fadeInUp`}
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                  >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
