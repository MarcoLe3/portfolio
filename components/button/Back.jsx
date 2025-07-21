import { useRouter } from 'next/router';

export default function Back() {
  const router = useRouter();

  return (
    <nav className="fixed top-8 left-10 z-50">
      <button
        onClick={() => router.back()}
        className="bg-gray-200/90 text-gray-800 font-rubik text-lg px-4 py-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
      >
        <img
          src="/image/LeftArrow.png"
          alt="Back"
          className="w-5 h-5 mr-2"
        />
        Back
      </button>
    </nav>
  );
}
