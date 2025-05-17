"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useRef, useState } from "react";
import data from "@/public/db/data.json";
import OverlayModal from "../common/modal/OverlayModal";
import PopupForm from "./PopupForm";
import SliderContainer from "../blocks/SliderContainer";

const HeroSlider = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsFormVisible(true);
    }, 3000);
  }, []);

  const slides = data?.slides || [];

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
    }),
    [],
  );

  return (
    <section className="pb-10">
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <SliderContainer key={index} {...slide} />
        ))}
      </Slider>

      {isFormVisible && (
        <OverlayModal
          content={<PopupForm onClose={() => setIsFormVisible(false)} />}
        />
      )}
    </section>
  );
};

export default HeroSlider;
