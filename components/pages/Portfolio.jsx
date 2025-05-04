import Image from "next/image";
import data from "../../public/db/data.json";
import Link from "next/link";

export default function PortfolioPage() {
  const { projects } = data;

  return (
    <section className="container">
      <div className="grid gap-8 lg:grid-cols-4">
        {projects.map(({ image, url, type }, index) => {
          return (
            <div key={index}>
              <Link href={url} target="_blank">
                <Image
                  className="mb-2 h-72 w-full rounded object-cover transition-all hover:scale-105 lg:h-52"
                  src={image}
                  alt="street"
                  width={1024}
                  height={768}
                />
                <div className="flex items-center justify-between">
                  <p className="font-medium"> {type}</p>
                  <span>
                    <i className="ri-code-s-slash-line ri-lg bg-gradient-to-r from-orange-400 to-blue-400 to-50% bg-clip-text text-transparent"></i>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
