import Image from "next/image";
import data from "../../public/db/data.json";
import Link from "next/link";
import HowStarted from "../sections/HowStarted";
import OurTeam from "../sections/OurTeam";
import VisionMission from "../sections/VisionMission";

export default function About() {
  const { stat, team } = data;
  return (
    <>
      <HowStarted stat={stat} />
      <OurTeam team={team} />
      <VisionMission />
    </>
  );
}
