import { TextAnimate } from "@/components/common/animated-text";
import Faq from "@/components/common/faq";
import PricingCards from "@/components/common/pricing-cards";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Pricing = () => {
    return (
        <section className=" relative flex flex-col">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 pb-8 md:pt-20 md:pb-20">
                <div className=" flex flex-col items-center w-full h-full bg-white px-4 md:px-0 rounded-xl py-12 md:py-20">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">Simple Pricing</span>
                    </div>
                    <TextAnimate animation="blurIn" as="h2" startOnView className="mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize max-w-[12ch] text-balance">
                        Cheaper than churned users
                    </TextAnimate>
                    <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">

                    </h2>
                    <p className="opacity-70 max-w-prose mx-auto text-center text-balance mt-1 md:mt-2 text-[15px] md:text-base">
                        From design sprints to full-scale product teams, our plans give you unlimited requests, fast delivery, and seamless communication.
                    </p>
                    <PricingCards />
                    <div className="mt-10" />
                    <Faq />
                </div>
            </div>
        </section>
    );
}

export default Pricing;