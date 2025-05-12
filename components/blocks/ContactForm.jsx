"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/mailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form className="w-full space-y-4 lg:col-span-3">
      <Input
        name="name"
        type="text"
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        name="email"
        type="email"
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name="phone"
        type="number"
        onChange={handleChange}
        value={formData.type}
      />
      <Select
        name="service"
        onChange={handleChange}
        value={formData.service}
        options={[
          "Web Development / Design",
          "Android & IOS Application",
          "SEO / SMO Marketing",
          "Digital Marketing",
        ]}
      />
      <TextArea
        name="message"
        onChange={handleChange}
        value={formData.message}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        style={"w-full"}
        url="/"
        text="Send Message"
      />
    </form>
  );
};

export default ContactForm;
