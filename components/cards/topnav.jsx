import Link from 'next/link';

export default function TopHomeNav() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Link
        href="/"
        className="bg-gray-200/90 text-gray-800 font-rubik text-lg px-4 py-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
      >
        Home
      </Link>
    </nav>
  );
}