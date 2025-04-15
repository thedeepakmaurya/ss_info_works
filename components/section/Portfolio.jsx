import Image from "next/image";
import Button from "../ui/Button";
import data from "../../public/db/data.json";
import Link from "next/link";

export default function PortfolioPage() {
  const { projects } = data;

  return (
    <section className="px-3 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-4">
        {projects.map(({ image, url, type }, index) => {
          return (
            <div key={index}>
              <Image
                className="mb-2 h-72 w-full rounded-xl object-cover transition-all hover:scale-105 lg:h-52"
                src={image}
                alt="street"
                width={1024}
                height={768}
              />
              <div className="flex items-center justify-between ">
                <span className="font-medium"> {type}</span>
                <span>
                  <Link href={url}>
                    <i className="ri-external-link-line ri-lg bg-gradient-to-r from-orange-400 to-blue-400 to-50% bg-clip-text text-transparent"></i>
                  </Link>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
