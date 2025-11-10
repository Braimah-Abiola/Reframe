"use client";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CompanyLogos from "./company-logos";



export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
        color: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-520, 100]),
        springConfig
    );
    return (
        <section className=" relative h-fit w-full">
            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div
                ref={ref}
                className="h-[180vh] pt-20 md:pt-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            >
                <Header />
                <motion.div
                    style={{
                        rotateX,
                        rotateZ,
                        translateY,
                        opacity,
                    }}
                    className=""
                >
                    <motion.div className="flex flex-row-reverse gap-4 md:gap-6 mb-4 md:mb-6">
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row gap-4 md:gap-6 mb-4 md:mb-6">
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateXReverse}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div className="flex flex-row-reverse gap-4 md:gap-6">
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                translate={translateX}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className=" -mt-[20rem] md:-mt-0" />
            <div className=" md:mt-12" />
            <CompanyLogos />
        </section>
    );
};

export const Header = () => {
    return (
        <div className="max-w-6xl relative mx-auto pt-20 md:pt-48 px-4 md:px-0 w-full left-0 top-0 flex flex-col items-center md:items-start text-center md:text-start">
            <div className=" w-fit cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs z-50 relative">
                <Image width={16} height={16} src="/assets/lexos-icon.png" alt="Lexos Logo" />
                <div className=" h-4 ml-2">
                    <Separator orientation="vertical" />
                </div>
                <span className=" ml-2 hidden md:block">Revamped site helps Lexos grow by ~23%</span>
                <span className=" ml-2 text-sm md:hidden">Lexos grows by ~23%</span>
                <ArrowRight className=" size-4 ml-2" />
            </div>
            <h1 className="z-50 relative w-fit mt-4 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter capitalize">Robust & Scalable <br className=" hidden md:block" /> Web Apps for <br className=" hidden md:block" />Ambitious Brands</h1>
            <p className="z-50 relative w-fit opacity-70 md:max-w-prose text-balance mt-2 text-sm md:text-base">
                We specialize in engineering powerful, scalable web applications that serve as the backbone for your business.
            </p>

            <div className=" hidden md:inline-flex items-center gap-3 mt-6 relative z-20">
                <Link href="/contact">
                    <PrimaryButton text="Book Intro Call" />
                </Link>
                <Link href="/work">
                    <SecondaryButton text="Our Work" />
                </Link>
            </div>

            <div className=" md:hidden inline-flex items-center gap-2 mt-4 relative z-20">
                <Link href="/contact">
                    <Button>Book Intro Call</Button>
                </Link>
                <Link href="/work">
                    <Button variant="secondary">Our Work</Button>
                </Link>
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
        color: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <Link
            href={product.link}
            className="block group-hover/product:shadow-2xl group/product"
        >
            <motion.div
                style={{
                    x: translate,
                    backgroundColor: product.color,
                }}
                whileHover={{
                    y: -6,
                }}
                key={product.title}
                className=" w-fit h-fit relative shrink-0 p-2.5 md:p-3 rounded-lg md:rounded-xl"
            >
                <div className=" size-80 md:size-120 relative">
                    <Image
                        src={product.thumbnail}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover rounded-md md:rounded-lg"
                        alt={product.title}
                    />
                </div>
                <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none rounded-lg md:rounded-xl" style={{ backgroundColor: product.color }} />
                <h2 className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white font-medium text-lg font-inter tracking-tight">
                    {product.title}
                </h2>
            </motion.div >
        </Link>
    );
};
