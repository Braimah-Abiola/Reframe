"use client"

import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import CompanyLogos from "./company-logos";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const imageOne = "/assets/astrae-showcase.png";
const imageTwo = "/assets/astrae-dashboard.png";
const imageThree = "/assets/astrae-login.png";

const CroHero = () => {
    const images = useMemo(
        () => [imageOne, imageTwo, imageThree].filter((src): src is string => Boolean(src)),
        []
    );
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % images.length);
        }, 3000);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <section className=" w-full min-h-screen relative pt-40 md:pt-48">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col items-center gap-20 max-w-6xl mx-auto mb-12 px-4 md:px-0">
                <div className=" w-full flex flex-col items-center">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/lexos-icon.png" alt="Lexos Logo" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 hidden md:block">Revamped site helps Lexos grow by ~23%</span>
                        <span className=" ml-2 text-sm md:hidden">Lexos grows by ~23%</span>
                        <ArrowRight className=" size-4 ml-2" />
                    </div>
                    <h2 className=" hidden md:block md:max-w-4xl mt-4 md:mt-6 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                        Boost Your Revenue with Expert Conversion Rate Optimization Services
                    </h2>
                    <h2 className=" md:hidden md:max-w-4xl mt-4 md:mt-6 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                        Boost Your Revenue with Expert CRO Services
                    </h2>
                    <p className="opacity-70 max-w-2xl text-balance text-center mt-2 text-sm md:text-base">
                        Turn your site into a conversion engine. We combine UX design, AI-powered A/B testing, and behavioral analytics to reduce bounce rates, optimize CTAs, and increase sales.
                    </p>
                    <div className=" hidden md:inline-flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                        <Link href="/contact">
                            <PrimaryButton text="Boost My Conversion Now" />
                        </Link>
                        <Link href="/work">
                            <SecondaryButton text="Explore all projects" />
                        </Link>
                    </div>

                    <div className=" md:hidden inline-flex items-center gap-2 mt-4">
                        <Link href="/contact">
                            <Button>Book Intro Call</Button>
                        </Link>
                        <Link href="/work">
                            <Button variant="secondary">Our Work</Button>
                        </Link>
                    </div>

                    <div className="p-2 md:p-3 w-full bg-[#0065FC] max-w-6xl mx-auto rounded-lg md:rounded-xl mt-12 relative z-50 group cursor-pointer">
                        <div className="w-full relative h-auto aspect-video">
                            {images.map((src, i) => (
                                <Image
                                    key={src + i}
                                    src={src}
                                    alt="Astrae showcase"
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className={`object-cover object-top rounded-md md:rounded-lg transition-opacity duration-700 ease-in-out ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                                    priority={i === 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CompanyLogos />
        </section>
    );
};

export default CroHero;