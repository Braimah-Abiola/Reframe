"use client";

import { mountAnim, pageContentAnimation, pageTransitionBackground, pageTransitionHeight } from "@/anim/page-transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionKey, setTransitionKey] = useState(0);

    useEffect(() => {
        setIsTransitioning(true);
        setTransitionKey(prev => prev + 1);

        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isTransitioning && (
                    <motion.div
                        key={`page-transition-${transitionKey}`}
                        className="fixed top-0 left-0 w-full h-screen z-[2147483009] pointer-events-none"
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.2, delay: 0.8 }
                        }}
                    >
                        {[...Array(5)].map((_, index) => (
                            <motion.div
                                key={`stair-${index}`}
                                variants={pageTransitionHeight}
                                {...mountAnim}
                                custom={index}
                                className="absolute top-0 h-full bg-primary"
                                style={{
                                    left: `${index * 20}vw`,
                                    transformOrigin: 'right',
                                    willChange: 'width',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden'
                                }}
                            />
                        ))}

                        <motion.div
                            variants={pageTransitionBackground}
                            {...mountAnim}
                            className="absolute top-0 left-0 w-full h-full bg-transparent -z-10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                key={pathname}
                variants={pageContentAnimation}
                {...mountAnim}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </>
    );
}