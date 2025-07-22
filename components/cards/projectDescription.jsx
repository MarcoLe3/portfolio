import Link from 'next/link';
import Image from 'next/image';

function ProjectDescription({ title, tagline, imageUrl, link }) {
  const CardContent = (
    <div className="rounded-2xl p-6 mb-14 cursor-pointer hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[16vw] h-[40vh] flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium text-black mt-10">{title}</h2>
        <p className="text-lg text-blue-600 font-medium">{tagline}</p>
      </div>
      <div className="relative w-full h-[60vh]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  return link ? <Link href={link}>{CardContent}</Link> : CardContent;
}

export default ProjectDescription;
