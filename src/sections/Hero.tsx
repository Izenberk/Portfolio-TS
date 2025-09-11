// src/sections/Hero.tsx
import { motion } from "framer-motion"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { AuroraText } from "@/components/magicui/aurora-text"
import { Link as ScrollLink } from "react-scroll"
import type { JSX } from "react"
import Section from "@/components/layout/Section"

export default function Hero(): JSX.Element {
    return (
        <Section id="home" className="relative pt-20 md:pt-28 min-h-[100dvh] overflow-hidden">
        {/* Background grid */}
        <AnimatedGridPattern className="absolute inset-0 -z-10 opacity-30" />

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
            </motion.div>
        </div>
        </Section>
    );
}
