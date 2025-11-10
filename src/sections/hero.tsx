"use client"

import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import ShowcaseCard from "@/components/common/showcase-card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CompanyLogos from "./company-logos";
import { TextAnimate } from "@/components/common/animated-text";

const Hero = () => {
    return (
        <section className=" relative w-full min-h-screen flex flex-col justify-center pt-40 md:pt-48">
            <div className=" px-4 md:px-0 w-full max-w-6xl mx-auto flex flex-col items-center z-50 relative">
                <div className=" w-fit cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/lexos-icon.png" alt="Lexos Logo" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 hidden md:block">Revamped site helps Lexos grow by ~23%</span>
                    <span className=" ml-2 text-sm md:hidden">Lexos grows by ~23%</span>
                    <ArrowRight className=" size-4 ml-2" />
                </div>
                <TextAnimate animation="blurInUp" as="h1" startOnView className="mt-4 md:mt-6 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize text-balance max-w-[20ch]">
                    Stunning products built from the ground up
                </TextAnimate>

                <p className="opacity-70 md:max-w-prose md:mx-auto text-center text-balance mt-2 text-sm md:text-base">Reframe Labs is an AI-first and design driven product studio and agency shaping the next wave of software.</p>

                <div className=" hidden md:inline-flex items-center gap-3 mt-6">
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
            </div>

            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>



            <div className=" w-full relative group mt-10 md:mt-16 mb-20">
                <div className="absolute top-0 bottom-0 left-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-r from-background to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-l from-background to-transparent" />

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
                    <CarouselContent className="px-3 md:px-0">
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#0065FC" icon="/assets/astrae-favicon.png" image="/assets/astrae-showcase.png" title="Astrae" link="https://www.astrae.design" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#822BD3" icon="/assets/fetchtalent-favicon.png" image="/assets/fetchtalent-showcase.png" title="Fetchtalent AI" link="https://www.fetchtalent.ai" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infosignal-showcase.png" title="InfoSignal Inc." link="https://www.infosignal.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#57AEFF" icon="/assets/textbooklm-favicon.png" image="/assets/textbooklm-showcase.png" title="TextbookLM" link="https://www.textbooklm.co" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#B8835A" icon="/assets/toonlyai-favicon.png" image="/assets/toonlyai-showcase.png" title="Toonly AI" link="https://www.toonly.ai" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#877CF3" icon="/assets/lexos-favicon.png" image="/assets/lexos-showcase.png" title="Lexos" link="https://www.golexos.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#F3294D" icon="/assets/skillura-favicon.png" image="/assets/skillura-showcase.png" title="Skillura" link="https://www.skillura.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infoboard-showcase.png" title="InfoBoard" link="https://www.ifs-infoboard.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#49ADFF" icon="/assets/meetingiq-favicon.png" image="/assets/meetingiq-showcase.png" title="Meeting IQ" link="https://www.meetingiq.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#B4D336" icon="/assets/geny-favicon.png" image="/assets/geny-showcase.png" title="Gen Y Solutions" link="https://www.genysolutions.tech" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#560A2B" icon="/assets/nick-favicon.png" image="/assets/nick-showcase.png" title="Intero Properties" link="https://www.nickwemyssrealestate.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#055FFC" icon="/assets/onlytool-favicon.png" image="/assets/onlytool-showcase.png" title="Onlytool" link="https://www.onlytool.ai" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#AECE2A" icon="/assets/stakenet-favicon.png" image="/assets/stakenet-showcase.png" title="Stakenet" link="https://www.stakenet.app" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#AC91F1" icon="/assets/phcareers-favicon.png" image="/assets/phcareers-showcase.png" title="PH Careers" link="https://www.philippine.careers" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#F67765" icon="/assets/fontsnatcher-favicon.png" image="/assets/fontsnatcher-showcase.png" title="Font Snatcher" link="https://www.fontsnatcher.co" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#E6AB1A" icon="/assets/midas-favicon.png" image="/assets/midas-showcase.png" title="Midas" link="https://www.usemidas.app" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#8E55FC" icon="/assets/lancer-favicon.png" image="/assets/lancer-showcase.png" title="Lancershout" link="https://www.lancershout.com" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#2451F5" icon="/assets/arete-favicon.png" image="/assets/arete-showcase.png" title="Arete Codes" link="https://www.arete.codes" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[94%] md:basis-1/2 lg:basis-1/4">
                            <ShowcaseCard color="#FB3F00" icon="/assets/zel-favicon.png" image="/assets/zel-showcase.png" title="Zel Designs" link="https://www.zeldesigns.com" />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in pointer-events-none">
                        <CarouselPrevious />

                        <CarouselNext />
                    </div>
                </Carousel>
            </div>

            <CompanyLogos />
        </section>
    );
}

export default Hero;