import * as z from "zod";

export const ContactFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    message: z.string()
});

export type ContactFormTypes = z.infer<typeof ContactFormSchema>
