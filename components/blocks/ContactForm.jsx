import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";

const ContactForm = () => {
  return (
    <form className="w-full space-y-4 lg:col-span-3">
      <Input name="name" type="text" />
      <Input name="email" type="email" />
      <Input name="phone" type="number" />
      <Select
        name="service"
        options={[
          "Web Development / Design",
          "Android & IOS Application",
          "SEO / SMO Marketing",
          "Digital Marketing",
        ]}
      />
      <TextArea name="message" />
      <Button style={"w-full"} url="/" text="Send Message" />
    </form>
  );
};

export default ContactForm;
