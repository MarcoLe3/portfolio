import React from 'react';
import Back from '../components/button/Back';
import Overview from '../components/cards/Overview';
import Task from '../components/cards/Task';
import Action from '../components/cards/Action';
import Result from '../components/cards/Result';
import Github from '../components/button/github';

function Portfolio() {
  return (
    <div className="w-full font-medium text-[#0D1B2A] px-4 pb-40">
      <Back />
      <div className="flex flex-col items-center justify-center pt-40 mt-12">
        <h1 className="text-[60px] md:text-[90px] mb-10 text-center">Portfolio</h1>
        <Overview text="I wanted to create a project that highlights my skills while keeping the
        design clean, intuitive, and easy to navigate. My goal was to ensure that
        anyone, whether they're a recruiter, fellow developer, or casual visitor,
        can quickly understand my work without feeling overwhelmed."/>

        <Task text="I needed to research UI and UX principles to create a clean, simple, and
        user-friendly design. It was important to identify which skills and
        experiences to showcase and how, including key projects, practical work,
        and design abilities, to present a well-rounded and engaging portfolio that
        highlights both my technical expertise and attention to user experience."/>

        <Action text="To build this project, I first researched modern UI and UX principles to
        ensure a clean, intuitive design. I sketched wireframes and created mockups
        using Figma, drawing inspiration from minimalist interfaces like Apple’s,
        while adding my own unique touches. I selected images and visual elements
        carefully to complement the layout without overwhelming it. I then
        implemented the design using React and Tailwind CSS, ensuring responsive
        layouts across different devices. Finally, I reviewed my work to make sure
        the portfolio clearly showcased my projects, technical skills, and
        attention to user experience."/>

        <Result text="The project resulted in a clean, easy-to-navigate portfolio that effectively
        showcases my technical skills, design sensibility, and attention to user
        experience. Visitors can quickly explore my projects, see my practical
        experience, and understand the approach I take to UI/UX design. By combining
        thoughtful layout, intuitive navigation, and visually engaging elements, the
        portfolio demonstrates both my ability to build functional web applications
        and my understanding of modern design principles."/>

        <
          Github 
          url = "https://github.com/MarcoLe3/portfolio"
        />
      </div>
    </div>
  );
}

export default Portfolio;
