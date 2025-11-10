
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight, BugOff, CodeXml, FileSearch, ServerCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WebDevelopmentServices = () => {
    return (
        <section className=" relative flex flex-col">
            <div className="hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 py-20 md:py-24">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-xl px-4 md:px-0 pt-12 pb-4 md:pt-20 md:pb-20">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">Web Dev Services</span>
                    </div>
                    <h2 className=" hidden md:block mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Our Web Development <br /> Services for your Business
                    </h2>
                    <h2 className=" md:hidden mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize">
                        Our Web Dev Services
                    </h2>

                    <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 relative z-20">
                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <CodeXml className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">Custom Development</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        Tailored web solutions built from scratch to fit your business goals. Fast, scalable, and optimized for performance.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        B2B
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Dashboards
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Enterprise Grade
                                    </li>
                                </ul>

                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/custom-dev.png" alt="Custom Development" />
                                </div>
                            </div>
                        </Link>


                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <ArrowLeftRight className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">React Migration</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        Seamless migration from outdated frameworks or static sites to modern, component-driven React environments.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Migrate to React
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Migrate to Next.js
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Figma to React
                                    </li>
                                </ul>
                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/migrate-react.png" alt="Migration to react" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <ServerCog className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">Deployment & Security</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        End-to-end deployment with performance optimization, version control, and best-in-class security practices.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        CI/CD Setup
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Server Optimization
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Authentication & HTTPS
                                    </li>
                                </ul>
                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/hosting-security.png" alt="Hosting and Security" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <FileSearch className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">Programmatic SEO</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        Data-driven SEO solutions powered by automation and modern frameworks to scale organic visibility and reach.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Dynamic Page Generation
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Schema Optimization
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Automated Content
                                    </li>
                                </ul>
                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/web-seo.png" alt="Web SEO" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <BugOff className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">Maintenance & Support</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        Ongoing updates, feature enhancements, and technical support to keep your product stable and evolving.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Bug Fixes
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Performance Monitoring
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Feature Upgrades
                                    </li>
                                </ul>
                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/maintenance.png" alt="Maintenance" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/" className=" cursor-pointer w-full h-full">
                            <div className=" bg-background/50 hover:bg-background cursor-pointer border rounded-lg h-full flex flex-col justify-between p-4 md:p-6">
                                <div className=" mb-4">
                                    <FileSearch className=" size-6 md:size-7 mb-2 md:mb-4" />
                                    <h6 className=" font-medium text-[15px] md:text-lg">API Development</h6>
                                    <p className=" text-[15px] md:text-base opacity-70 text-balance">
                                        Secure and reliable APIs designed to connect, automate, and extend your product’s capabilities across platforms.
                                    </p>
                                </div>
                                <ul className=" flex flex-wrap gap-1.5">
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        RESTful APIs
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        GraphQL APIs
                                    </li>
                                    <li className=" bg-white border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground/70 text-sm md:text-[15px]">
                                        Third-party Integrations
                                    </li>
                                </ul>
                                <div className=" w-full h-auto aspect-video relative mt-4">
                                    <Image fill className=" object-contain" src="/assets/api.png" alt="API Development" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevelopmentServices;