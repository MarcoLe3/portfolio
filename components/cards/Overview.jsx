import React from 'react'

function Overview({text}) {
  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-10 md:p-20 gap-4 md:gap-6">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-left w-full md:w-[800px]">
        Overview
      </h1>
      <p className="w-full md:w-[800px] text-[16px] sm:text-[18px] md:text-[20px] font-instrument leading-relaxed text-left">
        {text}
      </p>
    </div>
  )
}

export default React.memo(Overview)
