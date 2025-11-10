"use client"

import { TextAnimate } from "@/components/common/animated-text";
import { companyLogos } from "@/constants";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const CompanyLogos = () => {
    return (
        <section className=" w-full py-8 z-20 relative flex flex-col items-center">
            <TextAnimate startOnView className="font-medium text-base text-center text-balance px-4 md:px-0" animation="blurInUp" as="h6">
                Trusted by 24+ Startups and Businesses for Design and Development
            </TextAnimate>
            <div className=" px-4 md:px-0 max-w-6xl mx-auto w-full flex flex-col items-center mt-4">
                <div className="grid grid-cols-2 md:grid-cols-6 w-full relative group">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className={`w-full border bg-background py-2.5 flex items-center justify-center ${index === 0 ? ' rounded-tl-lg md:rounded-tl-xl' :
                            index === 5 ? 'md:rounded-tr-xl' :
                                index === 1 ? 'rounded-tr-lg md:rounded-tr-none' :
                                    index === 22 ? 'rounded-bl-lg md:rounded-bl-none' :
                                        index === 18 ? 'md:rounded-bl-xl' : ''
                            }`}>
                            <motion.div
                                className="relative flex items-center justify-center object-contain"
                                style={{
                                    width: `${logo.width}px`,
                                    height: `${logo.height}px`,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    fill
                                    quality={100}
                                    src={`/companies/${logo.image}`}
                                    alt={logo.name}
                                    sizes={`${Math.max(logo.width, logo.height)}px`}
                                    className="object-contain scale-90 md:scale-100"
                                />
                            </motion.div>
                        </div>
                    ))}
                    <div className=" w-full border py-2 px-2 rounded-br-lg md:rounded-br-xl">
                        <Link href="/contact" className=" h-full">
                            <div className=" text-sm md:text-[15px] bg-background border border-dashed hover:border-none hover:bg-primary hover:text-white cursor-pointer border-primary w-full h-full text-primary font-medium gap-1 rounded-md md:rounded-md flex items-center justify-center">
                                <p>Your Logo</p> <Plus className=" size-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyLogos;