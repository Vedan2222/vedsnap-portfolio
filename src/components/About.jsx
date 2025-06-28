import React from "react";
import aboutImage from "../assets/hero.jpg"; // Add your image to assets folder

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={aboutImage}
            alt="About"
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I'm Vedant, a passionate software engineer and problem solver with
            5+ years of experience crafting robust, scalable, and user-centric
            digital solutions. Whether it's building full-stack web
            applications, optimizing backend systems, or designing seamless user
            experiences — I bring logic, creativity, and precision into every
            line of code.
          </p>
          <p className="text-gray-400 text-sm">
            Based in Mahad, I work with clients across India and
            internationally. Let's collaborate to bring your story to life
            through visuals that matter.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
