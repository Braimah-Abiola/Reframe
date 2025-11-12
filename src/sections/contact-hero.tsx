import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CalBooking from "./cal-booking";
import CompanyLogos from "./company-logos";

const ContactHero = () => {
    return (
        <section className=" w-full min-h-screen relative pt-32 md:pt-48 pb-20">
            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full flex flex-col items-center max-w-6xl mx-auto mb-12 px-4 md:px-0 relative z-20">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 mr-1 text-sm md:text-base">Book A Discovery Call</span>
                </div>
                <h2 className=" mt-4 md:mt-2 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize">
                    Let’s Create Something <br className=" hidden md:block" /> Amazing Together
                </h2>
                <p className="opacity-70 max-w-prose mx-auto text-center text-balance mt-2 text-sm md:text-base">We’ll tailor a solution that fits your goals perfectly. Book a discovery call below.</p>
                {/* <div className=" w-fit mt-4">
                    <CustomQuoteDialog trigger={<PrimaryButton fullWidth text="Get A Quote Now" />} />
                </div> */}
                {/* <div className="flex items-center gap-2.5 px-12 md:px-20 w-full justify-between mt-[2rem]">
                    <div className=" w-full">
                        <Separator orientation="horizontal" className=" w-full" />
                    </div>
                    <div>
                        <span className=" text-sm md:text-[15px] opacity-70">or</span>
                    </div>
                    <div className=" w-full">
                        <Separator orientation="horizontal" className=" w-full" />
                    </div>
                </div> */}
                <CalBooking />
            </div>
            <CompanyLogos />
        </section>
    );
}

export default ContactHero;