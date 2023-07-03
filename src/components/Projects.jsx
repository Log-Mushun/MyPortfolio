import { content } from "../Content";
// Import Swiper React components
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-90vh flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="hidden md:block max-w-[45vw] min-w-[22rem]"
          />
          <div>
          <ReactPlayer url='https://youtu.be/TYc_mwqUp3w'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
