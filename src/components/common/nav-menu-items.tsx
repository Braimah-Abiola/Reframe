import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { services } from "@/constants";
import Link from "next/link";
import { NavListItem } from "./nav-list-item";


const NavigationMenuItems = () => {
    return (
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">About</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className=" w-full">
                    <ul className="grid gap-2 w-full md:grid-cols-3 pt-2 pb-2 px-2">
                        {services.map((service) => (
                            <NavListItem
                                key={service.title}
                                title={service.title}
                                href={service.href}
                                icon={service.icon}
                            >
                                {service.description}
                            </NavListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/work">Work</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    );
}

export default NavigationMenuItems;