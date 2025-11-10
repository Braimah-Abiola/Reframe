"use client"

import { Separator } from "@/components/ui/separator";
import { quoteSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { TextAnimate } from "@/components/common/animated-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-line";
import { Textarea } from "@/components/ui/textarea-line";



const CtaForm = () => {
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()

    const form = useForm<z.infer<typeof quoteSchema>>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            email: "",
            name: "",
            serviceType: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof quoteSchema>) {

        startTransition(() => {
            console.log(values)
            form.reset()
        })
    }

    // Don't render on contact page
    if (pathname === '/contact') {
        return null
    }

    return (
        <section className=" relative flex flex-col">
            <div className=" absolute z-10 inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-10 pb-20 relative">
                <div className="w-full h-full bg-primary rounded-lg md:rounded-xl px-4 py-10 md:py-32">
                    <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 z-50 relative">
                        <div className=" w-full flex flex-col items-center md:items-start justify-between h-full pb-8 md:pb-20 gap-4 md:gap-0">
                            <div className=" relative size-14 md:size-20 overflow-clip border border-white/50 rounded-2xl">
                                <Image fill src="/assets/icon.png" alt="Reframe Labs Icon" className=" object-cover" />
                            </div>

                            <div className=" text-white">
                                <TextAnimate animation="blurInUp" as="h3" startOnView className="font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center md:text-start capitalize text-balance md:max-w-[16ch]">
                                    Get Your Project Estimate For Free
                                </TextAnimate>
                                <p className=" text-white/70 mt-1 md:mt-2 text-[15px] md:text-base text-center md:text-start">
                                    We usually respond within a few days.
                                </p>
                            </div>
                        </div>

                        <div className=" w-full h-full">
                            <Form {...form}>
                                <motion.form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className=" relative h-fit space-y-4 md:space-y-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.15,
                                                delayChildren: 0.2
                                            }
                                        }
                                    }}
                                >
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 30,
                                                scale: 0.95
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className=" text-white"><span>01.</span>What&apos;s your name? <span className="data-[error=true]:text-destructive">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input disabled={isPending} placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 30,
                                                scale: 0.95
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className=" text-white"><span>02.</span>What&apos;s your email? <span className="data-[error=true]:text-destructive">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input disabled={isPending} placeholder="johndoe@gmail.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className=" md:col-span-2"
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 30,
                                                scale: 0.95
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="serviceType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className=" text-white"><span>03.</span>What services are you looking for? <span className="data-[error=true]:text-destructive">*</span></FormLabel>
                                                    <FormControl>
                                                        <Input disabled={isPending} placeholder="Web Design, MVP, Web SEO..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className=" md:col-span-2"
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 30,
                                                scale: 0.95
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className=" text-white"><span>04.</span>Your Message <span className="data-[error=true]:text-destructive">*</span></FormLabel>
                                                    <FormControl>
                                                        <Textarea disabled={isPending} placeholder="Hello, can you help me with ..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className=" w-full flex flex-col md:items-start items-center"
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 30,
                                                scale: 0.95
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    >
                                        <Button variant="secondary" className=" w-fit">Submit & Book A Call</Button>
                                    </motion.div>
                                </motion.form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaForm;