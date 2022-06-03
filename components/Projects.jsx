/* eslint-disable @next/next/no-img-element */
import React from "react";
import Project from "./Project";
import dolcevita from "../public/assets/projects/dolcevita.png";
import netflix from "../public/assets/projects/netflix.png";
import planethereum from "../public/assets/projects/planethereum.png";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#829550]">
          Projets
        </p>
        <h2 className="py-4">Ce que j&apos;ai fais </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Dolce Vita"
            picture={dolcevita}
            tech="React JS"
            projectUrl="/dolcevita"
          />
          <Project
            title="Netflix"
            picture={netflix}
            tech="React JS"
            projectUrl="/netflix"
          />
          <Project
            title="Planethereum"
            picture={planethereum}
            tech="React JS"
            projectUrl="/planethereum"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
