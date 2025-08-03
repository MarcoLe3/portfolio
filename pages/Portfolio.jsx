import React from 'react';
import Back from '../components/button/Back';

function Portfolio() {
  return (
    <div className="w-full min-h-screen font-medium text-[#0D1B2A] px-4 pb-40">
      <Back />
      <div className="w-full flex flex-col items-center justify-center pt-40 text-center mt-12">
        {/* Project Title */}
        <h1 className="text-[60px] md:text-[90px] mb-6">Portfolio</h1>

        {/* Hero Image */}
        <img
          src="/image/portf.png"
          alt="Portfolio Screenshot"
          className="max-w-[800px] mb-20 rounded-lg"
        />

        {/* Description */}
        <p className="max-w-[800px] text-[20px] md:text-[28px] leading-relaxed mb-12 text-justify text-left">
          A personal portfolio website built with React and Tailwind CSS, showcasing my experiences,
          projects, and contact information. Designed with responsive UI and custom components to
          highlight professional work in a clean, simple layout.
        </p>

        {/* Sections */}
        <div className="max-w-[800px] w-full space-y-20 text-left">
          {/* Features */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Features</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>Responsive and modern layout</li>
              <li>Dedicated sections for experience, projects, and contact</li>
              <li>Custom navigation buttons for smooth routing</li>
              <li>Easy to extend and customize for future content</li>
              <li>Deployed-ready code using React (optionally Next.js)</li>
            </ul>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>React.js (with functional components)</li>
              <li>Tailwind CSS for utility-first styling</li>
              <li>Next.js (optional for SSR/routing)</li>
              <li>Custom reusable components (Back, Contact, Resume, etc.)</li>
            </ul>
          </section>

          {/* Folder Structure */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Folder Structure (Simplified)</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>
                <code>/components/button</code> - Custom buttons like <code>Back.js</code>,{' '}
                <code>Contact.js</code>
              </li>
              <li>
                <code>/pages</code> - Page files: <code>index.js</code>, <code>Portfolio.js</code>,{' '}
                <code>Contact_Page.js</code>
              </li>
              <li>
                <code>/public</code> - Static assets like images and README
              </li>
            </ul>
          </section>

          {/* Setup */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Getting Started</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>
                Clone the repository:
                <pre className="bg-gray-100 rounded p-2 mt-2">
                  <code>git clone https://github.com/your-username/your-repo-name.git</code>
                </pre>
              </li>
              <li>
                Navigate into the project directory:
                <pre className="bg-gray-100 rounded p-2 mt-2">
                  <code>cd your-repo-name</code>
                </pre>
              </li>
              <li>
                Install dependencies:
                <pre className="bg-gray-100 rounded p-2 mt-2">
                  <code>npm install</code>
                </pre>
              </li>
              <li>
                Start the development server:
                <pre className="bg-gray-100 rounded p-2 mt-2">
                  <code>npm run dev</code>
                </pre>
              </li>
            </ul>
          </section>

          {/* Credit */}
          <section>
            <h2 className="text-[36px] md:text-[48px] mb-4">Credit</h2>
            <ul className="list-disc list-inside text-[20px] md:text-[24px] space-y-2">
              <li>
                <a
                  href="https://www.canva.com/templates/EAGXZiik1q4-white-and-red-illustrative-data-analysis-presentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Canva Template Inspiration
                </a>
              </li>
              <li>
                <a
                  href="https://www.ccsf.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  City College of San Francisco
                </a>
              </li>
              <li>
                <a
                  href="https://dxhub.calpoly.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Cal Poly Digital Transformation Hub
                </a>
              </li>
              <li>
                <a
                  href="https://www.trusteai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Truste AI
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
