const ContactForm = () => {
  return (
    <form action="" className="w-full space-y-4">
      <div className="relative">
        <label
          className="absolute -top-2 ms-2 bg-white px-2 text-sm"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full rounded border border-gray-200 p-2  text-gray-600 focus:border-0 focus:outline-1 focus:outline-blue-200"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="relative">
        <label
          className="absolute -top-2 ms-2 bg-white px-2 text-sm"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full rounded border border-gray-200 p-2  text-gray-600 focus:border-0 focus:outline-1 focus:outline-blue-200"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="relative">
        <label
          className="absolute -top-2 ms-2 bg-white px-2 text-sm"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className="w-full rounded border border-gray-200 p-2  text-gray-600 focus:border-0 focus:outline-1 focus:outline-blue-200"
          type="number"
          id="phone"
          name="phone"
          required
        />
      </div>
      <div className="relative">
        <label
          className="absolute -top-2 ms-2 bg-white px-2 text-sm"
          htmlFor="service"
        >
          Service
        </label>
        <select
          className="w-full appearance-none rounded border border-gray-200 p-2  text-gray-600 focus:border-0 focus:outline-1 focus:outline-blue-200"
          name="service"
          id="service"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="webdevelopment">Web Development / Design</option>
          <option value="appdevelopment">Android & IOS Application</option>
          <option value="seo">SEO / SMO Marketing</option>
          <option value="marketing">Digital Marketing</option>
        </select>
      </div>
      <div className="relative">
        <label
          className="absolute -top-2 ms-2 bg-white px-2 text-sm"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="h-24 w-full rounded border border-gray-200 p-2  text-gray-600 focus:border-0 focus:outline-1 focus:outline-blue-200"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <button
        className="w-full cursor-pointer rounded bg-gradient-to-r from-orange-400 to-blue-400 to-50% px-4 py-1.5 text-white transition-all duration-300 ease-in-out hover:scale-105"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
