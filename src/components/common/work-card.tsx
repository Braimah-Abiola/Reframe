import Image from "next/image";
import Link from "next/link";

const WorkCard = ({
    title,
    image,
    link,
    video,
    icon,
    description,
    color,
    industry,
}: {
    title: string;
    description: string;
    industry?: string[];
    video?: string;
    image: string;
    link: string;
    icon: string;
    color: string;
}) => {
    return (
        <div className=" w-full group/card border rounded-lg md:rounded-xl bg-white hover:shadow">
            {video ? (
                <div style={{ backgroundColor: color }} className=" rounded-lg md:rounded-xl w-full p-2.5 md:p-3 relative">
                    <Link rel="noopener noreferrer" target="_blank" href={link}>
                        <div className="absolute hidden rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-15" style={{ backgroundColor: color }} />
                    </Link>
                    <video
                        className="w-full h-auto aspect-square rounded-lg"
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster={image}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div style={{ backgroundColor: color }} className="p-2.5 md:p-3 rounded-lg md:rounded-xl">
                    <div className="w-full relative h-[20rem] md:h-[26rem] overflow-clip rounded-md md:rounded-lg">
                        <Link rel="noopener noreferrer" target="_blank" href={link}>
                            <div className="absolute hidden rounded-md md:rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-15" style={{ backgroundColor: color }} />
                        </Link>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover object-top rounded-md md:rounded-lg scale-[1.001]"
                        />
                    </div>
                </div>
            )}
            <div className=" p-4 mb-1 mt-1">
                {industry && (
                    <ul className=" flex flex-wrap gap-1.5">
                        {industry.map((item) => (
                            <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-sm md:text-[15px]" key={item}>{item}</li>
                        ))}
                    </ul>
                )}
                <h4 className=" mt-3 text-xl font-medium tracking-tight">{title}</h4>
                <p className=" text-sm md:text-[15px] text-foreground opacity-70 pr-4">
                    {description}
                </p>

                <div className="flex items-center gap-2.5 mt-4">
                    <div className=" relative size-9 md:size-11">
                        <Image fill sizes="44px" src={icon} className="object-cover border rounded-full" alt={title} />
                    </div>
                    <div className="flex flex-col items-start">
                        <Link href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                            {link.replace(/^https?:\/\//, '')}
                        </Link>
                        <p className="font-medium text-sm md:text-[15px]">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;