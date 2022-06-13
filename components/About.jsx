/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="about" className="w-full flex items-center py-8">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div data-aos="fade-up" className="col-span-2">
          <p className="text-xl text-[#829550] uppercase tracking-widest">
            About
          </p>
          <h2 className="py-4">Qui suis-je</h2>
          <p className="text-sm text-justify px-2 lg:px-0 md:px-0">
            Je m&apos;appelle Nicolas, anciennement technicien/administrateur
            système et réseau pendant plus de 5 ans, j&apos;ai depuis toujours
            été passionné par tout ce qui touche au domaine de
            l&apos;informatique, mais plus particulièrement par le développement
            web.
          </p>
          <p className="text-sm text-justify py-4 px-2 lg:px-0 md:px-0">
            C&apos;est pourquoi, après avoir commencé mon apprentissage en
            autodidacte, j&apos;ai décidé de me professionnaliser en me formant
            avec l&apos;école O&apos;Clock. Cette formation me permet
            aujourd&apos;hui de posséder un profil Fullstack en JavaScript. Mon
            attrait pour la création de design dynamique orienté Ui/Ux m&apos;a
            poussé à me spécialiser côté Front-End avec la librairie React Js.
          </p>
          <p className="text-sm text-justify px-2 lg:px-0 md:px-0">
            Je réalise aujourd&apos;hui divers projets que vous pourrez voir
            plus bas, en utilisant les technologies Front récentes comme React
            JS, Tailwind CSS, SASS, Next Js.. Mais également Node JS, Firebase
            pour la gestion du Back-End.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
