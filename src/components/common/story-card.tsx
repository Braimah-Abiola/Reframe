import Image from "next/image";
import Link from "next/link";

const StoryCard = ({
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
                <div className=" w-full bg-white border rounded-lg md:rounded-xl overflow-clip">
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2">
                        <div className=" flex flex-col items-start justify-center p-6 md:p-8">
                            <div className=" size-10 md:size-12 relative">
                                <Image fill className="object-contain" src={icon} alt="Company logo" />
                            </div>

                            <h4 className=" mt-4 md:mt-8 text-lg md:text-xl tracking-tight leading-tight text-balance font-medium">{quote}</h4>

                            <div className="flex items-center gap-2 mt-4 md:mt-8">
                                <div>
                                    <div className=" size-9 md:size-11 relative">
                                        <Image fill className=" rounded-full shrink-0 aspect-square flex-nowrap  object-cover" src={profile} alt={name} />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className=" text-[15px] md:text-base font-medium">{name}</span>
                                    <p className=" text-sm md:text-[15px] opacity-70 -mt-0.5">{role}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[340px] md:h-[480px] relative flex items-center justify-center">
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

export default StoryCard;