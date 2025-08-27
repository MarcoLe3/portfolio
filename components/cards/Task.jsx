import React from 'react'

function Task() {
  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-10 md:p-20 gap-4 md:gap-6">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-left w-full md:w-[800px]">
        Task
      </h1>
      <p className="w-full md:w-[800px] text-[16px] sm:text-[18px] md:text-[20px] font-instrument leading-relaxed text-left">
        I needed to research UI and UX principles to create a clean, simple, and
        user-friendly design. It was important to identify which skills and
        experiences to showcase and how, including key projects, practical work,
        and design abilities, to present a well-rounded and engaging portfolio that
        highlights both my technical expertise and attention to user experience.
      </p>
      {/* <img
        src=""
        alt="Task illustration"
        className="w-full md:w-[800px] rounded-lg object-cover"
      /> */}
    </div>
  )
}

export default Task
