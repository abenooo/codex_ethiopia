import React from "react";
import { useState } from "react";

// Importing images
import image1 from "../assets/Process/image1.gif";
import image2 from "../assets/Process/image2.gif";
import image3 from "../assets/Process/image3.gif";
import image4 from "../assets/Process/image4.gif";
import image5 from "../assets/Process/image5.gif";
import image6 from "../assets/Process/image6.png";

const steps = [
  {
    id: 1,
    title: "Web Strategy",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Strategy</h3>
        <p>Every web design project starts with a strategy. Using deep-dive research and in-depth insights, we map your path to digital growth.</p>
        <p>In this phase, we:</p>
        <ul className="list-disc list-inside">
          <li>Identify your target audience</li>
          <li>Discover current user pain points</li>
          <li>Define your unique value propositions (UVPs)</li>
          <li>Outline your key performance indicators (KPIs)</li>
        </ul>
      </div>
    ),
    image: image1,
    alt: "CEO discussing web strategy"
  },
  {
    id: 2,
    title: "Planning & Information Architecture",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning & Information Architecture</h3>
        <p>By combining proven techniques and bespoke analysis, we craft a tailor-made solution for your web design project. In this stage, we prioritize user journeys and conversion funnel optimization.</p>
        <p>We do this by:</p>
        <ul className="list-disc list-inside">
          <li>Developing a user-flow and sitemap</li>
          <li>Wireframing to create a seamless conversion funnel</li>
          <li>Adding on-brand messaging throughout your structure</li>
        </ul>
      </div>
    ),
    image: image2,
    alt: "CEO planning information architecture"
  },
  {
    id: 3,
    title: "Professional Design",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Design</h3>
        <p>Our professional web design team now work to bring your custom website to life, making sure it makes an instant and lasting impression on your target audience.</p>
        <p>In this stage, we:</p>
        <ul className="list-disc list-inside">
          <li>Strategically add design features to support your user journey</li>
          <li>Implement high-quality images</li>
          <li>Create custom animations and micro-interactions</li>
          <li>Make sure your design features are accessible</li>
        </ul>
      </div>
    ),
    image: image3,
    alt: "CEO reviewing professional design"
  },
  {
    id: 4,
    title: "Responsive Development",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsive Development</h3>
        <p>Our custom web design process prioritizes responsive design. This way, we ensure your website can be viewed across devices and screen sizes to boost accessibility, usability and SEO.</p>
        <p>To ensure your website reaches and satisfies every user, we:</p>
        <ul className="list-disc list-inside">
          <li>Collect touchpoint and user-channel data</li>
          <li>Create a flexible user interface (UI) from your wireframes</li>
          <li>Test and approve your design across devices and layouts</li>
        </ul>
      </div>
    ),
    image: image4,
    alt: "CEO overseeing responsive development"
  },
  {
    id: 5,
    title: "Quality Assurance (QA)",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance (QA)</h3>
        <p>Our custom websites are created with measurable results in mind. To achieve this, we make sure every aspect of your website is tested to a T, providing the best possible user experience (UX).</p>
        <p>Our QA process includes:</p>
        <ul className="list-disc list-inside">
          <li>Total transparency and consistent communication with you throughout</li>
          <li>Meticulous testing to catch any coding or design errors</li>
          <li>The possibility for client feedback</li>
          <li>Tried-and-tested tools to delve beyond the eye test</li>
        </ul>
      </div>
    ),
    image: image5,
    alt: "CEO ensuring quality assurance"
  },
  {
    id: 6,
    title: "Launch & Optimization",
    content: (
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Optimization</h3>
        <p>A website’s performance is only as strong as the support to keep it going. That’s why at Digital Silk, we offer ongoing maintenance and support services to test, upgrade and optimize your website to keep up with evolving trends.</p>
        <p>This ongoing step of our custom web design process includes:</p>
        <ul className="list-disc list-inside">
          <li>A strict post-launch website protocol</li>
          <li>Daily, weekly and monthly maintenance and optimization tasks</li>
          <li>Digital marketing and supporting solutions to grow your business online</li>
        </ul>
      </div>
    ),
    image: image6,
    alt: "CEO discussing launch and optimization"
  }
];

const CustomWebsiteDesignProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Our Custom Website Design Process</h1>
      <p className="text-center mb-12">
        We use proprietary processes and industry standard methodologies to design and develop high-performance digital experiences.
      </p>
      <div className="flex justify-center space-x-8 mb-12 overflow-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-center cursor-pointer ${activeStep === step.id ? "text-blue-500" : "text-gray-600"}`}
            onClick={() => setActiveStep(step.id)}
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full ${activeStep === step.id ? "bg-blue-100" : "bg-gray-100"}`}>
              <img src={step.image} alt={step.alt} className="w-8 h-8" />
            </div>
            <span className="mt-2 font-semibold text-center">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-12">
        {steps.map((step) => (
          step.id === activeStep && (
            <React.Fragment key={step.id}>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {step.content}
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center h-full">
                <img src={step.image} alt={step.alt} className="w-full h-full object-contain" />
              </div>
            </React.Fragment>
          )
        ))}
      </div>
    </div>
  );
};

export default CustomWebsiteDesignProcess;
