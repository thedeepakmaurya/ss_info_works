import Link from "next/link";

export default function Button({ url, style, text }) {
  return (
    <Link href={url}>
      <button
        className={`${style} w-fit  cursor-pointer rounded-full bg-gradient-to-r from-orange-400 to-blue-400 to-50% px-4 py-1.5 text-white transition-all duration-300 ease-in-out hover:scale-105`}
      >
        {text}
      </button>
    </Link>
  );
}
