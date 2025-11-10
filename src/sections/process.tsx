"use client"

import PrimaryButton from "@/components/common/primary-button";
import ProcessCard from "@/components/common/process-card.tsx";
import SecondaryButton from "@/components/common/secondary-button";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type IconName =
    | "TextSearch"
    | "DraftingCompass"
    | "Palette"
    | "Users"
    | "Smile"
    | "Rocket"
    | "Construction"
    | "GlobeLock"
    | "TextSearch"
    | "Target"
    | "Globe"
    | "ShieldCheck"
    | "TrendingUp"
    | "Funnel"
    | "WandSparkles"
    | "TextSearch"
    | "Cpu"
    | "PanelsTopLeft"
    | "Gem"
    | "HeartHandshake"
    | "Rocket";

interface ProcessStep {
    icon: IconName;
    title: string;
    description: string;
}

interface ProcessProps {
    processSteps: ProcessStep[];
    headingOne: string;
    headingTwo: string;
    description: string;
}

const Process = ({ processSteps, headingOne, headingTwo, description }: ProcessProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-84%"]);

    return (
        <section
            id="design-process"
            ref={targetRef}
            className="relative h-[320dvh] w-screen overflow-x-clip">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className="sticky h-[100dvh] justify-center top-0 flex flex-col">
                <div className=" flex flex-col md:items-center overflow-hidden max-w-6xl mx-auto">
                    <div className=" w-screen md:w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-0 md:gap-20">
                        <div className=" md:w-fit md:shrink-0 flex flex-col items-center md:items-start">
                            <div className=" w-fit cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                                <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                                <div className=" h-4 ml-2">
                                    <Separator orientation="vertical" />
                                </div>
                                <span className=" ml-2 text-sm md:text-base">Step-by-Step Process</span>
                            </div>
                            <h2 className=" mt-2 font-montserrat md:text-wrap w-screen md:w-fit text-center md:text-start text-balance px-4 md:px-0 font-semibold text-4xl md:text-5xl tracking-tighter capitalize">
                                Our Proven {headingOne} <br className=" hidden md:block" /> {headingTwo} Process
                            </h2>
                        </div>
                        <div className=" md:px-20 md:pt-20 flex flex-col items-center md:items-start">
                            <p className=" line-clamp-3 md:line-clamp-none opacity-70 md:max-w-prose text-center md:text-start mt-2 text-balance text-sm md:text-base">
                                {description}
                            </p>
                            <div className=" inline-flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                                <Link href="/contact">
                                    <PrimaryButton text="Book Intro Call" />
                                </Link>
                                <Link href="/work">
                                    <SecondaryButton text="Our Work" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" relative w-screen md:w-full mt-10 md:pr-20">
                        <div className=" absolute left-0 inset-y-0 w-[10%] md:w-[20%] bg-gradient-to-r from-background to-transparent z-20" />
                        <div className=" absolute right-0 inset-y-0 w-[10%] md:w-[20%] bg-gradient-to-l from-background to-transparent z-20" />

                        <motion.div style={{ x }} className="flex md:flex-nowrap shrink-0 w-fit gap-4 md:gap-6 pl-4 md:pl-0">
                            {processSteps.map((process, index) => {
                                const isLast = index === processSteps.length - 1;
                                const IconComponent = LucideIcons[process.icon] as LucideIcons.LucideIcon;
                                return (
                                    <ProcessCard
                                        title={process.title}
                                        icon={IconComponent}
                                        description={process.description}
                                        index={index}
                                        isLast={isLast}
                                        key={index}
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Process;