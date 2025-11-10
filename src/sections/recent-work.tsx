"use client"

import SecondaryButton from "@/components/common/secondary-button";
import ShowcaseCard from "@/components/common/showcase-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";


const RecentWork = () => {
    return (
        <section className=" w-full relative pt-4 md:pt-20 pb-20 md:pb-40">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
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

                <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className=" px-4 md:px-0 flex flex-col items-center md:items-start text-center md:text-start pt-12 md:w-fit md:shrink-0">
                        <h2 className=" hidden md:block mt-2 font-montserrat font-semibold text-5xl tracking-tighter capitalize">
                            Some Of Our <br className=" hidden md:block" /> Recent Work
                        </h2>
                        <h2 className=" md:hidden mt-2 font-montserrat font-semibold text-4xl tracking-tighter capitalize">
                            Recent Work
                        </h2>
                        <p className="opacity-70 md:max-w-[32ch] text-balance mt-2 mb-4 text-sm md:text-base">
                            Explore our portfolio of exceptional web design and custom websites that drive results for businesses worldwide.
                        </p>
                        <Link href="/work">
                            <SecondaryButton text="Explore All Projects" />
                        </Link>
                    </div>

                    <div className=" w-full relative group">
                        <div className="absolute top-0 bottom-0 left-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-r from-background to-transparent" />
                        <div className="absolute top-0 bottom-0 right-0 w-[10%] md:w-[20%] z-[1] bg-gradient-to-l from-background to-transparent" />

                        <div className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in pointer-events-none">
                            <CarouselPrevious className="left-0 md:left-20 top-1/2 -translate-y-[100%]" />

                            <CarouselNext className="right-0 md:right-20 top-1/2 -translate-y-[100%]" />
                        </div>

                        <CarouselContent className="px-3 md:px-0">
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#0065FC" icon="/assets/astrae-favicon.png" image="/assets/astrae-showcase.png" title="Astrae" link="https://www.astrae.design" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#822BD3" icon="/assets/fetchtalent-favicon.png" image="/assets/fetchtalent-showcase.png" title="Fetchtalent AI" link="https://www.fetchtalent.ai" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infosignal-showcase.png" title="InfoSignal Inc." link="https://www.infosignal.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#57AEFF" icon="/assets/textbooklm-favicon.png" image="/assets/textbooklm-showcase.png" title="TextbookLM" link="https://www.textbooklm.co" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#B8835A" icon="/assets/toonlyai-favicon.png" image="/assets/toonlyai-showcase.png" title="Toonly AI" link="https://www.toonly.ai" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#877CF3" icon="/assets/lexos-favicon.png" image="/assets/lexos-showcase.png" title="Lexos" link="https://www.golexos.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#F3294D" icon="/assets/skillura-favicon.png" image="/assets/skillura-showcase.png" title="Skillura" link="https://www.skillura.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#EE8840" icon="/assets/ifs-favicon.png" image="/assets/infoboard-showcase.png" title="InfoBoard" link="https://www.ifs-infoboard.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#49ADFF" icon="/assets/meetingiq-favicon.png" image="/assets/meetingiq-showcase.png" title="Meeting IQ" link="https://www.meetingiq.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#B4D336" icon="/assets/geny-favicon.png" image="/assets/geny-showcase.png" title="Gen Y Solutions" link="https://www.genysolutions.tech" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#560A2B" icon="/assets/nick-favicon.png" image="/assets/nick-showcase.png" title="Intero Properties" link="https://www.nickwemyssrealestate.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#055FFC" icon="/assets/onlytool-favicon.png" image="/assets/onlytool-showcase.png" title="Onlytool" link="https://www.onlytool.ai" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#AECE2A" icon="/assets/stakenet-favicon.png" image="/assets/stakenet-showcase.png" title="Stakenet" link="https://www.stakenet.app" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#AC91F1" icon="/assets/phcareers-favicon.png" image="/assets/phcareers-showcase.png" title="PH Careers" link="https://www.philippine.careers" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#F67765" icon="/assets/fontsnatcher-favicon.png" image="/assets/fontsnatcher-showcase.png" title="Font Snatcher" link="https://www.fontsnatcher.co" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#E6AB1A" icon="/assets/midas-favicon.png" image="/assets/midas-showcase.png" title="Midas" link="https://www.usemidas.app" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#8E55FC" icon="/assets/lancer-favicon.png" image="/assets/lancer-showcase.png" title="Lancershout" link="https://www.lancershout.com" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#2451F5" icon="/assets/arete-favicon.png" image="/assets/arete-showcase.png" title="Arete Codes" link="https://www.arete.codes" />
                            </CarouselItem>
                            <CarouselItem className=" basis-[90%] md:basis-1/2 lg:basis-1/2 xl:basis-[40%]">
                                <ShowcaseCard color="#FB3F00" icon="/assets/zel-favicon.png" image="/assets/zel-showcase.png" title="Zel Designs" link="https://www.zeldesigns.com" />
                            </CarouselItem>
                        </CarouselContent>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default RecentWork;