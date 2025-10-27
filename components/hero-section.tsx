"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== text) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText !== "") {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deletingSpeed);
    } else if (displayedText === text && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (displayedText === "" && isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return <span>{displayedText}</span>;
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-lg tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Shreevatshanka</span>
              <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dhakal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              <TypingText text="Frontend Developer & Creative Coder" />
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Passionate about creating beautiful, responsive, and user-friendly
            web experiences that solve real-world problems. I combine creativity
            with technical knowledge to build intuitive applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(88, 175, 174, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.name}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:bg-primary/10 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side - Visual element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-xs aspect-square">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <Image
                src="/me.jpg"
                alt="Shreevatshanka Dhakal"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
            </div>

            {/* Animated border frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-2xl border border-primary/15"
            ></motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary/15 rounded-lg border border-primary/40 shadow-lg"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-tertiary/10 rounded-lg border border-tertiary/30 shadow-lg"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
