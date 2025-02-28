// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import styles from "./projects.module.css";
import { useState } from "react";
import maindata from "./items.json";

export default function Projects() {
  let [currentActive, setCurrentActive] = useState("all");
  let [mainData, setMainData] = useState(maindata);
  return (
    <section id="Portfolio" className={`${styles.portfolio}`}>
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
              <a
                className={`${styles.item} wow fadeInUp`}
                target="_blank"
                rel="noreferrer"
                href={item.link}
              >
                {item.imgs ? (
                  <>
                    <Swiper
                      className="mySwiper"
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                    >
                      {item.imgs.map((img, index) => (
                        <SwiperSlide key={index}>
                          {" "}
                          <img src={img} alt="img not found" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={item.imgUrl} alt="img not found" />
                  </>
                )}

                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
