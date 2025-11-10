import SecondaryButton from "@/components/common/secondary-button";
import { Separator } from "@/components/ui/separator";
import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import NavigationMobile from "@/sections/navigation-mobile";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <NavigationMobile />
            <section className=" min-h-screen flex flex-col items-center justify-center relative">
                <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                    <Separator orientation="vertical" />
                    <Separator orientation="vertical" />
                </div>
                <div className=" max-w-6xl mx-auto px-4 md:px-0 flex flex-col items-center -mt-20">
                    <div className="flex items-center justify-center w-full -space-x-8">
                        <span className=" z-20 text-[9rem] md:text-[20rem] font-inter font-medium">4</span>
                        <div className=" aspect-square relative size-[18rem]">
                            <Image fill className=" object-contain animate-spin" src="/assets/404.png" alt="404" />
                        </div>
                        <span className=" z-20 text-[9rem] md:text-[20rem] font-inter font-medium">4</span>
                    </div>
                    <p className="opacity-70 -mt-20 text-sm md:text-[15px]">The page you are looking for does not exist</p>
                    <div className=" h-6" />
                    <Link href="/">
                        <SecondaryButton text="Go back home" />
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default NotFound;