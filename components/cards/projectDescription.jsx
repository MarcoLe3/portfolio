import Link from 'next/link';
import Image from 'next/image';

function ProjectDescription({ title, tagline, imageUrl, link }) {
  const CardContent = (
    <div className="rounded-2xl p-6 mb-14 cursor-pointer hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
      w-[50vw] sm:w-[40vw] md:w-[34vw] lg:w-[30vw] xl:w-[18vw] 
      h-auto min-h-[50vh] max-h-[60vh] 
      flex flex-col justify-between overflow-hidden"
    >
      {/* Title and Tagline */}
      <div className="space-y-3 mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black">{title}</h2>
        <p className="text-base sm:text-lg text-blue-600 font-medium">{tagline}</p>
      </div>

      {/* Image */}
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 mt-auto">
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
