"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-linear-to-b from-background to-muted/50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Shreevatshanka
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer & Creative Coder crafting beautiful digital
              experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {[
                { name: "Projects", href: "/projects" },
                { name: "Experience", href: "/#experience" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm"
        >
          <p>© 2025 Shreevatshanka Dhakal. All rights reserved.</p>
          <p>Crafted with passion and code</p>
        </motion.div>
      </div>
    </footer>
  );
}
