import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const ProcessCard = ({
    title,
    index,
    icon: Icon,
    description,
    isLast = false,
}: {
    icon: LucideIcon;
    title: string;
    index?: number;
    description: string;
    isLast?: boolean;
}) => {
    return (
        <div className={cn("py-2", (index === 0 || isLast) && "relative z-50")}>
            <div className="bg-white hover:shadow cursor-pointer border rounded-lg md:rounded-xl h-full flex flex-col justify-between p-6 md:p-8 min-w-[94vw] md:min-w-xl">
                <div className=" mb-4 mt-4">
                    <Icon className=" size-6 md:size-9 mb-2 md:mb-6" />
                    <h6 className=" font-medium text-lg md:text-xl">{title}</h6>
                    <p className=" text-[15px] md:text-base opacity-70 text-balance md:mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProcessCard;