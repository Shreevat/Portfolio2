"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { EXPERIENCE } from "@/lib/constants";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-muted/30 to-background">
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
              <span className="text-muted-foreground">Professional</span>{" "}
              <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-tertiary rounded-full"></div>
          </div>

          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                  className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="text-left space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    className="text-primary mt-1"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border px-6 py-4 bg-muted/30 space-y-4"
                  >
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, j) => (
                          <li
                            key={j}
                            className="text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/25 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
