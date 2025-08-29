import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Job Scheduling System",
      description: "College project implementing Data Structure basics for scheduling jobs.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-800 dark:bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.name}
            className="bg-gray-700 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">{proj.name}</h3>
            <p className="mb-2">{proj.description}</p>
            {proj.link && <a href={proj.link} className="text-yellow-400 hover:underline"></a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
