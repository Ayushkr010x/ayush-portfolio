import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 84 },
    { name: "Next.js", level: 88 },
    { name: "Data Structures", level: 85 },
    { name: "JavaScript", level: 86 },
    { name: "C++", level: 95 },
    { name: "Python", level: 90 },
    { name: "MongoDB", level: 78 },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-yellow-400 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

