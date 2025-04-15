import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="px-3 lg:px-20">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 rounded-xl border border-orange-200 bg-orange-50 p-6">
          <h3 className="text-lg font-medium">Get in Touch</h3>
          <div>
            <h4>Visit us</h4>
            <p className="text-sm">Come say hello at our office HQ,</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              suscipit?
            </p>
          </div>
          <div>
            <h4>Chat to us</h4>
            <p className="text-sm">Our friendly team is here to help</p>
            <p className="text-sm">
              <Link href="mailto:">hello@ssinfoworks.com</Link>
            </p>
          </div>
          <div>
            <h4>Call us</h4>
            <p className="text-sm">Mon-Fri from 8am to 5pm</p>
            <p className="text-sm">
              <Link href="tel:+91">+91 9876 54321 </Link>
            </p>
          </div>
        </div>
        <div>
          <form action="" className="w-full space-y-4">
            <div className="relative">
              <label
                className="absolute -top-2 ms-2 bg-white px-2 text-xs"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-sm border border-gray-200 p-2 text-sm text-gray-600 focus:border-0 focus:outline-1 focus:outline-orange-200"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="relative">
              <label
                className="absolute -top-2 ms-2 bg-white px-2 text-xs"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-sm border border-gray-200 p-2 text-sm text-gray-600 focus:border-0 focus:outline-1 focus:outline-orange-200"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="relative">
              <label
                className="absolute -top-2 ms-2 bg-white px-2 text-xs"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full rounded-sm border border-gray-200 p-2 text-sm text-gray-600 focus:border-0 focus:outline-1 focus:outline-orange-200"
                type="number"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="relative">
              <label
                className="absolute -top-2 ms-2 bg-white px-2 text-xs"
                htmlFor="service"
              >
                Service
              </label>
              <select
                className="w-full appearance-none rounded-sm border border-gray-200 p-2 text-sm text-gray-600 focus:border-0 focus:outline-1 focus:outline-orange-200"
                name="service"
                id="service"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="webdevelopment">Web Development / Design</option>
                <option value="appdevelopment">
                  Android & IOS Application
                </option>
                <option value="seo">SEO / SMO Marketing</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>
            <div className="relative">
              <label
                className="absolute -top-2 ms-2 bg-white px-2 text-xs"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="h-24 w-full rounded-sm border border-gray-200 p-2 text-sm text-gray-600 focus:border-0 focus:outline-1 focus:outline-orange-200"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <button
              className="cursor-pointer rounded-sm bg-gradient-to-r from-orange-400 to-blue-400 to-50% px-4 py-1.5 text-white transition-all duration-300 ease-in-out hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="min-h-80">
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.073833103219!2d77.27591422469585!3d28.627549175667486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35319b6a7ff%3A0x127dca80423ad527!2sLaxmi%20Nagar%2C%20Block%20S1%2C%20Nanakpura%2C%20Shakarpur%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1743358436032!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
