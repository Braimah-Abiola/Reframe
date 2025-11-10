"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ServicesAccordion } from "@/components/common/services-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const NavigationMobile = () => {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 3 }}
            className=" w-full h-fit top-4 bg-transparent z-[99999] fixed md:hidden px-4">
            <nav className=" w-full bg-white max-h-[calc(100dvh-2rem)] overflow-auto border rounded-lg z-50 relative">
                <div className=" w-full flex items-center justify-between sticky top-0 bg-gradient-to-b from-white via-white/50 to-transparent z-50 pl-2 pr-4 py-2">
                    <Link href="/">
                        <div className=" relative size-10">
                            <Image fill src="/assets/icon.png" className="object-cover" alt="Reframe Labs Logo" />
                        </div>
                    </Link>

                    <div className=" inline-flex items-center gap-3">
                        {pathname !== '/contact' && (
                            <Link href="/contact">
                                <Button>Book A Call</Button>
                            </Link>
                        )}
                        <motion.button
                            initial="hide"
                            animate={open ? "show" : "hide"}
                            onClick={toggleMenu}
                            className="flex flex-col space-y-1.5 h-8 w-8 items-center justify-center relative z-[2147483006]"
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            <motion.span
                                variants={{
                                    hide: {
                                        rotate: 0,
                                    },
                                    show: {
                                        rotate: 45,
                                        y: 4,
                                    },
                                }}
                                className="w-[24px] bg-foreground rounded-full h-[2.4px] block"
                            ></motion.span>
                            <motion.span
                                variants={{
                                    hide: {
                                        rotate: 0,
                                    },
                                    show: {
                                        rotate: -45,
                                        y: -4,
                                    },
                                }}
                                className="w-[24px] bg-foreground rounded-full h-[2.4px] block"
                            ></motion.span>
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden md:hidden px-4"
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.1,
                                        },
                                    },
                                }}
                                className="pt-4 space-y-2.5"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <Link
                                        href="/about"
                                        className="block py-1 text-foreground text-base font-medium tracking-tight transition-colors duration-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        About
                                    </Link>
                                </motion.div>

                                {/* Services Accordion */}

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <ServicesAccordion onItemClick={() => setOpen(false)} />
                                </motion.div>

                                {/* End Services Accordion */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <Link
                                        href="/work"
                                        className="block py-1 text-foreground text-base font-medium tracking-tight transition-colors duration-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        Work
                                    </Link>
                                </motion.div>


                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <Link
                                        href="/pricing"
                                        className="block py-1 text-foreground text-base font-medium tracking-tight transition-colors duration-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        Pricing
                                    </Link>
                                </motion.div>


                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <Link
                                        href="/blog"
                                        className="block py-1 text-foreground text-base font-medium tracking-tight transition-colors duration-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="pt-2 pb-4"
                                >
                                    <Link href="/contact">
                                        <Button variant="secondary" className=" bg-secondary hover:bg-secondary w-full">Contact Us</Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}

export default NavigationMobile;