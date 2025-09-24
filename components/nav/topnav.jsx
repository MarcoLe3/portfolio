import Link from 'next/link';

export default function TopHomeNav() {
  return (
    <nav className="w-full flex flex-row gap-1 justify-center z-50 p-y-4 text-black text-[17px] font-rubik">
      <Link
        href="/"
        className='px-4 py-2 font-thin hover:text-gray-700 transition-colors duration-300'
      >
        Home 
      </Link>
      <Link
        href="https://www.linkedin.com/in/marco-lee-1461a0254/"
        className='px-4 py-2 font-thin hover:text-gray-700 transition-colors duration-300'
      >
        Linkedln
      </Link>
      <Link
        href={`mailto:marcole32k3@gmail.com`}
        className='px-4 py-2 font-thin hover:text-gray-700 transition-colors duration-300'
      >
        Email
      </Link>
    </nav>
  );
}