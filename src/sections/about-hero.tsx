import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import CompanyLogos from "./company-logos";

const AboutHero = () => {
    return (
        <section className=" w-full min-h-screen relative pt-40 md:pt-36">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col md:flex-row items-center gap-8 md:gap-20 max-w-6xl mx-auto mb-8 md:mb-12 px-4 md:px-0">
                <div className=" w-full flex flex-col items-center md:items-start">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">About Reframe Labs</span>
                    </div>
                    <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center md:text-start capitalize">
                        Powering Ambitious Companies Through Design & Code
                    </h2>
                    <p className="opacity-70 max-w-prose mx-auto text-center md:text-start text-balance mt-2 text-sm md:text-base">
                        Transform Your Digital Visibility with Enterprise-Grade SEO Solutions. Trusted by 20+ businesses for technical, local, and international SEO services
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
                <div className=" w-[90%] md:w-[72%] h-auto aspect-square relative">
                    <Image quality={100} fill src="/assets/about-img.png" alt="About Reframe Labs" />
                </div>
            </div>
            <CompanyLogos />
        </section>
    );
}

export default AboutHero;