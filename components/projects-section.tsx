/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Rajesh Dai",
    description:
      "A side-scrolling platformer game made in Unity Engine. Worked on level design and game mechanics.",
    tags: ["Unity", "Game Design", "C#"],
    image: "/RajeshDai.gif",
    link: "https://drive.google.com/drive/folders/1Z5YeSFo3bUvMq_q04TkBTkSZz5LCHCAH",
  },
  {
    id: 2,
    title: "Mailo Driver",
    description:
      "A driving game made in Unity Engine, featuring a license trial mode. Worked on map design and physics.",
    tags: ["Unity", "Game Development", "C#"],
    image: "/MailoDriver.gif",
    link: "https://drive.google.com/drive/folders/1GCVMZWSbKnadJGPOg4WWOKrjS6Gyo4oP",
  },
];

export default function ProjectsSection() {
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
              <span className="text-muted-foreground">Some Game</span>{" "}
              <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-tertiary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all shadow-md hover:shadow-xl"
              >
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 shadow-lg"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/25 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
