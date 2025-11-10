"use client"

import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import CompanyLogos from "./company-logos";


const imageOne = "/assets/react-website.png";
const imageTwo = "/assets/nextjs-website.png";

const PlatformMigrationHero = () => {
    const images = useMemo(
        () => [imageOne, imageTwo].filter((src): src is string => Boolean(src)),
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

            <div className=" w-full flex flex-col items-center gap-8 md:gap-20 max-w-6xl px-4 md:px-0 mx-auto mb-12">
                <div className=" w-full flex flex-col items-center">
                    <h2 className=" md:max-w-4xl mt-2 md:mt-4 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                        Migrate to React Seamlessly
                    </h2>
                    <p className="opacity-70 max-w-4xl text-balance text-center mt-2 text-sm md:text-base">
                        Transition from outdated platforms like WordPress, Wix, or Shopify to React/Next.js and experience unparalleled design flexibility, fast performance, and seamless CMS management.
                    </p>
                    <div className=" hidden md:inline-flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                        <Link href="/contact">
                            <PrimaryButton text="Book Intro Call" />
                        </Link>
                        <Link href="/work">
                            <SecondaryButton text="Our Work" />
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

                    <div className="p-2 md:p-3 w-full bg-[#E0E0E0] max-w-6xl mx-auto rounded-lg md:rounded-xl mt-12 relative z-50 group cursor-pointer">
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

export default PlatformMigrationHero;