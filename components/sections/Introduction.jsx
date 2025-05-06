import Image from "next/image";
import Button from "../ui/Button";

const Introduction = () => {
  return (
    <section className="container">
      <div className="mb-10 text-center">
        <h5>About Company</h5>
        <h2 className="mb-6 text-3xl lg:mb-16 lg:text-4xl">
          Application & Wesite <br /> Development Company
        </h2>
      </div>
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
        <div className="h-80 w-full lg:h-[460px]">
          <Image
            className="h-full w-full rounded-xl shadow object-cover"
            src="/img/banner/web_development.webp"
            alt="works"
            width={600}
            height={1200}
            priority
          />
        </div>
        <div className="space-y-4">
          <p>
            “ <strong>At Ss Infoworks Technology</strong>, we are driven by a
            passion for technology and innovation. Founded with the vision to
            deliver smart, scalable, and future-ready digital solutions, we
            specialize in providing end-to-end IT services that empower
            businesses to grow, transform, and thrive in a digital-first world.
          </p>
          <p>
            With a strong focus on quality, performance, and customer
            satisfaction, we bring together a talented team of developers,
            designers, and strategists who are committed to pushing boundaries
            and delivering impactful solutions. From custom Website Development
            software development, mobile and web applications, Social Media
            Promotions, SEO and IT consulting—our offerings are tailored to meet
            the unique needs of every client.
          </p>
          <p>
            What sets us apart is our collaborative approach, transparent
            communication, and unwavering commitment to excellence. Whether
            you're a startup or an enterprise, Ss Infoworks Technology is your
            trusted technology partner, helping you stay ahead in a rapidly
            evolving digital landscape.
          </p>
          <p>
            <strong>Innovation. Integrity. Impact</strong>. That’s the Ss
            Infoworks promise.”
          </p>
          <Button text="Learn more" url="/about" style="" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
