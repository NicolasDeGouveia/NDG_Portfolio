import React from "react";
import Image from "next/image";
import Link from "next/link";
import wildImg from "../public/assets/projects/intothewild.png";
import { BiRadioCircle } from "react-icons/bi";

const netflix = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-stone-500/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={wildImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2 z-10 ">
          <h2 className="text-white pb-2 lg:text-4xl">Into The Wild</h2>
          <h3 className="text-white">React JS / CSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 p-2 pt-8">
        <div className="col-span-4">
          <p className="text-[#829550] text-xl uppercase tracking-widest">
            Projet
          </p>
          <h2 className="py-2">Aperçu</h2>
          <p className="pb-4">
            Ce projet est la combinaison de ma passion pour l&apos;écologie et
            ma volonté d&apos;utiliser le parallax effect. Il s&apos;agit ici
            d&apos;une page illustrant ce qu&apos;il est possible de faire avec
            l&apos;effet parallax. Ce projet a été realisé avec React JS et CSS
            pour le design.
          </p>
          <a
            href="https://nicolasdegouveia.github.io/Parallax-Project-Page/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-6">Demo</button>
          </a>
          <a
            href="https://github.com/NicolasDeGouveia/Parallax-Project-Page"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl shadow-gray-400 my-4 text-center">
          <div className="p-2">
            <h4>Technologies</h4>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" flex items-center py-2 text-gray-600">
                <BiRadioCircle /> React JS
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <BiRadioCircle /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="uppercase underline cursor-pointer hover:text-[#829550]">
            Retour
          </p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
