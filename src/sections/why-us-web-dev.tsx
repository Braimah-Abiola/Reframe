
import Card from "@/components/common/card";
import { Separator } from "@/components/ui/separator";
import { whyUsWebDev } from "@/constants";
import Image from "next/image";

const WhyUsWebDevelopment = () => {
    return (
        <section className=" relative flex flex-col">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 pt-20">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-xl px-4 md:px-0 pt-12 pb-4 md:pt-28 md:pb-28">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2">Why Us?</span>
                    </div>
                    <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Why Choose Reframe Labs?
                    </h2>
                    <p className="opacity-70 md:max-w-prose text-center text-balance mt-2 mb-4 text-sm md:text-base">
                        Choosing the right partner for your website development needs is critical for long-term growth. Here’s what sets Reframe Labs apart from the competition.
                    </p>

                    <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative z-20">
                        {whyUsWebDev.map((reason, index) => (
                            <Card key={index}
                                title={reason.title}
                                icon={reason.icon}
                                description={reason.description}
                                subCategory={reason.subCategory}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUsWebDevelopment;