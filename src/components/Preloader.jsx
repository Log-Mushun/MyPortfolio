import React from "react";
import ReactLoading from "react-loading";

const Preloader = () => {
  return (
    <div className="min-h-screen relative flex md:justify-center sm:items-center">
      <ReactLoading
        type={"bubbles"}
        color={"#bed2f4"}
        height={367}
        width={275}
      />
    </div>
  );
};

export default Preloader;
