import { TextAnimate } from "@/components/common/animated-text";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Cta = ({ title, description }: { title: string; description?: string; }) => {
    return (
        <section className="w-full relative px-4 md:px-0 hidden md:block">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" max-w-6xl mx-auto w-full h-[16rem] md:h-[44vh] rounded-lg md:rounded-xl bg-white border relative overflow-clip">
                <div className=" w-full h-full">
                    <video autoPlay loop muted playsInline className=" w-full h-full object-cover rounded-lg md:rounded-xl bg-white">
                        <source src="/video/cta.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className=" absolute inset-0 rounded-lg md:rounded-xl flex flex-col items-start justify-start text-start px-4 md:px-8 xl:px-12 pt-4 md:pt-8 xl:pt-12">
                        <TextAnimate animation="blurInUp" as="h3" startOnView className="font-montserrat font-semibold text-3xl md:text-[44px] md:leading-11 tracking-tighter text-start capitalize max-w-[18ch] text-balance">
                            {title}
                        </TextAnimate>
                        {description && <p className="max-w-sm opacity-70 mt-1 md:mt-2 text-balance text-[15px] md:text-base">{description}</p>}

                        <div className=" hidden md:inline-flex items-center gap-3 mt-4">
                            <Link href="/contact">
                                <PrimaryButton text="Book A Call" />
                            </Link>
                            <Link href="/work">
                                <SecondaryButton text="Explore All Projects" />
                            </Link>
                        </div>
                        <Link href="/contact">
                            <Button className=" md:hidden mt-4">Book A Call</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;