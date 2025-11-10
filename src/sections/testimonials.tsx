"use client"

import TestimonialCard from "@/components/common/tetstimonial-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className=" w-full relative pb-8 md:pb-20">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div>
                <div className=" flex flex-col items-center w-full h-full">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2">Testimonials</span>
                    </div>
                    <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Our Happy Clients
                    </h2>
                    <p className="opacity-70 max-w-prose text-center text-balance mt-2 mb-4 text-sm md:text-base">
                        Hear from clients who’ve experienced remarkable transformations with Reframe Labs.
                    </p>
                </div>
            </div>

            <div className=" w-full relative group mt-8 max-w-[90rem] mx-auto">
                <div className="absolute top-0 bottom-0 left-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-r from-background to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-l from-background to-transparent" />

                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="px-0 md:px-0">
                        <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-[40%]">
                            <TestimonialCard
                                coverImage="/assets/lexos-cover.png"
                                icon="/assets/lexos-icon-2.png"
                                link="https://lexosmove.com"
                                name="Dino Talaghani"
                                profile="/assets/dino.png"
                                projectPreview="/assets/lexos-showcase.png"
                                quote="&ldquo; Reframe Labs allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house &rdquo;"
                                role="Founder, Lexos Move" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-[40%]">
                            <TestimonialCard
                                coverImage="/assets/astrae-cover.png"
                                icon="/assets/astrae-icon.png"
                                link="https://astrae.design"
                                name="Abiola Braimah"
                                profile="/assets/abiola-profile.png"
                                projectPreview="/assets/astrae-showcase.png"
                                quote="&ldquo; Reframe Labs delivered solid work with impressive responsiveness. Their technical capabilities and quick communication made them feel like a true development partner who understood our vision. &rdquo;"
                                role="Founder, Astrae Design" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-[40%]">
                            <TestimonialCard
                                coverImage="/assets/fetchtalent-cover.png"
                                icon="/assets/fetchtalent-icon.png"
                                link="https://fetchtalent.ai"
                                name="Prasanth Raj"
                                profile="/assets/raj-profile.png"
                                projectPreview="/assets/fetchtalent-showcase.png"
                                quote="&ldquo; Working with Reframe Labs was a fantastic experience. They are a team of young professionals who are passionate about what they do. I highly recommend them to anyone looking for a top-tier software development partner. &rdquo;"
                                role="Founder and CEO, FetchTalent AI" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-[40%]">
                            <TestimonialCard
                                coverImage="/assets/stakenet-cover.png"
                                icon="/assets/stakenet-icon.png"
                                link="https://stakenet.com"
                                name="Alan Obeng-Peprah"
                                profile="/assets/obeng.png"
                                projectPreview="/assets/stakenet-showcase.png"
                                quote="&ldquo; Reframe Labs built us a powerful AI-driven platform that accurately predicts sports outcomes. Their expertise in AI and data analytics helped us create a platform that gives our users a real competitive advantage. &rdquo;"
                                role="Co-Founder, Stakenet" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/3 xl:basis-[40%]">
                            <TestimonialCard
                                coverImage="/assets/geny-cover.png"
                                icon="/assets/geny-icon.png"
                                link="https://genysolutions.tech"
                                name="Chris Ogbuehi"
                                profile="/assets/chris.png"
                                projectPreview="/assets/geny-showcase.png"
                                quote="&ldquo; Reframe Labs delivered an exceptional landing page that perfectly captures our agency's vision and showcases our AI capabilities. Their attention to detail and technical expertise helped us establish a strong digital presence that truly represents what we do. &rdquo;"
                                role="CEO, Gen Y Solutions" />
                        </CarouselItem>
                    </CarouselContent>
                    <div className=" opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in pointer-events-none">
                        <CarouselPrevious className=" left-0 md:left-20 xl:left-40 top-1/2 -translate-y-1/2" />

                        <CarouselNext className="right-0 md:right-20 xl:right-40 top-1/2 -translate-y-[100%]" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonials;