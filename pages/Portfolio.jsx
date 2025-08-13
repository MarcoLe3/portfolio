import React from 'react';
import Back from '../components/button/Back';
import Overview from '../components/cards/Overview';
import Task from '../components/cards/Task';

function Portfolio() {
  return (
    <div className="w-full min-h-screen font-medium text-[#0D1B2A] px-4 pb-40">
      <Back />
      <div className="flex flex-col items-center justify-center pt-40 mt-12">
        <h1 className="text-[60px] md:text-[90px] mb-10 text-center">Portfolio</h1>
        <Overview />
        <Task />
      </div>
    </div>
  );
}

export default Portfolio;
