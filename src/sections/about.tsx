import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section className=" relative flex flex-col">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" md:px-10 px-4 py-12 md:py-20">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-lg md:rounded-xl py-8 px-4 md:px-0 md:py-28">
                    <div className=" max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
                        <div className=" w-full md:w-[80%] relative h-[16rem] md:h-[36rem]">
                            <Image fill src="/assets/team-pic.png" className="rounded-lg md:rounded-xl object-cover" alt="Team picture" />
                        </div>

                        <div className=" w-full">
                            <h2 className="font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-start capitalize">
                                We Are Obsessed With Building Great Products.
                            </h2>
                            <p className="opacity-70 text-start mt-2 text-sm md:text-base">
                                In 2023, we started Reframe Labs with the simple goal of helping small businesses and startups to build the ideal product and harness the powers of the web for development, marketing and sales.
                            </p>

                            <ul className=" mt-4 list-inside list-disc text-sm md:text-base flex flex-col items-start gap-1 text-foreground opacity-70">
                                <li>35% faster product launches through scalable systems</li>
                                <li>480+ dev hours saved per project</li>
                                <li>Up to 67% shorter onboarding time</li>
                                <li>92% client satisfaction across 250+ global brands</li>
                                <li>40% drop in user drop-off through better UX</li>
                            </ul>

                            <div className=" inline-flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                                <Link href="/contact">
                                    <PrimaryButton text="Build Your Product Now" />
                                </Link>
                                <Link href="/work">
                                    <SecondaryButton text="Our Work" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;