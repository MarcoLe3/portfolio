import React from 'react'
import Back from '../components/button/Back';

function Portfolio() {
  return (
    <div>
        <Back/>
        <div className="w-full h-[60vh] font-medium flex flex-col items-center justify-center text-[#0D1B2A] animate-image-reveal">
            {/* Name */}
            <h1 className="text-[90px]">PORTFOLIO</h1>

        </div>
    </div>

  )
}

export default Portfolio