import Image from "next/image";

const SeoService = () => {
  return (
    <section className="container">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <Image
          className="order-1 h-60 rounded-xl object-cover lg:order-2 lg:h-[500px]"
          src={"/img/services/seo_services.webp"}
          alt="web development"
          width={600}
          height={600}
        />
        <div className="order-2 lg:order-1">
          <h2>
            <span className="text-orange-400"> SEO</span> SERVICE
          </h2>
          <p>
            <strong>SS Infoworks Technology</strong> has marked its dignified
            presence in Real estate, IT, BPO and SOFTWARE DEVELOPMENT services.
            It endeavors to maintain international standards and quality in the
            projects that it embarks on. Uncompromising aptitude, values,
            strategies and business insight form the foundation of its
            proficient service channels. The company understands the
            significance of time and money and provides optimized business
            solutions and processes which, would help you, focus on your core
            business areas with unambiguous cost advantages through manifold
            business solutions.
            <strong>SS Infoworks Technology</strong> is administered by a
            swiftly-flowing, efficient and affable management system. Its work
            culture is empowered with the genial atmosphere the team members
            provide and the resourceful ways with which every topic is addressed
            with due concern and the healthy treatment given to all with equal
            poise and respect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoService;
