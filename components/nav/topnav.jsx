import Link from 'next/link';

export default function TopHomeNav() {
  return (
    <nav className="w-full text-center z-50 p-y-4 text-black text-[17px] font-rubik px-4 py-2 font-thin hover:text-gray-700 transition-colors duration-300">
      <Link
        href="/"
      >
        Home 
      </Link>
      {/* <Link
        href="https://www.linkedin.com/in/marco-lee-1461a0254/"
      >
        Linkedln
      </Link> */}
    </nav>
  );
}