import Link from 'next/link';
import Image from 'next/image';

function ProjectDescription({ title, tagline, imageUrl, link }) {
  const CardContent = (
    <div
      className="rounded-2xl p-6 cursor-pointer hover:scale-[1.03] transition-transform duration-300 ease-in-out bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
      w-[400px] h-[500px] 
      flex flex-col justify-between overflow-hidden"
    >
      {/* Title and Tagline */}
      <div className="space-y-3 mb-4">
        <h2 className="text-2xl font-medium text-black">{title}</h2>
        <p className="text-lg text-blue-600 font-medium">{tagline}</p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[250px] mt-auto">
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
