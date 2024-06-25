import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "@/components/Hero";
import CustomWebsiteDesignProcess from "@/components/CustomWebsiteDesignProcess";
import specialized from "@/data/specialized";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Hero
        title="How to Start"
        description="We specialize in helping you build a team of expert developers."
      />
      <CustomWebsiteDesignProcess />
      <div className="max-w-[90%] md:max-w-[70%] mx-auto py-5 dark:bg-gray-950">
        <div className="max-w-sm mb-6">
          <h1 className="text-primary text-2xl font-bold dark:text-white">
            How to Get Started with CodeX Ethiopia
          </h1>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed.
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-3 mb-12">
          <div className="flex gap-2 max-w-xs items-center">
            <img
              src="/request.png"
              className="bg-yellow-300 h-10"
              alt="request image"
            />
            <div>
              <h1 className="text-primary text-xl font-semibold dark:text-white">
                01. Request
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                Tell us more about your requirements and technical needs.
              </p>
            </div>
          </div>
          <div className="flex gap-2 max-w-xs items-center">
            <img
              src="/interview.png"
              className="bg-yellow-300 h-10"
              alt="interview image"
            />
            <div>
              <h1 className="text-primary text-xl font-semibold dark:text-white">
                02. Interview
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                You interview candidates. Average 2 interviews to hire.
              </p>
            </div>
          </div>
          <div className="flex gap-2 max-w-xs items-center">
            <img
              src="/hire.png"
              className="bg-yellow-300 h-10"
              alt="hire image"
            />
            <div>
              <h1 className="text-primary text-xl font-semibold dark:text-white">
                03. Hire
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                You choose who to hire, and we handle all the paperwork.
              </p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="max-w-sm text-primary text-2xl font-bold dark:text-white">
            Why You Need To Hire Remote Developers{" "}
          </h1>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 font-semibold py-5 text-gray-700 dark:text-gray-400">
            <li>Talent shortage</li>
            <li>Lack of Expertise</li>
            <li>Quick Kick-Off</li>
            <li>Cost Optimization</li>
            <li>Talent Accessibility</li>
            <li>Administrative Hassle</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 w-full dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-[90%] md:max-w-[70%] mx-auto py-5 flex flex-col gap-2 items-center">
          <p className="text-white">How to Start</p>
          <p className="text-primary text-2xl font-bold dark:text-white">
            Easy Process
          </p>
          <p className="max-w-sm text-center text-gray-700 dark:text-gray-400">
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-5">
            <div className="flex flex-col items-center">
              <img src="/ask.png" className="h-16" alt="you ask" />
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                <span className="text-primary text-xl font-semibold dark:text-white">
                  01{" "}
                </span>
                You ask
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/proceed.png" className="h-16" alt="we proceed" />
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                <span className="text-primary text-xl font-semibold dark:text-white">
                  02{" "}
                </span>
                We proceed
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/negotiate.png" className="h-16" alt="negotiate" />
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                <span className="text-primary text-xl font-semibold dark:text-white">
                  03{" "}
                </span>
                Negotiate
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/get.png" className="h-16" alt="you get" />
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                <span className="text-primary text-xl font-semibold dark:text-white">
                  04{" "}
                </span>
                You get
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] md:max-w-[70%] mx-auto py-5 dark:bg-gray-950">
        <p className="text-center text-primary font-medium mb-3 dark:text-white">Specialized</p>
        <p className="text-primary text-center text-2xl font-bold mb-6 dark:text-white">
          Technologies
        </p>
        <Slider {...settings}>
          <div>
            <img src="react_logo.png" alt="react" />
          </div>
          <div>
            <img src="angular_logo.png" alt="angular_logo" />
          </div>
          <div>
            <img src="next.png" alt="next" />
          </div>
          <div>
            <img src="node.png" alt="nodejs" />
          </div>
        </Slider>
        <p className="text-primary font-medium my-3 dark:text-white">Specialized</p>
        <p className="text-primary text-2xl font-bold mb-6 dark:text-white">
          Specialized Staff We Provide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-5">
          {specialized.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 max-w-xs py-3 rounded-sm border-l-8 border-l-yellow-600 shadow dark:border-l-gray-700"
            >
              <img src={item.img} alt={item.title} className="ml-2" />
              <p className="text-gray-700 dark:text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
