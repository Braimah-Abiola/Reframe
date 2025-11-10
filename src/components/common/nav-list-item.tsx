import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { NavigationMenuLink } from "../ui/navigation-menu"

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
        <li className=" group hover:bg-secondary rounded-lg p-1.5" {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5" />}
                        <h6 className="text-sm md:text-[15px] leading-none font-medium">{title}</h6>
                    </div>
                    <p className="text-foreground opacity-70 group-hover:opacity-100 line-clamp-2 text-sm leading-snug text-balance">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}