import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Stats = () => {
    return (
        <section className=" w-full relative flex flex-col">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full max-w-6xl mx-auto flex flex-col items-center py-20 z-20 px-4 md:px-0">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" text-sm md:text-base ml-2">Our Statistics</span>
                </div>
                <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                    We Measure Outcomes, <br className=" hidden md:block" /> <span className=" opacity-50 line-through">Not Just Aesthetics.</span>
                </h2>


                <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-2.5 md:gap-3 mt-8 md:mt-12">
                    <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                        <span className=" opacity-70 tracking-tight text-sm md:text-base">/01</span>

                        <div>
                            <h5 className=" font-medium text-2xl md:text-4xl">$2B<span className=" text-primary">+</span></h5>
                            <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Raised through software-led launches</p>
                        </div>
                    </div>

                    <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                        <span className=" opacity-70 tracking-tight text-sm md:text-base">/02</span>

                        <div>
                            <h5 className=" font-medium text-2xl md:text-4xl">400<span className=" text-primary">%</span></h5>
                            <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Uplift in conversions (Avg. 300%)</p>
                        </div>
                    </div>

                    <div className=" col-span-2 md:col-span-1 w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                        <span className=" opacity-70 tracking-tight text-sm md:text-base">/03</span>

                        <div>
                            <h5 className=" font-medium text-2xl md:text-4xl">100M<span className=" text-primary">+</span></h5>
                            <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Users reached through our SaaS and AI platforms</p>
                        </div>
                    </div>
                </div>

                <div className=" grid grid-cols-2 w-full gap-3 mt-2.5 md:mt-4">
                    <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                        <span className=" opacity-70 tracking-tight text-sm md:text-base">/04</span>

                        <div>
                            <h5 className=" font-medium text-2xl md:text-4xl">140<span className=" text-primary">+</span></h5>
                            <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Awards recognized by Awwwards, CSSDA, Behance</p>
                        </div>
                    </div>

                    <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                        <span className=" opacity-70 tracking-tight text-sm md:text-base">/05</span>

                        <div>
                            <h5 className=" font-medium text-2xl md:text-4xl">100<span className=" text-primary">+</span></h5>
                            <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Testimonials, trusted by VC-backed startups</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;