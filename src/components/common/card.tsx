import { LucideIcon } from "lucide-react";

const Card = ({
    title,
    icon: Icon,
    description,
    subCategory,
}: {
    icon: LucideIcon;
    title: string;
    description: string;
    subCategory?: string[];
}) => {
    return (
        <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4">
            <div className="mb-4">
                <Icon className=" size-6 md:size-7 mb-2 md:mb-4" />
                <h6 className=" font-medium text-[15px] md:text-lg">{title}</h6>
                <p className=" text-[15px] md:text-base opacity-70 text-balance">{description}</p>
            </div>
            {subCategory && (
                <ul className=" flex flex-wrap gap-1.5">
                    {subCategory.map((item) => (
                        <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]" key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Card;