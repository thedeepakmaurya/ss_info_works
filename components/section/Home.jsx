import Image from "next/image";
import Button from "../ui/Button";

export default function HomePage() {
  return (
    <div className="px-3 lg:px-20">
      <section className="flex flex-col items-center gap-6">
        <div className="w-fit rounded-full border border-orange-200 bg-orange-50 p-4 text-gray-700">
          <div className="relative">
            <Image
              className="absolute -top-2 left-0 h-10 w-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
              alt="testimonial"
              width={100}
              height={100}
            />
            <Image
              className="absolute -top-2 left-6 h-10 w-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/14084487/pexels-photo-14084487.jpeg"
              alt="testimonial"
              width={100}
              height={100}
            />
            <Image
              className="absolute -top-2 left-12 h-10 w-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/4972784/pexels-photo-4972784.jpeg"
              alt="testimonial"
              width={100}
              height={100}
            />
          </div>
          <p className="ms-24 font-medium">Trusted by 35,000+ people</p>
        </div>
        <h1 className="text-5xl lg:text-8xl text-center font-semibold text-gray-700">Empowering Your  <br/> Digital Presence</h1>
        <p className="text-center lg:w-2/3">We specialize in delivering fast, secure, and scalable web solutions tailored to your unique needs. Whether you're launching your first website or managing a growing digital presence.</p>
        <Button text="Book a call with us" url="tel:+91987654321" style="" />
      </section>
    </div>
  );
}
