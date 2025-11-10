import Faq from "@/components/common/faq";
import { Separator } from "@/components/ui/separator";
import { generalFaqs } from "@/constants";

interface FaqsProps {
    faqs?: typeof generalFaqs;
}

const Faqs = ({ faqs }: FaqsProps) => {
    return (
        <section className=" relative flex flex-col pt-8">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 py-12 md:py-20">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-lg md:rounded-xl pt-12 pb-8 md:pt-12 md:pb-28">
                    <Faq faqs={faqs} />
                </div>
            </div>
        </section>
    );
}

export default Faqs;