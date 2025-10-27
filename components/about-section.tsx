/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-background to-muted/30">
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
              <span className="text-muted-foreground">About</span>{" "}
              <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-tertiary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary">
                Turning ideas into interactive experiences
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm passionate about creating engaging digital experiences that
                solve real problems. Currently focusing on developing my skills
                as a web developer, I combine creativity with technical
                knowledge to build intuitive and responsive applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My journey in development has equipped me with a diverse skill
                set and a problem-solving mindset that I bring to every project
                I work on. I'm particularly interested in frontend technologies
                and creating seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-linear-to-br from-primary/20 to-tertiary/10 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Problem Solver",
                      desc: "Tackling complex challenges with creative solutions",
                    },
                    {
                      num: "02",
                      title: "Quick Learner",
                      desc: "Always exploring new technologies and frameworks",
                    },
                    {
                      num: "03",
                      title: "Detail Oriented",
                      desc: "Crafting pixel-perfect, polished experiences",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="size-12 rounded-lg bg-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/40 transition-colors">
                        <span className="text-primary font-bold">
                          {item.num}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
