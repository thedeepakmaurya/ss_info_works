import Image from "next/image";

const WebDevelopment = () => {
  return (
    <section className="container">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <Image
          className="h-60 rounded-xl object-cover lg:h-[500px]"
          src={"/img/services/web_design.webp"}
          alt="web development"
          width={600}
          height={600}
        />
        <div>
          <h2>
            <span className="text-orange-400"> Website</span> Design /
            Development
          </h2>
          <div className="space-y-6">
            <p>
              Website designing and development is the process of brainstorming
              ideas, developing a concept, and publishing material on the
              internet. When creating a website today, you must consider both
              the functionality of the website and the aesthetics of the
              website. Other aspects of web design include creating online
              applications and mobile applications and the result of user
              interfaces. When creating a website, it is critical to consider
              both the visual appearance of the site and the functionality it
              offers. Coordination of these components will allow the facility
              to operate more efficiently and create more goods and services.
              Regardless of what profession or industry you wish to work in, Web
              Designing Company <strong>SS Infoworks Technology</strong>
              has web developers and designers who know how to create functional
              and user-friendly websites.
            </p>
            <p>
              Web Design and Website Development Services are widely available
              to aid you in developing mobile and responsive websites and
              generate unique e-commerce and intranet experiences using the most
              up-to-date and proven web technologies. Consumers are increasingly
              basing their purchasing decisions on their online experience,
              thanks to the increasing number of people who browse a company or
              service provider's website before making a purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
