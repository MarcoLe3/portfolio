import Link from "next/link";

export default function LearnMoreButton({ url }) {
  return (
    <Link
      href={url || "/"}
      className="p-2 bg-blue-500 text-white hover:bg-opacity-90 hover:text-white w-[110px] rounded-full text-center"
    >
      Learn More
    </Link>
  );
}
