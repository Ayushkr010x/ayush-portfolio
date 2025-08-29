import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const sections = ["about","skills","projects","contact"];

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 dark:bg-gray-900 text-white fixed w-full z-50">
      <h1 className="text-xl font-bold">Ayush Kumar</h1>
      <div className={`md:flex ${isOpen ? "flex" : "hidden"} gap-4`}>
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 bg-yellow-400 text-gray-900 px-2 py-1 rounded"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
}
