import React from "react";
import { Code2, BarChart3, Database, ShieldCheck } from "lucide-react"; // Optional icon lib

const services = [
  {
    title: "Full Stack Web Development",
    icon: <Code2 size={40} className="text-orange-500" />,
    desc: "Responsive frontend & powerful backend solutions.",
  },
  {
    title: "Data Science and Analysis",
    icon: <BarChart3 size={40} className="text-orange-500" />,
    desc: "Transforming raw data into meaningful insights through dashboards and reports.",
  },
  {
    title: "Database Services",
    icon: <Database size={40} className="text-orange-500" />,
    desc: "  Efficient design, optimization, and administration of secure databases.",
  },
  {
    title: "Cyber Security",
    icon: <ShieldCheck size={40} className="text-orange-500" />,
    desc: "Safeguarding systems with threat detection, penetration testing, and compliance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">My Services</h2>
        <p className="text-gray-400 mb-12">
          Professional visuals, crafted to tell your story
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-neutral-900 rounded-xl shadow-lg hover:shadow-orange-500/30 transition hover:scale-105 duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
