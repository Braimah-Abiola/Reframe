
import Card from "@/components/common/card";
import { Separator } from "@/components/ui/separator";
import { whyUs } from "@/constants";
import Image from "next/image";

const WhyUsProductDesign = () => {
    return (
        <section className=" relative flex flex-col">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 pt-20">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-xl py-20 md:py-28 px-4 md:px-0">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">Why Reframe Labs?</span>
                    </div>
                    <h2 className=" hidden md:block mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Why Choose Us For <br className=" hidden md:block" /> Product Design
                    </h2>
                    <h2 className="  md:hidden mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Why Choose Us?
                    </h2>
                    <p className="opacity-70 max-w-prose text-center text-balance mt-2 mb-4 text-sm md:text-base">
                        Our data-driven design strategies boost customer satisfaction and conversion rates by delivering user-focused, optimized designs.
                    </p>

                    <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative z-20">
                        {whyUs.map((reason, index) => (
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

export default WhyUsProductDesign;