import { z } from "zod";

export const quoteSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, {
      message: "Please enter your full name,",
    }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.string().min(2, { message: "Please enter service type." }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(200, {
      message: "Message must not be longer than 200 characters.",
    }),
});

export const getQuoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  services: z
    .array(z.string())
    .min(1, { message: "Please select at least one service." }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
  howDidYouFindUs: z
    .string()
    .min(1, { message: "Please select how you found us." }),
});

export const newsletterSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});
