import Back from '../components/button/Back';
import Contact from '../components/button/Contact';
import Linkedin from '../components/button/Linkedin';
import Resume from '../components/button/Resume';

const Contact_Page = () => {
  return (
    <div>
      <Back />
      <div className="w-full h-[60vh] font-medium flex flex-col items-center justify-center text-[#0D1B2A] gap-10">
        {/* Name */}
        <h1 className="text-[90px] text-center">Contact Marco Lee</h1>

        {/* Contact buttons aligned slightly left */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[800px] flex justify-start pl-40 gap-28">
            <Contact />
            <Linkedin />
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Page;

