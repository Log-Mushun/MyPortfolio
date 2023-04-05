import React from "react";
import ReactLoading from "react-loading";

const Preloader = () => {
  return (
    <div>
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
