import React from 'react';

function Linkedin() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/image/Linkedin.png" alt="Mail Icon" className="w-10 h-10 mr-2" />
      <a
        href="https://www.linkedin.com/in/marco-lee-1461a0254/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0066CC] hover:underline text-2xl"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Linkedin;