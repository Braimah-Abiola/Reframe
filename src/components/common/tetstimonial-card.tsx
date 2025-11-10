import Image from "next/image";
import Link from "next/link";

const TestimonialCard = ({
    icon,
    quote,
    name,
    role,
    link,
    profile,
    coverImage,
    projectPreview,
}: {
    icon: string,
    quote: string,
    name: string,
    role: string,
    link: string,
    profile: string,
    coverImage: string,
    projectPreview: string,
}) => {
    return (
        <Link href={link} className=" w-full">
            <div className="story-card-wrapper w-full">
                <div className=" w-full bg-white border rounded-xl overflow-clip">
                    <div className=" w-full grid grid-cols-1">
                        <div className=" flex flex-col items-start justify-center p-8">
                            <Image width={44} height={44} className="object-contain" src={icon} alt="Company logo" />

                            <h4 className=" line-clamp-3 mt-4 text-lg md:text-xl tracking-tight leading-tight font-medium">{quote}</h4>

                            <div className="flex items-center gap-2 mt-4">
                                <div>
                                    <Image width={40} height={40} className=" rounded-full shrink-0 aspect-square flex-nowrap  object-cover" src={profile} alt={name} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className=" font-medium">{name}</span>
                                    <p className=" text-sm md:text-[15px] opacity-70 -mt-0.5">{role}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[420px] relative flex items-center justify-center">
                            <div className=" inset-0 absolute top-0 left-0 right-0 bottom-0">
                                <Image fill className="object-cover" src={coverImage} alt="Cover image" />
                            </div>

                            <div className=" w-[80%] h-[80%] relative rounded-md shadow overflow-clip">
                                <Image fill className="object-cover object-top" src={projectPreview} alt="Project preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TestimonialCard;