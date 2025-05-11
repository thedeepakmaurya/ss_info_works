import Image from "next/image";
import Link from "next/link";
import { RiLinkedinLine } from "react-icons/ri";

const TeamCard = ({ name, position, image, linkedin }) => {
  return (
    <div className="relative flex h-96 justify-center lg:h-80">
      <Image
        className="h-full rounded-xl object-cover shadow"
        src={image}
        alt="member"
        width={1000}
        height={600}
      />
      <div className="absolute bottom-4 flex w-[90%] items-center justify-between rounded-xl bg-white/80 p-3 backdrop-blur-lg">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm">{position}</p>
        </div>
        <Link href={linkedin}>
          <RiLinkedinLine
            size={28}
            className="rounded bg-blue-400 p-1 text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
