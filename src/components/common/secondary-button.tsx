"use client"

import { motion } from "framer-motion";
import { useState } from "react";

const SecondaryButton = ({ text, fullWidth = false }: { text: string; fullWidth?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false)

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            },
        },
        exit: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            },
        },
    }

    const charVariants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: -30,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
        exit: {
            y: 2,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    }

    const charVariants2 = {
        hidden: {
            y: 30,
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
        exit: {
            y: 30,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    }

    return (
        <motion.button
            className={`rounded-full border hover:border-background flex items-center justify-center cursor-pointer bg-white px-4 md:px-5 h-10 text-sm md:text-[15px] text-foreground hover:ring-2 hover:ring-foreground/15 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] ring-transparent active:scale-[0.98] active:ring-foreground/20 overflow-hidden relative ${fullWidth ? 'w-full' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative inline-block h-[1.6em] overflow-hidden">
                <motion.span
                    className="inline-flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isHovered ? "visible" : "exit"}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={`first-${char}-${index}`}
                            variants={charVariants}
                            className="inline-block"
                            style={{
                                display: char === " " ? "inline" : "inline-block",
                                whiteSpace: "pre"
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>

                <motion.span
                    className="inline-flex absolute inset-0 items-center justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isHovered ? "visible" : "exit"}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={`second-${char}-${index}`}
                            variants={charVariants2}
                            className="inline-block"
                            style={{
                                display: char === " " ? "inline" : "inline-block",
                                whiteSpace: "pre"
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </span>
        </motion.button>
    )
}

export default SecondaryButton