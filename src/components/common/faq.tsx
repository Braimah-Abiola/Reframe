"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFaqs } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";
import SecondaryButton from "./secondary-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { TextAnimate } from "./animated-text";

interface FaqProps {
    faqs?: typeof generalFaqs;
}

const Faq = ({ faqs = generalFaqs }: FaqProps) => {
    return (
        <div className=" w-full max-w-6xl px-0 md:px-0 mx-auto flex flex-col md:flex-row items-center md:items-start md:mt-20 gap-8 md:gap-12 relative z-50">
            <div className=" w-fit flex flex-col items-center md:items-start text-center md:text-start">
                <div className=" cursor-pointer w-fit rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 text-sm md:text-base">FAQ’s</span>
                </div>
                <TextAnimate animation="blurIn" as="h2" startOnView className=" mt-2 font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter capitalize md:max-w-[12ch]">
                    Frequently Asked Questions
                </TextAnimate>
                <p className="opacity-70 md:max-w-prose md:mx-auto text-balance text-sm md:text-base mt-1 md:mt-2 mb-4">
                    Got questions? We&apos;ve got answers. Navigate the complexities of digital presence with ease.
                </p>
                <div className=" hidden md:block">
                    <Link href="/pricing">
                        <SecondaryButton text="Go to Pricing" />
                    </Link>
                </div>
                <div className=" md:hidden">
                    <Link href="/pricing">
                        <Button variant="secondary">Go to Pricing</Button>
                    </Link>
                </div>
            </div>
            <motion.div
                className=" w-full p-1.5 bg-secondary border rounded-lg md:rounded-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                            ease: "easeOut",
                            staggerChildren: 0.1,
                            delayChildren: 0.2
                        }
                    }
                }}
            >
                <Accordion defaultValue="item-1" type="single" className=" flex flex-col gap-1.5" collapsible>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -20
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        >
                            <AccordionItem value={faq.value}>
                                <AccordionTrigger>{faq.title}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.description}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
}

export default Faq;