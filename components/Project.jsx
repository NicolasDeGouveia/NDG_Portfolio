import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ title, picture, projectUrl, tech }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#ecf0f3] to-[#829550]">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={picture}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="py-2 text-center text-white">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Plus d&apos;info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
