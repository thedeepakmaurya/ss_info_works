import Link from "next/link";
import data from "../../public/db/data.json";

export default function Footer() {
  const currYear = new Date().getFullYear();
  const { usefullinks } = data;

  return (
    <footer className="w-full">
      <div className="h-auto w-full bg-blue-950 px-2.5 text-white lg:px-20">
        <div className="grid gap-6 py-10 lg:grid-cols-4 lg:gap-0">
          <div>
            <h3>Contact Info</h3>
            <h5>For Sales</h5>
            <ul className="mb-4">
              <li>
                <Link href="">+1 123-456-7890</Link>
              </li>
              <li>
                <Link href="">+1 987-654-3210</Link>
              </li>
            </ul>
            <h5>For Support</h5>
            <ul className="mb-4">
              <li>
                <Link href="">+1 123-456-7890</Link>
              </li>
              <li>
                <Link href="">+1 987-654-3210</Link>
              </li>
            </ul>
            <h5>Mail ID</h5>
                <Link href="mailto:support@ssinfoworks.com">
                 support@ssinfoworks.com
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
            <div className="space-x-4">
              <Link href="#">
                <i className="ri-facebook-line ri-lg"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line ri-lg"></i>
              </Link>
              <Link href="#">
                <i className="ri-twitter-x-line ri-lg"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-line ri-lg"></i>
              </Link>
              <Link href="#">
                <i className="ri-github-line ri-lg"></i>
              </Link>
              <Link href="#">
                <i className="ri-youtube-line ri-lg"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-x-2 border-t py-4 text-center text-sm">
          <span>
            &copy; {currYear}
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
