import WorkCard from "@/components/common/work-card";
import { Separator } from "@/components/ui/separator";

const RelatedCaseStudies = () => {
    return (
        <section className=" w-full relative h-fit pt-12 md:pt-20 pb-20 md:pb-32 px-4 md:px-0">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-12 relative z-20">
                <h3 className=" text-2xl md:text-4xl md:col-span-2 font-semibold font-montserrat tracking-tighter mb-0">Explore more case studies</h3>
                <WorkCard color="#055FFC" icon="/assets/onlytool-favicon.png" image="/assets/onlytool-showcase.png" title="Onlytool" description="Helps companies find, inspire, grow and retain their best talent. Connects the skills and aspirations of employees to existing opportunities within business." industry={["B2B SaaS", "M&A", "FinTech"]} link="https://www.onlytool.ai" />
                <WorkCard color="#AECE2A" icon="/assets/stakenet-favicon.png" image="/assets/stakenet-showcase.png" title="Stakenet" description="Helps companies find, inspire, grow and retain their best talent. Connects the skills and aspirations of employees to existing opportunities within business." industry={["B2B SaaS", "M&A", "FinTech"]} link="https://www.stakenet.app" />
            </div>
        </section>
    );
}

export default RelatedCaseStudies;