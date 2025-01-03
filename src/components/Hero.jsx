import React, { useState, useEffect } from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { herobg } from "../assets/index";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-x-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#915eff]">Taahaa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D animations, user
            <br className="sm:block hidden" /> interfaces and web applications
          </p>
        </div>
      </div>

      {/* Only render ComputersCanvas on non-mobile screens */}
      {!isMobile && (
        <div className="relative w-full h-screen mx-auto">
          <ComputersCanvas />
        </div>
      )}
    </section>
  );
};

export default Hero;
