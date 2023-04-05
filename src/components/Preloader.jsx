import React from "react";

const Preloader = () => {
  document.body.style.overflow = "hidden";
  return (
    <div className="min-h-screen relative flex md:justify-center sm:items-center">
      <h2>Loading...</h2>
    </div>
  );
};

export default Preloader;
