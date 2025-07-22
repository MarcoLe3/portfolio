import React from 'react';

function Contact() {
  const email = "marcole32k3@gmail.com";

  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/image/Mail2.png" alt="Mail Icon" className="w-10 h-10 mr-2" />
      <a
        href={`mailto:${email}`}
        className="text-[#0066CC] hover:underline text-2xl"
      >
        Contact
      </a>
    </div>
  );
}

export default Contact;