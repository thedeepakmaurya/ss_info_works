import Link from "next/link";
import data from "../../public/db/data.json";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";

export default function Footer() {
  const currYear = new Date().getFullYear();
  const { usefullinks } = data;

  return (
    <footer>
      <div className="h-auto w-full bg-blue-950 px-2.5 text-white lg:px-20">
        <div className="grid gap-6 py-10 lg:grid-cols-4 lg:gap-0">
          <div>
            <h3>Contact Info</h3>
            <h5>For Sales</h5>
            <ul className="mb-4">
              <li>
                <Link href="tel:+918882425881">+91 88824 25881</Link>
              </li>
            </ul>
            <h5>For Support</h5>
            <ul className="mb-4">
              <li>
                <Link href="tel:+917009080966">+91 70090 80966</Link>
              </li>
              <li>
                <Link href="tel:+919315673606">+91 93156 73606</Link>
              </li>
            </ul>
            <h5>Mail ID</h5>
            <Link href="mailto:Ssinfoworkstechnology@gmail.com">
              Ssinfoworkstechnology@gmail.com
            </Link>
          </div>
          {usefullinks.map((item, index) => (
            <div key={index}>
              <h3>{item.label}</h3>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.route}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3>Find us on</h3>
            <div className="flex space-x-3">
              <Link href="#">
                <CiFacebook size={24} />
              </Link>
              <Link href="#">
                <CiInstagram size={24} />
              </Link>
              <Link href="#">
                <CiTwitter size={24} />
              </Link>
              <Link href="#">
                <CiLinkedin size={24} />
              </Link>
              <Link href="#">
                <CiYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-x-2 border-t py-4 text-center text-sm">
          <span>
            &copy; 2021 - {currYear}
            <Link className="border-b" href="#">
              {" "}
              SS Infoworks Technology
            </Link>
          </span>
          <span>
            Design & Developed by
            <Link
              className="border-b"
              href="https://deepakmaurya.us"
              target="_blank"
            >
              {" "}
              Deepak Maurya
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
