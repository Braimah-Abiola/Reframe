import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CompanyLogos from "./company-logos";
import Link from "next/link";

const AutomationHero = () => {
    return (
        <section className=" w-full min-h-screen relative pt-40 md:pt-48">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-20 max-w-6xl mx-auto mb-12 md:mb-24 px-4 md:px-0">
                <div className=" w-full flex flex-col items-start">
                    <h2 className="font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center md:text-start capitalize">
                        Accelerate Growth <br className=" hidden md:block" /> with AI Automations <br className=" hidden md:block" /> & Actionable Insights
                    </h2>
                    <p className=" text-sm md:text-base opacity-70 md:max-w-[56ch] text-center md:text-start mt-2">
                        Unlock efficiency and smarter decisions with custom AI-powered automations, analytics, and reporting. Trusted by leading teams to streamline workflows, boost productivity, and drive data-backed results.
                    </p>
                    <div className=" hidden md:inline-flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                        <Link href="/contact">
                            <PrimaryButton text="Book Intro Call" />
                        </Link>
                        <Link href="/work">
                            <SecondaryButton text="Our Work" />
                        </Link>
                    </div>
                    <div className=" md:hidden inline-flex items-center justify-center w-full gap-2 mt-4">
                        <Link href="/contact">
                            <Button>Book Intro Call</Button>
                        </Link>
                        <Link href="/work">
                            <Button variant="secondary">Our Work</Button>
                        </Link>
                    </div>
                </div>
                <div className=" w-[80%] md:w-[50%] h-auto aspect-square relative md:mr-8">
                    <Image quality={100} fill src="/assets/404.png" alt="Shape 3" />
                </div>
            </div>
            <CompanyLogos />
        </section>
    );
}

export default AutomationHero;