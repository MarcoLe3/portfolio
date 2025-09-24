import React from 'react';
import Image from 'next/image';
import LearnMoreButton from '../button/LearnMore';

function ProjectDescription({
  title,
  tagline,
  bgColor,
  titleColor,
  taglineColor,
  link,
  bgImageUrl,
  top_pic,
  width_pic,
  height_pic
}) {
  return (
    <div
      className="p-6 flex flex-col justify-start items-center gap-6 w-full sm:h-[49vh] md:w-[49vw] h-[320px] lg:h-[50vh] md:h-[32vh] overflow-hidden relative"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={bgImageUrl}
        loading="lazy"
        quality={100}
        layout="responsive"
        width={width_pic}
        height={height_pic}
        style={{ zIndex: 0, position: 'absolute', top: `${top_pic}px` }}
      />
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

export default React.memo(ProjectDescription);
