"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  const professionalProjects = PROJECTS.filter(
    (p) => p.category === "Professional"
  );
  const personalProjects = PROJECTS.filter((p) => p.category === "Personal");

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof PROJECTS)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all shadow-md hover:shadow-xl h-full flex flex-col"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-foreground flex-1">
            {project.title}
          </h3>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
              project.category === "Personal"
                ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                : "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
            }`}
          >
            {project.category}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
          {project.description}
        </p>
        <div className="flex gap-3">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaExternalLinkAlt size={14} />
              View Project
            </motion.a>
          )}
          {project.link?.includes("github") && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2.5 rounded-lg hover:bg-primary/20 transition-colors border border-primary/30"
            >
              <FaGithub size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-muted-foreground">All</span>{" "}
            <span className="text-primary">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-tertiary rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of professional and personal projects showcasing my
            skills in web development, game design, and software engineering.
          </p>
        </motion.div>

        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary">Professional</span> Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary">Personal</span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + professionalProjects.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
