"use client"

import { TextAnimate } from "@/components/common/animated-text";
import FeaturedWorkCard from "@/components/common/featured-work-card";
import { Separator } from "@/components/ui/separator";
import { featuredWork } from "@/constants";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const FeaturedWork = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });
    return (
        <section ref={container} className=" relative overflow-clip px-4 md:px-0 pt-20 md:pt-0">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col items-center md:sticky md:top-32 md:pb-32">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 text-sm md:text-base">Work</span>
                </div>
                <TextAnimate animation="blurInUp" as="h2" startOnView className="mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                    Selected Works
                </TextAnimate>

                <p className="opacity-70 max-w-prose mx-auto text-center text-balance text-[15px] md:text-base mt-1 md:mt-2">
                    Explore our portfolio of exceptional web design and custom web apps that drive results for businesses worldwide.
                </p>
            </div>

            <div className=" max-w-6xl mx-auto mt-16 md:mt-0 z-50">
                {featuredWork.map((work, i) => {
                    const targetScale = 1 - ((featuredWork.length - i) * 0.001);
                    return <FeaturedWorkCard key={`p_${i}`} i={i} {...work} progress={scrollYProgress} range={[i * .16, 1]} targetScale={targetScale} />
                })}
            </div>
        </section >
    );
}

export default FeaturedWork;