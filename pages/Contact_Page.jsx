import Back from '../components/button/Back';
import Contact from '../components/button/Contact';
import Linkedin from '../components/button/Linkedin';
import Resume from '../components/button/Resume';

const Contact_Page = () => {
  return (
    <div>
      <Back />
      <div
        className="
          w-full min-h-[60vh] font-medium
          flex flex-col items-center justify-center
          text-[#0D1B2A]
          gap-8 sm:gap-10 lg:gap-12
          px-4 sm:px-6 md:px-12
        "
      >
        {/* Name */}
        <h1
          className="
            text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px]
            text-center leading-tight
          "
        >
          Contact Marco Lee
        </h1>

        {/* Buttons container */}
        <div
          className="
            w-full max-w-[400px]
            flex flex-wrap items-center
            justify-start sm:justify-center
            gap-16 sm:gap-8 md:gap-12
            pl-16 sm:pl-0
          "
        >
          <Contact />
          <Linkedin />
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Contact_Page;
