import Link from "next/link";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactDetail = () => {
  return (
    <div className="space-y-4 lg:col-span-2">
      <div className="flex gap-3">
        <CiLocationOn className="shrink-0" size={24} />
        <div>
          <h4>Visit us</h4>
          <p className="text-sm text-gray-600">
            Come say hello at our office HQ,
          </p>
          <p>Uttam Nagar, Delhi, 110059</p>
        </div>
      </div>
      <div className="flex gap-3">
        <CiMail className="shrink-0" size={24} />

        <div>
          <h4>Chat to us</h4>
          <p className="text-sm text-gray-600">
            Our friendly team is here to help
          </p>
          <p>
            <Link href="mailto:Ssinfoworkstechnology@gmail.com">
              Ssinfoworkstechnology@gmail.com
            </Link>
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <CiPhone className="shrink-0" size={24} />
        <div>
          <h4>Call us</h4>
          <p className="text-sm text-gray-600">Mon-Fri from 8am to 5pm</p>
          <p>
            <Link href="tel:+918882425881">+91 88824 25881</Link>,
            <Link href="tel:+917009080966"> +91 70090 80966</Link>,
            <Link href="tel:+919315673606"> +91 93156 73606</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
