"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import data from "@/public/db/data.json";
import OverlayModal from "../common/modal/OverlayModal";
import PopupForm from "./PopupForm";
import SliderContainer from "../blocks/SliderContainer";

const HeroSlider = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    setIsFormVisible(true);
  }, []);

  const { slides } = data;
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pb-10">
      <Slider ref={sliderRef} {...settings}>
        {slides?.map((slide, index) => <SliderContainer key={index} {...slide}  />)}
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
