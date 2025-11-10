
import ServiceCard from "@/components/common/service-card";
import { Separator } from "@/components/ui/separator";
import { supportServices } from "@/constants";
import Image from "next/image";

const SupportServices = () => {
    return (
        <section className=" relative flex flex-col">
            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 py-20 md:py-24">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-xl px-4 md:px-0 pt-12 pb-4 md:pt-20 md:pb-20">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">What We Offer</span>
                    </div>
                    <h2 className=" md:hidden mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Our Project Maintenance Services
                    </h2>
                    <h2 className=" hidden md:block mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Our Maintenance <br className="hidden md:block" /> & Support Services
                    </h2>

                    <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  mt-12 relative z-20">
                        {supportServices.map((service, index) => (
                            <ServiceCard key={index}
                                title={service.title}
                                icon={service.icon}
                                description={service.description}
                                href={service.href}
                                subCategory={service.subCategory} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportServices;