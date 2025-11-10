import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const KeyFeatures = () => {
    return (
        <section className=" w-full relative">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <h3 className=" text-2xl md:text-4xl font-semibold font-montserrat tracking-tighter mb-6">
                    Key Features Implemented
                </h3>

                <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                    <div>
                        <span className="text-xl md:text-2xl font-medium tracking-tighter">
                            Modular Marketing UI Library
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm md:text-base">
                            Delivered a cohesive, reusable component library (hero, pricing, CTA, cards) that keeps Astrae’s brand consistent and ships new pages in hours—not weeks.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl md:text-2xl font-medium tracking-tighter">
                            Sanity CMS + Editorial Workflow
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm md:text-base">
                            Modeled blog content in Sanity with previews, drafts, and scheduled publishing. Authors can compose rich articles using portable blocks (callouts, embeds, code snippets) without dev support.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl md:text-2xl font-medium tracking-tighter">
                            Conversion-Optimized Sign-Up Flow
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm md:text-base">
                            Reworked pricing and sign-up with clear CTAs, fewer steps, and trust cues. Integrated analytics for event tracking and funnel visibility to guide experiment cycles.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl md:text-2xl font-medium tracking-tighter">
                            Lemonsqueezy Affiliate Integration
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm md:text-base">
                            Implemented an affiliate program powered by Lemonsqueezy—referral attribution, payouts, and dashboards—unlocking scalable partner-led growth.
                        </p>
                    </div>
                </div>

                <div className="w-full h-auto aspect-video relative overflow-clip rounded-lg mt-10">
                    <Image
                        src="/assets/astrae-dashboard.png"
                        alt="Astrae dashboard image"
                        fill
                        className=" object-cover object-top"
                    />
                </div>
            </div>
        </section >
    );
}

export default KeyFeatures;