import Image from "next/image";
import data from "../../public/db/data.json";
import Link from "next/link";

export default function About() {
  const { stat, team } = data;
  return (
    <section className="space-y-12 px-3 text-gray-700 lg:space-y-20 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="row-span-2">
          <h5 className="mb-2 text-lg text-orange-400">How it started</h5>
          <h2 className="mb-6 text-3xl lg:mb-16 lg:text-5xl">
            Empowering the World Through Digital Innovation
          </h2>
          <p>
            At SS Infoworks Technology, we specialize in delivering top-notch
            web services tailored to your business needs. From web development
            and design to cloud solutions and digital marketing, we provide
            end-to-end solutions that drive growth and innovation. Our team of
            experts is committed to creating high-performance, secure, and
            scalable web applications that enhance your online presence. With a
            focus on cutting-edge technology and customer satisfaction, we
            ensure seamless experiences for businesses of all sizes. Whether
            you're a startup or an enterprise, we help you stay ahead in the
            digital landscape. Partner with us to transform your online journey!
          </p>
        </div>
        <div className="h-48 rounded-xl">
          <Image
            className="h-full rounded-xl object-cover"
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
            alt="about"
            width={1200}
            height={600}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stat.map(({ title, value }, index) => {
            return (
              <div key={index} className="rounded-xl bg-orange-50 p-6">
                <h3 className="text-2xl font-medium">{value}</h3>
                <p className="text-lg text-blue-400 capitalize">{title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h5 className="mb-2 text-lg text-orange-400">Meet the Team</h5>
        <h2 className="mb-6 text-3xl lg:text-4xl">
          Meet our dedicated team
          <br /> of developers.
        </h2>
        <div className="grid gap-8 lg:grid-cols-4">
          {team.map(({ name, position, image, linkedin }, index) => {
            return (
              <div key={index} className="relative flex h-80 justify-center">
                <Image
                  className="h-full rounded-xl object-cover"
                  src={image}
                  alt="member"
                  width={1000}
                  height={600}
                />
                <div className="absolute bottom-4 flex w-[90%] items-center justify-between rounded-xl bg-white/80 p-3 backdrop-blur-lg">
                  <div>
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-sm">{position}</p>
                  </div>
                  <Link href={linkedin}>
                    <i className="ri-linkedin-line ri-xl rounded-sm bg-blue-400 p-1 text-white"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h5 className="mb-2 text-lg text-orange-400">Our Mission</h5>
          <h2 className="mb-6 text-3xl lg:text-4xl">
            Driven by innovation, Focused on your success
          </h2>
          <p>
            To provide high-quality, secure, and user-centric web services that
            help our clients grow in the digital space. We are committed to
            understanding our clients’ needs, offering customized solutions, and
            building long-term partnerships through trust, innovation, and
            excellence.
          </p>
        </div>
        <div>
          <h5 className="mb-2 text-lg text-orange-400">Our Vision</h5>
          <h2 className="mb-6 text-3xl lg:text-4xl">
            Empowering the digital future, one solution at a time
          </h2>
          <p>
            To be a leading force in the digital world by delivering reliable,
            innovative, and scalable web solutions that empower businesses and
            individuals to thrive online. We strive to create seamless digital
            experiences through cutting-edge technology, exceptional service,
            and a commitment to continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
