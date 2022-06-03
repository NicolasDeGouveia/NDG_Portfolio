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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            porro dolorum dicta eius ipsam maxime rerum, inventore ut? Quisquam
            quas recusandae nam? Consequuntur, adipisci? Non doloribus quaerat
            animi ad corporis.
          </p>
          <p className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            porro dolorum dicta eius ipsam maxime rerum, inventore ut? Quisquam
            quas recusandae nam? Consequuntur, adipisci? Non doloribus quaerat
            animi ad corporis.
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
