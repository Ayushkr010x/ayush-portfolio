import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="fixed top-[35%] left-0 flex flex-col">
      <a
        href="https://www.linkedin.com/in/ayush-kumar-440496307"
        target="_blank"
        className="bg-blue-700 text-white px-4 py-2 m-1 rounded-r hover:bg-blue-900 flex items-center gap-2"
      >
        <FaLinkedin size={20} /> LinkedIn
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        className="bg-gray-800 text-white px-4 py-2 m-1 rounded-r hover:bg-gray-900 flex items-center gap-2"
      >
        <FaGithub size={20} /> GitHub
      </a>
      <a
        href="mailto:ayush010x@gmail.com"
        className="bg-red-600 text-white px-4 py-2 m-1 rounded-r hover:bg-red-800 flex items-center gap-2"
      >
        <FaEnvelope size={20} /> Email
      </a>
    </div>
  );
}
