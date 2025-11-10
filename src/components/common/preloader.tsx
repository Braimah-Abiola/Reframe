'use client'

import { logoAnimation, width } from '@/anim/preloader'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'

interface PreloaderProps {
    onComplete?: () => void
    duration?: number
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true)

    const stairs = useMemo(() => [...Array(5)], [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onComplete) {
                setTimeout(onComplete, 1200)
            }
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onComplete])

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[99999] h-[100dvh] overflow-hidden pointer-events-none cursor-wait"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    {stairs.map((_, index) => (
                        <motion.div
                            key={index}
                            variants={width}
                            custom={index}
                            className="absolute top-0 h-[100dvh] bg-primary"
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
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            willChange: 'opacity',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                        }}
                    >
                        <motion.div
                            variants={logoAnimation}
                            className="relative size-14"
                            style={{
                                willChange: 'opacity, transform',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'translateZ(0)',
                                WebkitTransform: 'translateZ(0)',
                            }}
                        >
                            <Image
                                src="/assets/icon.png"
                                alt="Reframe Labs Logo"
                                fill
                                className="object-cover border border-white/50 rounded-xl"
                                priority
                                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                                style={{
                                    transform: 'translateZ(0)',
                                    WebkitTransform: 'translateZ(0)',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
