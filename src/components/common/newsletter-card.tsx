"use client"

import { zodResolver } from "@hookform/resolvers/zod";
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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema } from "@/schemas";



const NewsletterCard = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof newsletterSchema>) {

        startTransition(() => {
            console.log(values)
            form.reset()
        })
    }
    return (
        <div className="bg-white border rounded-lg p-4 md:p-6">
            <h4 className="font-semibold tracking-tight leading-tight font-montserrat text-xl md:text-2xl text-balance">Design & Development tips and offers straight to your inbox</h4>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input disabled={isPending} placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className=" w-full mt-2.5">Subscribe</Button>
                </form>
            </Form>

            <p className=" text-xs md:text-sm text-foreground mt-4 opacity-70">
                By subscribing, you agree to our Privacy Policy. You can always unsubscribe from our inbox anytime you want.
            </p>
        </div>
    );
}

export default NewsletterCard;