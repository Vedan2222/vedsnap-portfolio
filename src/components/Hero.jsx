import React from "react";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col md:flex-row bg-black text-white"
    >
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 md:py-0 bg-black relative z-10">
        <div className="max-w-xl animate-fade-in-up space-y-6">
          {/* Accent Line + Icon */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-orange-500 rounded"></div>
            <span className="text-orange-500 tracking-widest uppercase text-sm font-semibold">
              Software Artisan
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            Crafting <span className="text-orange-500">Experiences</span>,<br />
            Behind <span className="text-orange-500">Screen</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            A journey through innovation – crafting intelligent code, immersive experiences, and future-ready platforms
          </p>

          <div className="space-x-4">
            <a
              href="#portfolio"
              className="bg-orange-500/90 backdrop-blur-lg text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border border-white/50 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 shadow"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <img
          src={heroImage}
          alt="Photographer Hero"
          className="w-full h-full object-cover grayscale-[20%] brightness-90 contrast-110"
        />
        {/* Optional: Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
      </div>
    </section>
  );
}
