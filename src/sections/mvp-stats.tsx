import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const MvpStats = () => {
    return (
        <section className=" relative">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" max-w-6xl mx-auto py-20 relative z-20 px-4 md:px-0">
                <div className=" flex flex-col items-center w-full h-full">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">MVP Stats</span>
                    </div>
                    <h2 className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Trusted By Founders
                    </h2>

                    <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-2.5 md:gap-3 mt-8">
                        <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                            <span className=" opacity-70 tracking-tight text-sm md:text-base">/01</span>
                            <div>
                                <h5 className=" font-medium text-2xl md:text-4xl">250<span className=" text-primary">+</span></h5>
                                <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Founders launched MVPs with us</p>
                            </div>
                        </div>

                        <div className=" w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                            <span className=" opacity-70 tracking-tight text-sm md:text-base">/02</span>
                            <div>
                                <h5 className=" font-medium text-2xl md:text-4xl">98<span className=" text-primary">%</span></h5>
                                <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">Client satisfaction rate among MVP founders</p>
                            </div>
                        </div>

                        <div className=" col-span-2 md:col-span-1 w-full border border-dashed hover:border-primary  ease-in-out transition-all duration-300 cursor-pointer rounded-lg md:rounded-xl bg-white flex flex-col items-start p-3 md:p-6 gap-12">
                            <span className=" opacity-70 tracking-tight text-sm md:text-base">/03</span>
                            <div>
                                <h5 className=" font-medium text-2xl md:text-4xl">85<span className=" text-primary">%</span></h5>
                                <p className=" md:mt-2 text-sm md:text-base tracking-tight leading-tight opacity-70 max-w-[22ch] text-balance">MVPs secured follow-on funding post-launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MvpStats;