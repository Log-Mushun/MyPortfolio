// import components
import React, { useState, useEffect } from "react";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("./assets/images/Hero/person.png"),
      fetch("./assets/images/Projects/person.png"),
      fetch("./assets/images/Hireme/person.png"),
    ]).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      {loaded ? (
        <>
          <Portfolio />
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
export default App;
