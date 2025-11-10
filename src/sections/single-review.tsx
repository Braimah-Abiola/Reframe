import StoryCard from "@/components/common/story-card";
import { Separator } from "@/components/ui/separator";

const SingleReview = () => {
    return (
        <section className=" w-full relative h-fit pt-20">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" w-full max-w-6xl mx-auto mt-8 md:mt-12 relative z-20 px-4 md:px-0">
                <h3 className=" text-2xl md:text-4xl font-semibold font-montserrat tracking-tighter mb-4 md:mb-6">Client Feedback</h3>
                <StoryCard
                    coverImage="/assets/astrae-cover.png"
                    icon="/assets/astrae-icon.png"
                    link="https://astrae.design"
                    name="Abiola Braimah"
                    profile="/assets/abiola-profile.png"
                    projectPreview="/assets/astrae-showcase.png"
                    quote="&ldquo; Reframe Labs delivered solid work with impressive responsiveness. Their technical capabilities and quick communication made them feel like a true development partner who understood our vision. &rdquo;"
                    role="Founder, Astrae Design" />
            </div>
        </section>
    );
}

export default SingleReview;