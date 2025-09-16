import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LearnMoreButton from '../button/LearnMore';

export default function ProjectDescription({ 
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
      className="relative p-6 overflow-hidden
      flex flex-col justify-start items-center gap-16 w-[80vw] h-[80vh]"
      style={{ backgroundColor: bgColor }}
    >

      <div className="text-center items-center flex flex-col gap-4 w-[50vw]">
        <h2 
          className="text-[40px] font-semibold" 
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <p 
          className="text-[28px]" 
          style={{ color: taglineColor }}
        >
          {tagline}
        </p>
        <LearnMoreButton url="/Portfolio"/>
      </div>

      {imageUrl && (
          <div className="relative w-[60vw] h-[60vh] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className='object-contain'
            />
          </div>
        )}
    </div>
  );

  return CardContent;
}
