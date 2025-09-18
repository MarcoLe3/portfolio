import React from 'react'; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import LearnMoreButton from '../button/LearnMore';

export default function ProjectDescription({ 
  title, 
  tagline, 
  bgColor, 
  bgImageUrl, 
  titleColor, 
  taglineColor,
  bgPos,
  link,
  bgSize
}) {
  return (
    <div
      className="p-6 flex flex-col justify-start items-center gap-6 w-full h-[400px] md:w-[49vw] md:h-[49vh] overflow-hidden"
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
        backgroundSize: bgSize,
        backgroundPosition: bgPos || 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center flex flex-col gap-2 z-10 items-center pt-4">
        <h2 style={{ color: titleColor }} className="text-[30px] font-semibold">
          {title}
        </h2>
        <p style={{ color: taglineColor }} className="text-[24px]">
          {tagline}
        </p>
        <LearnMoreButton url={link} />
      </div>
    </div>
  );
}
