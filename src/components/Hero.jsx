// import content
import { content } from "../Content";
import { useState } from "react";
import Preloader from "./Preloader";

const Hero = (props) => {
  //create hero content
  const { hero } = content;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (isLoaded || screen.height < 900) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      {isLoaded || screen.height < 900 ? (
        <section ref={props.heroRef} id="home" className="overflow-hidden">
          <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end md:justify-center sm:items-center">
            <div
              data-aos="slide-left"
              data-aos-delay="1200"
              className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
            >
              <h1 className="md:block md:rotate-90 md:absolute md:top-[30%] md:right-[-15%] text-[#EAF2FA] hidden">
                {hero.firstName}{" "}
                <span className="text-dark_primary">{hero.LastName}</span>
              </h1>
            </div>

            {/* first col */}
            <div className="pb-16 px-6 pt-5" data-aos="fade-down">
              <h1 className="md:hidden sm:flex justify-start mb-10">
                {hero.firstName}
                <span className="text-dark_primary ml-2">{hero.LastName}</span>
              </h1>
              <h2>{hero.title}</h2>
              <br />
              <div className="flex justify-end">
                <button
                  className="btn bottom-100 hover:bg-[#253D57] hover:text-white"
                  ref={props.goToContactButtonRef}
                >
                  {hero.btnText}
                </button>
              </div>
              <div className="flex flex-col gap-10 mt-10">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    data-aos="fade-down"
                    data-aos-delay={i * 300}
                    className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
                  >
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* sec col */}
            <div className="hidden md:block md:h-[37rem] h-96 ">
              <img
                src={hero.image}
                data-aos="slide-up"
                alt="..."
                className="h-full object-cover"
              />
            </div>
          </div>
        </section>
      ) : screen.height > 900 ? (
        <>
          <Preloader />
          <img
            src={hero.image}
            className="opacity-0 h-1 w-1"
            onLoad={handleImageLoad}
            alt="..."
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
