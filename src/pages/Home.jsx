import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </>
  );
}

// import React from "react";

// export default function Home() {
//   return (
//     <div className="text-center mt-20">
//       <h1 className="text-4xl font-bold">Welcome to VedSnaps</h1>
//     </div>
//   );
// }