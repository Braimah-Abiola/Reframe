"use client";

import ShowcaseCard from "@/components/common/showcase-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const SlidingProjects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    return (
        <div
            ref={container}
            className="overflow-x-hidden w-screen flex flex-col relative mb-20 mt-12"
        >
            <div className="absolute top-0 bottom-0 left-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-r from-background to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-l from-background to-transparent" />

            <motion.div
                style={{ x: x1 }}
                className="flex items-center relative shrink-0 gap-4 -left-[48vw] md:-left-[20vw]"
            >
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#FB3F00" icon="/assets/zel-favicon.png" image="/assets/zel-showcase.png" title="Zel Designs" link="https://www.zeldesigns.com" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#2451F5" icon="/assets/arete-favicon.png" image="/assets/arete-showcase.png" title="Arete Codes" link="https://www.arete.codes" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#877CF3" icon="/assets/lexos-favicon.png" image="/assets/lexos-showcase.png" title="Lexos" link="https://www.golexos.com" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#F3294D" icon="/assets/skillura-favicon.png" image="/assets/skillura-showcase.png" title="Skillura" link="https://www.skillura.com" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#49ADFF" icon="/assets/meetingiq-favicon.png" image="/assets/meetingiq-showcase.png" title="Meeting IQ" link="https://www.meetingiq.com" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#055FFC" icon="/assets/onlytool-favicon.png" image="/assets/onlytool-showcase.png" title="Onlytool" link="https://www.onlytool.ai" />
                </div>
                <div className=" w-[88vw]  md:w-[28rem] h-fit shrink-0">
                    <ShowcaseCard color="#AECE2A" icon="/assets/stakenet-favicon.png" image="/assets/stakenet-showcase.png" title="Stakenet" link="https://www.stakenet.app" />
                </div>
            </motion.div>
        </div>
    );
};

export default SlidingProjects;
