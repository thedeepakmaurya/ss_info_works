"use client";
import { LuChevronRight } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRef } from "react";
import data from "@/public/db/data.json";

const HeroSlider = () => {
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
        {slides.map(({ tagline, img }, index) => {
          return (
            <div key={index}>
              <div
                className="flex h-[400px] w-full flex-col items-center justify-center text-white lg:h-[500px] lg:p-10"
                style={{
                  background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ) ,url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex-1">
                  <div className="flex h-full flex-col items-center justify-center gap-4">
                    <h1 className="text-center text-4xl font-extrabold lg:w-[70%] lg:text-6xl">
                      {tagline}
                    </h1>
                    <p>
                      <Link
                        className="flex items-center gap-2 text-lg font-medium"
                        href="/contact"
                      >
                        Get Started <LuChevronRight />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="hidden flex-wrap justify-center gap-10 font-semibold lg:flex">
                  <p>01. Website Development / Design</p>
                  <p>02. Android & IOS Application</p>
                  <p>03. SEO / SMO Marketing</p>
                  <p>04. Digital Marketing</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HeroSlider;
