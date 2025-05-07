import Image from "next/image";

const ApplicationDevelopment = () => {
  return (
    <section className="container">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <Image
          className="order-1 h-60 rounded-xl object-cover lg:order-2 lg:h-[500px]"
          src={"/img/services/application_development.gif"}
          alt="application development"
          width={600}
          height={600}
        />
        <div className="order-2 lg:order-1">
          <h2>
            <span className="text-orange-400"> Application</span> Development
          </h2>
          <div className="space-y-6">
            <p>
              Mobile Application Designing and Development for Android and IOS
              services help to build apps for iOS and Android devices.
              <strong>SS Infoworks Technology</strong> has been in this industry
              since 2009 and is the firm that provides app design for iOS &
              Android services in the most effective manner. You have developed
              a mobile application, but you are unsure of the best way to market
              and advertise it successfully. We understand your vision and will
              work with you to achieve it through the application of intelligent
              marketing tactics and strategies to your business. Preparation is
              essential for mobile application marketing, and we are here to
              assist you in establishing your strategy and putting your strategy
              into action.
              <strong>SS Infoworks Technology</strong> is a prominent mobile app
              development company that provides a comprehensive variety of
              mobile application development services to clients all over the
              world.
            </p>
            <p>
              The fact that the developer and their vision of the mobile
              application should match the division of the brand on which they
              are working on the mobile application is what it all boils down
              to, whether it is about mobile application development for an
              Android smartphone or an iPhone with iOS as their primary
              software, it all comes down to one thing. In addition, the
              creation of hybrid applications is being pursued.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationDevelopment;
