
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CompanyLogos from "./company-logos";
import SlidingProjects from "./sliding-cards";


const BrandingHero = () => {
    return (
        <section className=" w-full min-h-screen relative pt-40 md:pt-48">
            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col items-center gap-8 md:gap-20 max-w-6xl mx-auto px-4 md:px-0">
                <div className=" w-full flex flex-col items-center">
                    <h2 className=" md:max-w-2xl text-balance mt-2 md:mt-4 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                        Strategic Branding And Identity Services
                    </h2>
                    <p className="opacity-70 max-w-4xl text-balance text-center mt-2 text-sm md:text-base">
                        Craft a memorable brand that resonates with your audience and drives growth. Reframe Labs delivers strategic branding services combining market insights, creative design and digital experiences to position your business as an industry leader.
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
            </div>
            <SlidingProjects />
            <CompanyLogos />
        </section>
    );
};

export default BrandingHero;