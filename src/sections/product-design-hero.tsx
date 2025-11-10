import { Marquee } from "@/components/common/marquee";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { galleryColumn1, galleryColumn2 } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CompanyLogos from "./company-logos";

const ProductDesignHero = () => {
    return (
        <div className=" relative">
            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <section className=" w-full min-h-screen pt-40 md:pt-20 mb-20">
                <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="px-4 md:px-0 w-full flex flex-col items-center md:items-start">
                        <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                            <Image width={16} height={16} src="/assets/lexos-icon.png" alt="Lexos Logo" />
                            <div className=" h-4 ml-2">
                                <Separator orientation="vertical" />
                            </div>
                            <span className=" ml-2 hidden md:block">Revamped site helps Lexos grow by ~23%</span>
                            <span className=" ml-2 text-sm md:hidden">Lexos grows by ~23%</span>
                            <ArrowRight className=" size-4 ml-2" />
                        </div>
                        <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center md:text-start capitalize">
                            Stunning Product Design That Drives Top-Notch Results
                        </h2>
                        <p className="opacity-70 max-w-[52ch] text-center md:text-start mt-2 text-sm md:text-base">
                            We create seamless and captivating product designs that enhance user interaction and elevate your brand. As a top-rated agency, our products built to engage your audience.
                        </p>
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
                    <div className="relative h-[90vh] w-fit flex-row items-center justify-center shrink-0 overflow-hidden hidden md:flex">
                        <Marquee pauseOnHover vertical className=" w-fit [--duration:40s]">
                            {galleryColumn1.map((image, index) => (
                                <div key={index} className=" relative w-[264px] h-[292px]">
                                    <Image quality={100} fill src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} className=" object-cover rounded-lg border" />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover vertical className=" w-fit [--duration:52s]">
                            {galleryColumn2.map((image, index) => (
                                <div key={index} className=" relative w-[264px] h-[292px]">
                                    <Image quality={100} fill src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} className=" object-cover rounded-lg border" />
                                </div>
                            ))}
                        </Marquee>
                        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b z-20"></div>
                        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t z-20"></div>
                    </div>

                    <div className=" w-full relative items-center justify-center shrink-0 overflow-hidden md:hidden">
                        <Marquee pauseOnHover className=" w-fit [--duration:40s]">
                            {galleryColumn1.map((image, index) => (
                                <div key={index} className=" relative w-[280px] h-[220px]">
                                    <Image quality={100} fill src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} className=" object-cover rounded-md border" />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className=" w-fit [--duration:52s]">
                            {galleryColumn2.map((image, index) => (
                                <div key={index} className=" relative w-[280px] h-[220px]">
                                    <Image quality={100} fill src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} className=" object-cover rounded-md border" />
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-20"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-background z-20"></div>
                    </div>
                </div>
            </section>
            <CompanyLogos />
        </div>
    );
}

export default ProductDesignHero;