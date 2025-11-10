import { LucideIcon } from "lucide-react"
import Link from "next/link"

export const NavListItem = ({
    title,
    icon: Icon,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & {
    href: string
    icon?: LucideIcon
}) => {
    return (
        <li className=" group hover:bg-secondary rounded-lg py-1.5" {...props}>
            <Link href={href}>
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-foreground" />}
                    <h6 className="text-base tracking-tight leading-none line-clamp-1 text-foreground">{title}</h6>
                </div>
                <p className="text-foreground opacity-80 group-hover:opacity-100 line-clamp-2 text-[15px] leading-snug text-balance mt-1">
                    {children}
                </p>
            </Link>
        </li>
    )
}