import React from "react";
import Image from "next/image";
import Link from "next/link";
import netflixImg from "../public/assets/projects/netflix.png";
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
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2 z-10 ">
          <h2 className="text-white pb-2 lg:text-4xl">Netflix</h2>
          <h3 className="text-white">React JS / Tailwind CSS / FireBase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 p-2 pt-8">
        <div className="col-span-4">
          <p className="text-[#829550] text-xl uppercase tracking-widest">
            Projet
          </p>
          <h2 className="py-2">Aperçu</h2>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, voluptatem quos laboriosam quasi hic illum odio unde
            asperiores ex repellendus enim temporibus aliquid architecto beatae
            consequuntur autem cum ipsum eaque?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet eaque qui sed voluptatum amet,
            quas id explicabo sequi vel voluptatibus molestias necessitatibus
            aspernatur recusandae a alias dolorum ex debitis ipsa!
          </p>
          <a
            href="https://netflix-react-tailwind.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-6">Demo</button>
          </a>
          <a
            href="https://github.com/NicolasDeGouveia/Netflix"
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
                <BiRadioCircle /> JavaScript
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <BiRadioCircle /> Tailwind CSS
              </p>
              <p className=" flex items-center py-2 text-gray-600">
                <BiRadioCircle /> FireBase
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
