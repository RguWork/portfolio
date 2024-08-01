import { projects } from "../data";
import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-dark-gray body-font z-10"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <h1 className="sm:text-4xl mx-4 text-3xl font-medium title-font text-white">
              Projects
            </h1>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are some personal projects I have worked on.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative h-60">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full bg-gray-900 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-sm lg:text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-xs lg:text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
