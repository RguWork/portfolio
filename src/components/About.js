import React from "react";

export default function About() {
  return (
    <section id="about" className="scroll-margin-top">
      <div className="container mx-auto flex px-40 py-20 md:flex-row mb-20 flex-col items-center">
        <div className="lg:flew_grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-quattrocento sm:text-5xl text-4xl mb-2 text-white">
            My name is Richard Gu.
          </h1>
          <h2 className="font-quattrocento sm:text-2xl text-xl mb-5 text-white">
            Computer Programmer and AI Enthusiast
          </h2>
          <div className="font-mulish text-sm mb-8 leading-relaxed">
            <p className="mb-4">
              Hello! I’m Richard, an aspiring Software Engineer with a deep
              passion for machine learning and full-stack development.
              Currently, I’m a rising junior at MIT, majoring in Computer
              Science and AI.
            </p>
            <p className="mb-4">
              My goal is to contribute meaningfully to the evolving field of
              artificial intelligence. As such, I have been learning much about
              convolutional neural networking, generative AI, and natural
              language processing.
            </p>
            <p>
              In my free time, I like to enjoy (and sometimes compose) music,
              take pictures, and spend time with friends.
            </p>
          </div>
          <div className="font-mulish flex justify-center">
            <a
              href="#research"
              className="mr-4 hover:text-white transform transition-transform duration-300 hover:scale-110 text-decoration-line: underline"
            >
              My Research
            </a>
            <a
              href="#projects"
              className="mr-4 hover:text-white transform transition-transform duration-300 hover:scale-110 text-decoration-line: underline"
            >
              My Projects
            </a>
            <a
              href="#miscellaneous"
              className="hover:text-white transform transition-transform duration-300 hover:scale-110 text-decoration-line: underline"
            >
              Other Stuff
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center w-50 rounded-xl"
            src="images/headshot.JPG"
            alt="richard headshot"
          />
        </div>
      </div>
    </section>
  );
}
