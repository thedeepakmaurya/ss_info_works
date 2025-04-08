import Image from "next/image";
import Button from "../ui/Button";
import data from "../../public/db/data.json";

export default function HomePage() {
  const { services } = data;

  return (
    <div className="space-y-20 px-3 lg:px-20">
      <section className="flex flex-col items-center gap-6">
        <div className="w-fit rounded-full border border-orange-200 bg-orange-50 p-4 text-gray-800">
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
        <h1 className="text-center text-5xl font-semibold text-gray-800 lg:text-8xl">
          Empowering Your <br /> Digital Presence
        </h1>
        <p className="text-center lg:w-2/3">
          We specialize in delivering fast, secure, and scalable web solutions
          tailored to your unique needs. Whether you're launching your first
          website or managing a growing digital presence.
        </p>
        <Button text="Book a call with us" url="tel:+91987654321" style="" />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="h-80 lg:h-[500px]">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src="https://images.pexels.com/photos/3747152/pexels-photo-3747152.jpeg"
            alt="works"
            width={600}
            height={1200}
          />
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-gray-800 lg:col-span-2">
          <h5 className="mb-2 text-lg text-orange-400">About Company</h5>
          <h2 className="mb-16 text-4xl lg:text-5xl">
            Application & Wesite <br /> Development Company
          </h2>
          <p className="mb-4">
            We are a full IT service agency offering customized solutions for
            all your web and mobile needs. WEB3CREATIONS has been a top
            Application & Website Development Company in Delhi since 2009. Our
            expert web designers and developers create high-performing,
            visually-appealing websites optimized for your target audience and
            goals, handling everything from planning and UX to programming and
            SEO integration. We build custom web apps enabling powerful
            functionalities to improve your online operations and offerings. Our
            app developers leverage the latest technologies to craft
            cross-platform native and hybrid mobile apps packed with features
            users love. Whether you need a marketing site, e-commerce store, web
            app, IOS or Android app, or suite of digital products, we have the
            specialized skills and experience to deliver success-driven results.
          </p>
          <Button text="Learn more" url="/about" style="" />
        </div>
      </section>
      <section className="text-gray-800">
        <h5 className="mb-2 text-lg text-orange-400">Our Services</h5>
        <h2 className="mb-8 text-4xl lg:text-5xl">Our Best Services</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map(({ title, description }, index) => {
            return (
              <div
                key={index}
                className={`${title === "Customize Software Development" ? "border-yellow-200 bg-yellow-50" : title === "MLM Software Development" ? "border-green-200 bg-green-50" : title === "Web Development / Design" ? "bg-red-50 border-red-200" : title === "Android & IOS Application" ? "bg-blue-50 border-blue-200" : title === "SEO/SMO & Marketing" ? "bg-cyan-50 border-cyan-200" : "bg-fuchsia-50 border-fuchsia-200"} flex flex-col items-center justify-center rounded-xl border p-6`}
              >
                <h4 className="mb-4 text-xl font-medium">{title}</h4>
                <p className="text-center">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
