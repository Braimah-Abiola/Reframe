import Image from "next/image";
import Link from "next/link";

const ShowcaseCard = ({
    title,
    image,
    link,
    video,
    icon,
    color
}: {
    title: string;
    video?: string;
    image: string;
    link: string;
    icon: string;
    color: string;
}) => {
    return (
        <div className=" w-full group/card">
            {video ? (
                <div style={{ backgroundColor: color }} className=" rounded-lg md:rounded-xl w-full p-2.5 md:p-3 relative">
                    <Link rel="noopener noreferrer" target="_blank" href={link}>
                        <div className="absolute hidden rounded-md md:rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-15" style={{ backgroundColor: color }} />
                    </Link>
                    <video
                        className="w-full h-auto aspect-square rounded-md md:rounded-lg"
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
                    <div className="w-full relative h-auto aspect-square">
                        <Link rel="noopener noreferrer" target="_blank" href={link}>
                            <div className="absolute hidden rounded-md md:rounded-lg group-hover/card:block inset-0 z-20 hover:block cursor-pointer opacity-15" style={{ backgroundColor: color }} />
                        </Link>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover rounded-md md:rounded-lg"
                        />
                    </div>
                </div>
            )}
            <div className="flex items-center gap-2.5 mt-4">
                <div className=" size-10 md:size-11 relative">
                    <Image fill sizes="44px" src={icon} className="object-cover border rounded-full" alt={title} />
                </div>
                <div className="flex flex-col items-start">
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                        {link.replace(/^https?:\/\/(www\.)?/, '')}
                    </Link>
                    <p className="font-medium text-sm md:text-[15px]">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseCard;