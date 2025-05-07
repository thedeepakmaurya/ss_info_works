"use client";
import Image from "next/image";
import { SiComma } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "../ui/Heading";

const Testimonials = ({ testimonials }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container">
      <Heading title={"Our Testimonial"} description={"What People Say"} />
      <div className="relative mx-auto mb-14 lg:w-[70%]">
        <Slider ref={sliderRef} {...settings}>
          {testimonials?.map(
            ({ img, title, description, designation }, index) => (
              <div className="px-1 py-1 lg:px-4" key={index}>
                <div className="grid grid-cols-3 rounded-xl bg-white px-2 py-4 shadow lg:px-10 lg:py-5">
                  <Image
                    className="h-80 w-full rotate-y-50 transform rounded-lg object-cover shadow"
                    src={img}
                    alt="person"
                    width={500}
                    height={500}
                  />
                  <div className="col-span-2 space-y-4">
                    <div className="flex justify-end">
                      <SiComma className="text-5xl text-gray-200 lg:text-8xl" />
                    </div>
                    <p className="mb-8 font-semibold text-gray-600">
                      {description}
                    </p>
                    <span className="text-2xl font-bold text-gray-600">
                      {title}
                    </span>
                    <p className="text-sm font-medium text-gray-600 italic">
                      {designation}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </Slider>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -bottom-14 left-[35%] h-fit cursor-pointer rounded-full bg-gray-200 p-2 text-gray-400 opacity-50 hover:opacity-90 lg:top-[50%] lg:-left-10"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-[35%] -bottom-14 h-fit cursor-pointer rounded-full bg-gray-200 p-2 text-gray-400 opacity-50 hover:opacity-90 lg:top-[50%] lg:-right-10"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
