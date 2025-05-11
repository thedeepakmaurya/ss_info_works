import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";


const SliderContainer = ({img, tagline}) => {
  return (
    <div >
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
};

export default SliderContainer;
