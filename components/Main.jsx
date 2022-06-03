import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-gray-700">
            Hello, je suis <span className="text-[#829550]">Nicolas</span>
          </h1>
          <h2 className="py-3 text-gray-700">Développeur Front-End</h2>
          <p className="max-w-[70%] m-auto py-4">
            Je développe des sites web en CSS, HTML, JavaScript et React.
            L&apos;optimisation au centre des projets: Référencement (SEO),
            Responsive Design, accéssibilité.
          </p>
          <div className="flex justify-center items-center max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg ml-4 shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/nicolas-de-gouveia-8716131b4/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg ml-4 shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://github.com/NicolasDeGouveia"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg ml-4 shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:nicolas.degouveia@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
