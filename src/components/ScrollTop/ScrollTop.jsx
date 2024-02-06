import React, { useState, useEffect } from "react";
import "./ScrollTop.scss";
import arrow from "../icons/flecha-arriba.svg";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll">
      {isVisible && (
        <button className="btnTop" onClick={scrollToTop}>
          <img width={20} src={arrow} alt="" />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
