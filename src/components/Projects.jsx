import { content } from "../Content";
// Import Swiper React components
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <div className="flex items-center lg:flex-row gap-5">
          <div className="block w-[70%]">
          <ReactPlayer url='https://youtu.be/TYc_mwqUp3w' width='50rem' height='30rem'/>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 z-10">
             <button className="rounded-full bg-blue-500 text-white m-4 p-2 h-20 w-40"   onClick={() => window.open('https://www.behance.net/gallery/175196503/Noten-Und-Farben', '_blank')}
              data-aos="fade-up">
              MORE
            </button>
            </div>
            <img
              src={Projects.image}
              alt="..."
              data-aos="fade-right"
              className="md:flex sm:hidden z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
