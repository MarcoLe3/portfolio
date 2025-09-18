import Link from 'next/link';

export default function TopHomeNav() {
  return (
    <nav className="fixed w-full bg-black text-center bg-opacity-70 z-50 p-y-4">
      <Link
        href="/"
        className="text-gray-400 text-[15px] font-rubik px-4 py-2 font-thin hover:text-white transition-colors duration-300"
      >
        Home
      </Link>
    </nav>
  );
}