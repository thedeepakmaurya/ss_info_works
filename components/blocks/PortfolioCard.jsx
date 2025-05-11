import Image from "next/image";
import Link from "next/link";
import { IoCodeSlashOutline } from "react-icons/io5";

const PortfolioCard = ({ url, image, type }) => {
  return (
    <div>
      <Link href={url} target="_blank">
        <Image
          className="mb-2 h-72 w-full rounded-xl object-cover shadow transition-all hover:scale-105 lg:h-52"
          src={image}
          alt="street"
          width={1024}
          height={768}
        />
        <div className="flex items-center justify-between">
          <p className="font-medium"> {type}</p>
          <span>
            <IoCodeSlashOutline size={20} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
