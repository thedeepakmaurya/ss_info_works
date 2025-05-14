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

    const { name, email, phone, service, message } = formData;

    if (!name || !email || !phone || !service || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;

    if (!emailRegex.test(email)) {
      alert("📧 Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("📞 Please enter a valid phone number.");
      return;
    }

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("🚨 Network error. Please try again later.");
    }
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
        value={formData.phone}
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
