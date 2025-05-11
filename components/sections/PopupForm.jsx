import { IoCloseOutline } from "react-icons/io5";
import ContactForm from "../blocks/ContactForm";

const PopupForm = ({onClose}) => {
  return (
    <section className="mx-auto rounded-xl bg-white lg:w-[60%]">
      <h4 className="px-6 py-4 border-b flex justify-between items-center border-gray-200">Contact Us <IoCloseOutline onClick={onClose} size={28} /></h4>
      <div className="p-6">
        <ContactForm />
      </div>
    </section>
  );
};

export default PopupForm;
