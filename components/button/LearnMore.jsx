import Link from "next/link";

export default function LearnMoreButton({ url }) {
  return (
    <Link
      href={url}
      className=" p-4 border border-black hover:bg-black hover:text-white rounded-full text-center"
    >
      Learn More
    </Link>
  );
}
