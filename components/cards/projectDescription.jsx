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
      className="p-6 flex flex-col justify-start items-center gap-6 w-full sm:h-[49vh] md:w-[49vw] h-[320px] md:h-[50vh] overflow-hidden"
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
