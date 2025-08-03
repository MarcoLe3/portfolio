import Back from '../components/button/Back';
import Contact from '../components/button/Contact';
import Linkedin from '../components/button/Linkedin';
import Resume from '../components/button/Resume';

const Contact_Page = () => {
  return (
    <div>
      <Back />
      <div className="w-full min-h-[60vh] font-medium flex flex-col items-center justify-center text-[#0D1B2A] gap-10 px-4 sm:px-6 md:px-12">
        {/* Name */}
        <h1 className="text-[40px] sm:text-[60px] md:text-[90px] text-center leading-tight">
          Contact Marco Lee
        </h1>

        {/* Buttons container */}
        <div
          className="
            w-full max-w-[800px]
            flex flex-col items-center sm:flex-row sm:items-start
            sm:justify-center
            gap-6 sm:gap-16
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
