import { ArrowUpRight } from "lucide-react";

const OfferBanner = () => {
    return (
        <section className=" bg-primary py-1 text-sm md:text-[15px] text-white flex items-center justify-center">
            <p className=" flex items-center gap-1">Get a FREE Expert Audit of Your<span className="underline underline-offset-[3px] flex items-center gap-1">Website, App, or Product<ArrowUpRight className=" size-4" /></span></p>
        </section>
    );
}

export default OfferBanner;