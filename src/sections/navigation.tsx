"use client"

import NavigationMenuItems from "@/components/common/nav-menu-items";
import PrimaryButton from "@/components/common/primary-button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navigation = () => {
    const pathname = usePathname();

    if (pathname === '/contact') {
        return null
    }

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 3 }}
                className=" w-full h-fit md:top-0 bg-transparent z-[99999] pt-4 hidden md:block fixed">
                <div className=" relative w-full h-full">
                    <aside className=" absolute inset-x-0 top-1/2 -translate-y-1/2 left-0 right-0 z-10">
                        <Separator orientation="horizontal" className=" w-full" />
                    </aside>
                    <NavigationMenu className=" w-full max-w-6xl mx-auto" viewport={true}>
                        <nav className=" w-full bg-white border pl-2.5 pr-2.5 py-2 rounded-lg z-50 relative flex items-center justify-between">
                            <Link href="/">
                                <div className=" relative size-10">
                                    <Image fill src="/assets/icon.png" className=" object-cover" alt="Reframe Labs Logo" />
                                </div>
                            </Link>
                            <NavigationMenuItems />

                            <Link href="/contact">
                                <PrimaryButton text="Book A Call" />
                            </Link>
                        </nav>
                    </NavigationMenu>
                </div>
            </motion.header>
        </>
    );
}

export default Navigation;