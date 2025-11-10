"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const CaseStudyHero = ({
    title,
    description,
    profileImage,
    name,
    role,
    imageOne,
    imageTwo,
    imageThree,
    color,
    link,
    project,
}: {
    title: string;
    description: string;
    profileImage: string;
    name: string;
    role: string;
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    color: string;
    link: string;
    project: string;
}) => {
    // Build slideshow images (skip empty values)
    const images = useMemo(
        () => [imageOne, imageTwo, imageThree].filter((src): src is string => Boolean(src)),
        [imageOne, imageTwo, imageThree]
    );

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length < 2) return; // nothing to cycle
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % images.length);
        }, 3000); // 3s per slide
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <section className=" relative w-full flex flex-col pt-40 md:pt-48 px-4 md:px-0">
            <div className=" w-full container mx-auto flex flex-col items-center z-50 relative">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/lexos-icon.png" alt="Lexos Logo" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 text-sm md:text-base">Case Study / {project}</span>
                </div>
                <h1 className=" mt-4 md:mt-6 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize max-w-2xl">{title}</h1>
                <span className=" opacity-70 max-w-prose mx-auto text-center text-balance mt-2 text-base md:text-lg">&ldquo; {description} &rdquo;</span>

                <div className="flex items-center gap-2 mt-4">
                    <div className=" relative size-9 md:size-10">
                        <Image fill className="rounded-full shrink-0 aspect-square flex-nowrap object-cover" src={profileImage} alt={name} />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                        <span className=" font-medium text-sm">{name}</span>
                        <p className=" text-xs md:text-[15px] opacity-70">{role}</p>
                    </div>
                </div>

                <div style={{ backgroundColor: color }} className="p-2 md:p-3 w-full max-w-6xl mx-auto rounded-lg md:rounded-xl mt-12 relative z-50 group cursor-pointer">
                    <div className="w-full relative h-auto aspect-video">
                        <Link rel="noopener noreferrer" target="_blank" href={link}>
                            <div className="absolute hidden  rounded-md md:rounded-lg group-hover:block inset-0 z-20 hover:block cursor-pointer opacity-15" style={{ backgroundColor: color }} />
                        </Link>
                        {images.map((src, i) => (
                            <Image
                                key={src + i}
                                src={src}
                                alt={title}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className={`object-cover object-top rounded-md md:rounded-lg transition-opacity duration-700 ease-in-out ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                                priority={i === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
        </section>
    );
}

export default CaseStudyHero;