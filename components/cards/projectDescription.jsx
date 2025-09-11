import Link from 'next/link';
import Image from 'next/image';

function ProjectDescription({ 
  title, 
  tagline, 
  imageUrl,
  link, 
  titleColor, 
  taglineColor, 
  bgColor, 
  bgImageUrl
}) {
  const CardContent = (
    <div
      className="relative p-6 cursor-pointer overflow-hidden
      w-[49vw] h-[50vh] 
      flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background image (optional) */}
      {bgImageUrl && (
        <Image
          src={bgImageUrl}
          alt="Background"
          fill
          priority
          className="object-cover opacity-100 pointer-events-none"
        />
      )}

      {/* Title + Tagline */}
      <div className="space-y-3 mb-4 font-instrument text-center relative z-10">
        <h2 
          className="text-[40px] font-semibold" 
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <p 
          className="text-[24px] font-semibold" 
          style={{ color: taglineColor }}
        >
          {tagline}
        </p>
      </div>

      {/* Foreground Image (optional) */}
      {imageUrl && (
        <div className="relative w-full h-[30vh] mt-auto z-10">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );

  return link ? <Link href={link}>{CardContent}</Link> : CardContent;
}

export default ProjectDescription;
