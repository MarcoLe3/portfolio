import Link from 'next/link';

export default function TopHomeNav() {
  return (
    <nav className="fixed w-full text-center bg-opacity-70 z-50 p-y-4">
      <Link
        href="/"
        className="text-black text-[17px] font-rubik px-4 py-2 font-thin hover:text-gray-700 transition-colors duration-300"
      >
        Home
      </Link>
    </nav>
  );
}