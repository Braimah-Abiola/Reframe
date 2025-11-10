"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getQuoteSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import SecondaryButton from "./secondary-button"

type GetQuoteFormValues = z.infer<typeof getQuoteSchema>

interface CustomQuoteDialogProps {
    trigger?: React.ReactNode;
}

export function CustomQuoteDialog({ trigger }: CustomQuoteDialogProps) {
    const [open, setOpen] = useState(false)

    const form = useForm<GetQuoteFormValues>({
        resolver: zodResolver(getQuoteSchema),
        defaultValues: {
            name: "",
            email: "",
            budget: "",
            timeline: "",
            services: [],
            message: "",
            howDidYouFindUs: "",
        },
    })

    const onSubmit = async (data: GetQuoteFormValues) => {
        console.log(data)
        // Handle form submission here
        setOpen(false)
    }

    const serviceCategories = [
        {
            category: "Product Design",
            services: ["Product Design", "Web Apps", "App Design", "Design System", "Prototyping & Ideation", "UI/UX Audits"]
        },
        {
            category: "Web Design",
            services: ["Web Design", "Landing Pages", "Marketing Website", "Framer Development", "Webflow Development"]
        },
        {
            category: "Development",
            services: ["Development", "Web Apps", "Mobile Apps", "Backend Development", "MVP"]
        },
        {
            category: "SEO",
            services: ["SEO", "Programmatic SEO", "AI SEO", "Google SEO"]
        },
        {
            category: "Branding",
            services: ["Branding", "Brand Guidelines", "Brand Assets", "Logos & Marks", "Pitch Decks", "Social Media Graphics"]
        },
        {
            category: "Other",
            services: ["Other", "Consultation", "Marketing"]
        }
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="w-full cursor-pointer">
                    {trigger || <SecondaryButton fullWidth text="Get A Quote" />}
                </div>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className=" max-h-[78vh] overflow-auto">
                <DialogHeader className=" px-4 md:px-6 pt-[1.4rem] md:pt-6 pb-2 sticky top-0 bg-gradient-to-b from-white via-white/80 to-transparent z-20">
                    <DialogTitle>Get Your Custom Quote</DialogTitle>
                    <DialogDescription>
                        Share some quick details and we&apos;ll follow up with a custom plan.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" text-sm md:text-[15px] font-medium">Name *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" text-sm md:text-[15px] font-medium">Email *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" text-sm md:text-[15px] font-medium">Allocated Budget (USD)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                                <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                                                <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                                                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                                                <SelectItem value="100k+">$100k+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="timeline"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" text-sm md:text-[15px] font-medium">Project Timeline</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select timeline" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                                                <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                                                <SelectItem value="1-2months">1-2 months</SelectItem>
                                                <SelectItem value="3-6months">3-6 months</SelectItem>
                                                <SelectItem value="6months+">6+ months</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="services"
                            render={() => (
                                <FormItem>
                                    <div className=" mb-1">
                                        <FormLabel className="text-sm md:text-[15px] font-medium">Services (select all that apply)*</FormLabel>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
                                        {serviceCategories.map((category) => (
                                            <div key={category.category} className="bg-background border rounded-xl p-1.5 flex flex-col gap-1.5">
                                                <div className=" w-full flex items-center justify-center rounded-full border bg-white py-2">
                                                    <h4 className="font-medium text-sm text-center">{category.category}</h4>
                                                </div>
                                                <div className=" bg-white border rounded-lg flex-1 flex flex-col gap-1.5 h-fit p-3">
                                                    {category.services.map((service) => (
                                                        <FormField
                                                            key={service}
                                                            control={form.control}
                                                            name="services"
                                                            render={({ field }) => {
                                                                return (
                                                                    <FormItem
                                                                        key={service}
                                                                        className="flex flex-row items-start space-y-0"
                                                                    >
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(service)}
                                                                                onCheckedChange={(checked) => {
                                                                                    return checked
                                                                                        ? field.onChange([...field.value, service])
                                                                                        : field.onChange(
                                                                                            field.value?.filter(
                                                                                                (value) => value !== service
                                                                                            )
                                                                                        )
                                                                                }}
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="text-sm text-foreground opacity-80 font-normal -mt-0.5">
                                                                            {service}
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=" text-sm md:text-[15px] font-medium">Message</FormLabel>
                                    <FormControl>
                                        <Textarea

                                            placeholder="Type your message"
                                            className="min-h-[140px] resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="howDidYouFindUs"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=" text-sm md:text-[15px] font-medium">How did you find us?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select one" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="google">Google Search</SelectItem>
                                            <SelectItem value="social-media">Social Media</SelectItem>
                                            <SelectItem value="referral">Referral</SelectItem>
                                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                                            <SelectItem value="twitter">Twitter</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </form>
                </Form>
                <DialogFooter className="w-full sticky inset-x-0 bottom-0  px-4 md:px-6 pt-10 pb-6 bg-gradient-to-b from-transparent via-white to-white">
                    <Button type="submit" className="w-full">
                        Submit Details
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}