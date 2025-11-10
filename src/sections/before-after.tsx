import { Compare } from "@/components/common/compare";
import { Separator } from "@/components/ui/separator";

const BeforeAndAfter = () => {
    return (
        <section className=" relative w-full px-4 md:px-0">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className=" p-2 md:p-4 bg-white rounded-xl w-full max-w-6xl mx-auto cursor-grab z-50">
                <Compare
                    firstImage="/assets/astrae-before.png"
                    secondImage="/assets/astrae-after.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className=" w-full h-auto aspect-video"
                    slideMode="drag"
                />
            </div>
        </section>
    );
}

export default BeforeAndAfter;