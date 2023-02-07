import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const DesignerProjects = () => {
  const { DesignerProjects } = content;
  return (
    <section id="designerProjects">
      <div className="md:container px-5 pt-14 min-h-90vh flex flex-col">
        <div>
          <h2 className="title" data-aos="fade-down">
            {DesignerProjects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {DesignerProjects.subtitle}
          </h4>
          <br />
        </div>
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            data-aos-duration="15"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 drop-shadow-primary self-start max-w-5xl"
          >
            {DesignerProjects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    <a href={content.link} target="_blank">CHECK OUT ON BEHANCE</a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DesignerProjects;
