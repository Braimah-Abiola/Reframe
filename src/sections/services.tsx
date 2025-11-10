"use client"
import { TextAnimate } from "@/components/common/animated-text";
import ServiceCard from "@/components/common/service-card";
import { Separator } from "@/components/ui/separator";
import { services } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
    return (
        <section className=" relative flex flex-col pb-12 md:pb-32">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 py-4 md:px-10">
                <div className=" flex flex-col items-center w-full h-full bg-white rounded-xl px-4 pt-12 pb-4 md:pb-20 md:pt-20">
                    <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                        <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                        <div className=" h-4 ml-2">
                            <Separator orientation="vertical" />
                        </div>
                        <span className=" ml-2 text-sm md:text-base">All Services</span>
                    </div>
                    <TextAnimate animation="blurIn" as="h2" startOnView className="mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center capitalize md:max-w-[14ch] text-balance">
                        Our Solutions for your Digital Growth
                    </TextAnimate>

                    <motion.div
                        className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12 relative z-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }
                                    }
                                }}
                            >
                                <ServiceCard
                                    title={service.title}
                                    icon={service.icon}
                                    description={service.description}
                                    href={service.href}
                                    subCategory={service.subCategory}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Services;