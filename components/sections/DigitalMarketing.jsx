import Image from "next/image";

const DigitalMarketing = () => {
  return (
    <section className="container">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <Image
          className="h-60 rounded-xl object-cover lg:h-[500px]"
          src={"/img/services/digital_marketing.webp"}
          alt="digital marketing"
          width={600}
          height={600}
        />
        <div>
          <h2>
            Digital <span className="text-orange-400"> Marketing</span>
          </h2>
          <div className="space-y-6">
            <p>
              The <strong>SS Infoworks Technology</strong> digital marketing
              agency is a dynamic, versatile, and full-service digital marketing
              agency that does not rely on "smoke and mirrors" tactics to
              attract new clients. To attract new customers to the client
              website, <strong>SS Infoworks Technology</strong> relies on its
              search engine optimization (SEO) and marketing capabilities. We
              are not a one-dimensional organization. We don't restrict
              ourselves to a specific field of expertise.{" "}
              <strong>SS Infoworks Technology</strong> has the expertise and
              professionals to design and develop a custom website as well as
              provide a variety of digital marketing services to assist any size
              business in any industry. So many other agencies take a
              one-size-fits-all approach, offering you the same strategy and
              cookie-cutter website as your competitor down the street, and this
              can be detrimental to your business.
            </p>
            <p>
              <strong>SS Infoworks Technology</strong> collaborates with you to
              develop customized internet marketing services and a strategy that
              is tailored to your specific business requirements. We become an
              extension of your team, a partner who understands your market and
              goals rather than a traditional advertising agency that executes
              strategies without understanding them or understanding their
              context. <strong>SS Infoworks Technology</strong> is different
              from many other agencies that focus on client relationships and
              results rather than glitz and glam to close sales and then fail to
              follow through on their promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
