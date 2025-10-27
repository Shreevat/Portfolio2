/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiUnity,
  SiTypescript,
  SiWordpress,
  SiFigma,
} from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3, name: "CSS3" },
  { icon: FaJs, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiUnity, name: "Unity" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiFigma, name: "Figma" },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-muted-foreground">Technology</span>{" "}
              <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm familiar with these technologies and tools
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-tertiary rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(88, 175, 174, 0.15)",
                }}
                className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
              >
                <div className="text-4xl text-primary group-hover:scale-110 transition-transform">
                  <skill.icon />
                </div>
                <p className="font-medium text-center text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
