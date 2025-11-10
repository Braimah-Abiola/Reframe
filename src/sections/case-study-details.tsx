"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CaseStudyDetails = () => {
    return (
        <section className=" pt-4 md:pt-20 relative">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
                    <div className="w-full lg:w-2/3">
                        <div className=" mb-4 md:mb-10">
                            <h2 className=" text-2xl md:text-4xl font-semibold font-montserrat md:mb-2 tracking-tighter">Challenge</h2>
                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                Astrae is a Next.js landing page template and component library. By the time they engaged Reframe Labs, the marketing site had grown organically but suffered from an outdated layout, inconsistent components, and no scalable blog CMS. Despite a strong content pipeline, mobile performance and conversions lagged behind benchmarks.
                            </p>
                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                Key challenges we identified:
                            </p>
                            <ul>
                                <li>
                                    ⬥ Slow load times and heavy assets causing high bounce rates; poor Core Web Vitals on mobile.
                                </li>
                                <li>
                                    ⬥ Inconsistent branding and fragmented component styles that reduced trust and readability.
                                </li>
                                <li>
                                    ⬥ No first-class blog CMS—content updates required code deploys; limited editorial workflow and preview.
                                </li>
                                <li>
                                    ⬥ Leaky conversion funnel: unclear CTAs, multi-step sign-up, and no affiliate tracking to attribute referrals.
                                </li>
                            </ul>

                            <p className="text-foreground mt-6 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                Our goals were to elevate the user experience and growth engine with:
                            </p>
                            <ul>
                                <li>
                                    ⬥ A modern, responsive landing experience built from a cohesive component library.
                                </li>
                                <li>
                                    ⬥ A Sanity-powered blog CMS with content modeling, previews, and role-based workflows.
                                </li>
                                <li>
                                    ⬥ Conversion-optimized CTAs and a streamlined sign-up flow integrated with Lemonsqueezy.
                                </li>
                                <li>
                                    ⬥ Performance and SEO overhaul: image optimization, semantic markup, and measurable Core Web Vitals gains.
                                </li>
                            </ul>

                            <p className="text-foreground mt-4 opacity-70 mb-4 text-sm md:text-base">
                                We also had to preserve SEO equity during migration—maintaining URL structures, mapping content 1:1, and shipping redirects to avoid ranking volatility.
                            </p>

                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm md:text-base">
                                Team Astrae partnered with Reframe Labs for our blend of product-led design, high-performance Next.js builds, and pragmatic growth focus.
                            </p>
                        </div>


                        <div className="w-full h-auto aspect-video relative overflow-clip rounded-lg  mb-4 md:mb-10">
                            <Image
                                src="/assets/astrae-login.png"
                                alt="Astrae login image"
                                fill
                                className=" object-cover object-top"
                            />
                        </div>

                        <div className=" mb-4 md:mb-10">
                            <h2 className=" text-2xl md:text-4xl font-semibold font-montserrat md:mb-2 tracking-tighter">Solution</h2>
                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                We began with a 2-week discovery sprint—analytics audit, content inventory, and IA mapping—then shipped a cohesive visual system: typography, spacing, and components that express Astrae’s brand with clarity and speed.
                            </p>
                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                On the build, we upgraded to Next.js App Router, implemented route-level caching and image optimization, and introduced Sanity as the CMS. Editors now draft, preview, and schedule posts without code changes; reusable MDX-style components handle callouts, embeds, and code snippets.
                            </p>

                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                For growth, we redesigned the pricing and sign-up journey, integrated Lemonsqueezy checkout and affiliate attribution, and instrumented events for end-to-end funnel visibility. Technical SEO (schema, sitemaps, meta) plus performance budgets brought Core Web Vitals comfortably within targets.
                            </p>

                            <p className="text-foreground mt-0.5 md:text-balance opacity-70 mb-4 text-sm md:text-base">
                                Here’s a brief overview of the transformation we achieved for Astrae in each aspect:
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-32 flex flex-col gap-3 md:gap-4">
                            <div className="bg-white border rounded-lg p-4 md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/assets/astrae-icon.png"
                                        alt="Astrae logo"
                                        width={40}
                                        height={40}
                                        className="object-cover rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-medium">Astrae Design</h3>
                                        <p className="text-sm text-foreground opacity-70">www.astrae.design</p>
                                    </div>
                                </div>

                                <p className="text-sm md:text-[15px] text-foreground text-balance">
                                    Ship Your Next.js Sites 10X Faster. Astrae is a landing page template and component library built with Next.js, Tailwind CSS, Shadcn and Framer Motion.
                                </p>
                            </div>
                            <div className="bg-white border rounded-lg p-4 md:p-6">
                                <div className="space-y-3">
                                    <h4 className="font-medium">The Results</h4>
                                    <ul className="space-y-1.5 list-disc list-inside text-sm md:text-[15px] text-foreground opacity-70">
                                        <li>
                                            <span>Mobile Performance: 97/100 (from 44/100)</span>
                                        </li>
                                        <li>
                                            <span>Core Web Vitals: LCP 1.9s, CLS 0.07 (within targets)</span>
                                        </li>
                                        <li>
                                            <span>Conversion Rate: 5.4% (+184% improvement)</span>
                                        </li>
                                        <li>
                                            <span>Organic Traffic Growth: +172% in 6 months</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudyDetails;