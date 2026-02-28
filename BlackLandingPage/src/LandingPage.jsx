import React, { useEffect, useState } from "react";
import "./LandingPage.css";

import img1 from "./images/img1.avif";
import img2 from "./images/img2.avif";
import img3 from "./images/img3.avif";
import img4 from "./images/img4.avif";
import img5 from "./images/img5.avif";
import img6 from "./images/img6.avif";
import img7 from "./images/img7.avif";
import img8 from "./images/img8.avif";
import img9 from "./images/img9.avif";
import img10 from "./images/img10.avif";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Heading */}
      <h1>Black</h1>

      {/* Box */}
      <div className="box">
        {/* Image Slider */}
        <img src={images[index]} alt="slider" className="slider-image" />

        {/* Content */}
        <div className="content">
          <p>
            <span style={{ color: "red" }}>Black</span> is a very strong
            color.It is not just a color,it represent the depth of the night,
            the elegance of simplicity, and the mystery of the unknown.
            <span style={{ color: "green" }}> Black</span> looks simple and
            stylish.
            <span style={{ color: "yellow" }}> Black</span> represents power and
            confidence.
            <span style={{ color: "orange" }}> Black</span> is used in formal
            clothes.
            <span style={{ color: "pink" }}> Black</span> makes things modern
            and attractive.
            <span style={{ color: "cyan" }}> Black</span> is used in technology
            design.
            <span style={{ color: "purple" }}> Black</span> shows depth and
            sadness.
            <span style={{ color: "lightgreen" }}> Black</span> matches with all
            colors.
            <span style={{ color: "gold" }}> Black</span> is seen in the night
            sky and space.
            <span style={{ color: "lightblue" }}> Black</span> shows seriousness
            and focus.
            <span style={{ color: "hotpink" }}> Black</span> is popular in
            fashion and branding.
            <span style={{ color: "lime" }}> Black</span> gives a bold and clean
            look.
            <span style={{ color: "red" }}> Black</span> is simple but very
            powerful.
            <span style={{ color: "teal" }}> Black</span> gives a professional
            appearance.
            <span style={{ color: "brown" }}> Black</span> is timeless and never
            goes out of style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
