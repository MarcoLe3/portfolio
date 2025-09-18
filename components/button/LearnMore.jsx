import Link from "next/link";

export default function LearnMoreButton({ url }) {
  return (
    <Link
      href={url}
      className=" p-2 border border-black hover:bg-black hover:text-white w-[110px] rounded-full text-center"
    >
      Learn More
    </Link>
  );
}
