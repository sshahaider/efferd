"use client";

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/Spinner';
import { ContactFormSchema, ContactFormTypes } from './types';
import { ArrowLeft, MailCheckIcon, MailWarningIcon } from 'lucide-react';
import { MotionDiv } from '@/components/motion';
import { sendContactEmail } from '@/lib/mail';


const ContactForm = () => {

    const form = useForm<ContactFormTypes>({
        resolver: zodResolver(ContactFormSchema)
    });

    const [mailSent, setMailSent] = useState<boolean | null>(null);

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (data: ContactFormTypes) => {
        try {
            const res = await sendContactEmail(data);
            setMailSent(res.success);
            form.reset()
            setTimeout(() => {
                setMailSent(null);
            }, 20000)
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            {mailSent !== null && (
                <MotionDiv
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="relative w-full h-full text-xs flex flex-col items-center justify-center gap-y-3 text-center"
                >
                    {mailSent ? <>
                        <MailCheckIcon className="size-8" />
                        <h2 className='text-xl md:text-2xl font-bold'>
                            Message Received!
                        </h2>
                        <p className="pt-3 text-sm tracking-wider opacity-75 px-5">
                            Thank you for reaching out!
                        </p>
                    </>
                        : <>
                            <MailWarningIcon className="size-8" />
                            <h2 className='text-xl md:text-2xl font-bold'>
                                Oops!
                            </h2>
                            <p className="pb-3 text-sm tracking-wider opacity-75 px-5">
                                Something Went Wrong!
                            </p>

                            <Button
                                variant="outline"
                                onClick={() => setMailSent(null)}
                            >
                                <ArrowLeft className='size-4' /> Try Again
                            </Button>
                        </>
                    }
                </MotionDiv>
            )}

            {mailSent === null && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Enter Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>How can we help?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            disabled={isLoading}
                                            className='h-44'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className='w-full'
                            icon={<Spinner active={isLoading} />}
                        >
                            {isLoading ? "Submitting..." : "Submit Form"}
                        </Button>
                    </form>
                </Form>
            )}
        </>
    )
}

export default ContactForm;