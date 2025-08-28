import React from 'react'
import Github from '../button/github'

function Result() {
  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-10 md:p-20 gap-4 md:gap-6">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-left w-full md:w-[800px]">
        Result
      </h1>
      <p className="w-full md:w-[800px] text-[16px] sm:text-[18px] md:text-[20px] font-instrument leading-relaxed text-left">
        The project resulted in a clean, easy-to-navigate portfolio that effectively
        showcases my technical skills, design sensibility, and attention to user
        experience. Visitors can quickly explore my projects, see my practical
        experience, and understand the approach I take to UI/UX design. By combining
        thoughtful layout, intuitive navigation, and visually engaging elements, the
        portfolio demonstrates both my ability to build functional web applications
        and my understanding of modern design principles.
      </p>
      <
        Github 
        url = "https://github.com/MarcoLe3/portfolio"
      />
    </div>
  )
}

export default Result
