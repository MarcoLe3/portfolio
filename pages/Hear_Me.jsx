import React from 'react';
import Back from '../components/button/Back';
import Overview from '../components/cards/Overview';
import Task from '../components/cards/Task';
import Action from '../components/cards/Action';
import Result from '../components/cards/Result';
import Github from '../components/button/github'

function HearMe() {
  return (
    <div className="w-full font-medium text-[#0D1B2A] px-4 pb-40">
      <Back />
      <div className="flex flex-col items-center justify-center pt-40 mt-12">
        <h1 className="text-[60px] md:text-[90px] mb-10 text-center">Hear Me</h1>
        <Overview
          text="Hear Me is an accessibility project built to support the hearing-impaired community. Its purpose is to provide real-time transcripts of spoken conversations so that everyone can feel included, informed, and engaged." 
        />
        <Task
          text="The main task was to design and implement a system that could capture spoken language and transform it into accurate, readable transcripts. The solution needed to be reliable, easy to use, and accessible across different settings."
        />
        <Action
          text="I integrated speech recognition tools, developed a clear user interface, and focused on accuracy and speed of transcription. To ensure usability, I tested the system in real conversational environments and refined the design for readability and inclusivity."
         />
        <Result
          text="The project delivered a working transcript tool that allows hearing-impaired users to follow along with conversations in real time. This not only improved accessibility but also fostered greater inclusion in group discussions, classes, and everyday interactions." 
        />
        <
          Github 
          url = "https://github.com/MarcoLe3/captions"
        />
      </div>
    </div>
  );
}

export default React.memo(HearMe);
