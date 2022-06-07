/* eslint-disable @next/next/no-img-element */
import React from "react";
import computer from "../public/assets/computer.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl text-[#829550] uppercase tracking-widest">
            About
          </p>
          <h2 className="py-4">Qui suis-je</h2>
          <p className="text-sm">
            Je m&apos;appelle Nicolas De Gouveia, anciennement
            technicien/administrateur système et réseau pendant plus de 5 ans,
            j&apos;ai depuis toujours été passionné par tout ce qui touche au
            domaine de l&apos;informatique, mais plus particulièrement par le
            développement web.
          </p>
          <p className="text-sm py-4">
            C&apos;est pourquoi, après avoir commencé mon apprentissage en
            autodidacte, j&apos;ai décidé de me professionnaliser en me formant
            avec l&apos;école O&apos;Clock. Cette formation me permet
            aujourd&apos;hui de posséder un profil Fullstack en JavaScript. Mon
            attrait pour la création de design dynamique orienté Ui/Ux m&apos;a
            poussé à me spécialiser côté Front-End avec la librairie React Js.
          </p>
          <p className="text-sm">
            Je réalise aujourd&apos;hui divers projets que vous pourrez voir
            plus bas, en utilisant les technologies Front récentes comme React
            JS, Tailwind CSS, SASS, Next Js.. Mais également Node JS, Firebase
            pour la gestion du Back-End.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
