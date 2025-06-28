import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Ved_ant</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-m font-medium text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-orange-400 transition font-bold px-1 flex justify-between items-center"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4 text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block hover:text-orange-400 transition"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block bg-orange-500 text-center py-2 rounded-full hover:bg-orange-600"
          >
            Admin
          </Link>
        </div>
      )}
    </header>
  );
}
