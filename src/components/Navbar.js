import React from "react";

export default function Navbar() {
  return (
    <header className="bg-darker-gray md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <div className="flex flex-row md:flex-row items-center w-full">
          <a
            href="#about"
            className="ml-4 mr-5 md:mr-0 md:ml-20 text-md md:text-xl hover:text-white transform transition-transform duration-300 hover:scale-110" //test if md:ml-20 is appropriate here
          >
            About Me
          </a>
          <nav className="flex flex-wrap items-center text-base justify-center md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
            <a
              href="#research"
              className="mr-5 hover:text-white transform transition-transform duration-300 hover:scale-110"
            >
              Research
            </a>
            <a
              href="#projects"
              className="mr-5 hover:text-white transform transition-transform duration-300 hover:scale-110"
            >
              Projects
            </a>
            <a
              href="#miscellaneous"
              className="mr-5 hover:text-white transform transition-transform duration-300 hover:scale-110"
            >
              Misc
            </a>
          </nav>
          <div className="flex flex-wrap flex-row space-x-1 lg:space-x-4 filter invert ml-auto mr-4 md:mr-10">
            <a
              href="https://github.com/RguWork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="transform transition-transform duration-300 hover:scale-110"
                src="images/github.png"
                alt="github icon"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
            <a
              className="transform transition-transform duration-300 hover:scale-110"
              href="https://www.linkedin.com/in/gur1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/linkedin.png"
                alt="linkedin icon"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
            <a
              className="transform transition-transform duration-300 hover:scale-110"
              href="mailto:gur1@mit.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/email.png"
                alt="email icon"
                style={{ width: "35px", height: "35px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
