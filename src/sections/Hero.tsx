// src/sections/Hero.tsx
import { motion } from "framer-motion"
import { AuroraText } from "@/components/magicui/aurora-text"
import { Link as ScrollLink } from "react-scroll"
import type { JSX } from "react"
import Section from "@/components/layout/Section"

export default function Hero(): JSX.Element {
    return (
        <Section id="home" className="relative pt-20 md:pt-28 min-h-[100dvh] overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 pt-4 justify-center items-center">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <span className="text-foreground/80 text-sm py-2 flex justify-center">
                BUILDING END-TO-END WEB SOLUTIONS
            </span>

            <motion.h1
                className="text-3xl md:text-5xl text-center font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Transforming Ideas into <br /> Seamless{" "}
                <AuroraText colors={["#18337D", "#2C5DE3"]}>
                Full-Stack Experiences
                </AuroraText>
            </motion.h1>

            <motion.p
                className="mt-4 text-foreground/80 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Hi! I'm Korn, a Full Stack Developer crafting fast, responsive UIs
                and robust, scalable backends.
            </motion.p>

            <motion.div
            className="mt-6 flex gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            >
                <motion.div whileHover={{ scale: 1.05 }}>
                    <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={800}
                    offset={-80} // header height offset
                    spy={true}
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground cursor-pointer"
                    >
                    View Projects
                    </ScrollLink>
                </motion.div>

                <motion.a
                    href="/Korn-aphichit_CV.pdf"
                    download="Korn-aphichit_CV.pdf"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-5 py-3 rounded-lg border border-border text-white/80 hover:bg-white/10 transition"
                >
                    Download CV
                </motion.a>
            </motion.div>

            <motion.div
            className="mt-6 flex gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            >

            <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* JavaScript */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">JavaScript</span>
            </div>

            {/* React */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">React</span>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">Node.js</span>
            </div>

            {/* Express */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express"
                className="h-10 w-10 invert dark:invert-0"
                />
                <span className="mt-2 text-foreground/70">Express</span>
            </div>

            {/* MongoDB */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">MongoDB</span>
            </div>

            {/* Tailwind */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">Tailwind</span>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">Git</span>
            </div>

            {/* Docker */}
            <div className="flex flex-col items-center text-center text-sm">
                <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
                className="h-10 w-10"
                />
                <span className="mt-2 text-foreground/70">Docker</span>
            </div>
            </div>
            </motion.div>

            </motion.div>
        </div>
        </Section>
    );
}
