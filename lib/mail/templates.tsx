import * as React from "react";
import { siteLink, siteName, domain } from "@/config";
import { Body, Heading, Container, Head, Html, Img, Text, Hr, Section, Tailwind } from "@react-email/components";
import { ContactFormTypes } from "@/app/contact/types";

interface Props {
    children: React.ReactNode;
}

const Tamplate: React.FC<Props> = ({ children }) => {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white flex items-center justify-center p-8">
                    <Container className="border w-full flex items-center justify-center gap-y-2 p-5" >
                        <Img
                            src={`${siteLink}/logo.png`}
                            width="84"
                            height="24"
                            alt={siteName}
                        />
                        {children}
                        <Text className="opacity-60">
                            Best,  Regards,
                            <br />
                            Shaban Haider, at {siteName}
                        </Text>
                        <Hr />
                        <Text className="text-xs opacity-60 text-center">
                            © All Rights Reserved {domain}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html >
    )
}


// export const StartProjectTemplateUser = ({ name, phone }: StartProjectFormTypes) => (
//     <Tamplate>
//         <Heading className="text-lg my-5">Thank You for Reaching Out!</Heading>
//         <Hr />
//         <Text>Dear {name},</Text>
//         <Text className="mt-4">
//             Thank you for contacting us! We have successfully received your message, and we’re excited to learn more about your project. Our team will reach out to you via WhatsApp at the number you provided: <strong>{phone}</strong>.
//         </Text>
//         <Text className="mt-4">
//             In the meantime, feel free to reply to this email if you have any additional details you'd like to share with us, or if you have any questions.
//         </Text>
//         <Text className="mt-4">
//             We look forward to connecting with you soon!
//         </Text>
//     </Tamplate>
// );

// export const StartProjectTemplateAdmin = (data: StartProjectFormTypes) => (
//     <Tamplate>
//         <Heading className="text-lg my-5">Contact Us Message from: {siteName}</Heading>
//         <Hr />
//         <Section className="border border-primary flex items-center justify-start px-5 rounded-xl">
//             <Text>Name: {data.name}</Text>
//             <Hr />
//             <Text>Email: {data.email}</Text>
//             <Hr />
//             <Text>Phone: {data.phone}</Text>
//             <Hr />
//             <Text>planId: {data.planId}</Text>
//         </Section>

//     </Tamplate>
// );

export const ContactTemplateUser = () => (
    <Tamplate>
        <Heading className="text-lg my-5">Thank You for Contacting Us!</Heading>
        <Hr />
        <Text>Dear User,</Text>
        <Text>Thank you for contacting us through our Contact Us page. We appreciate you taking the time to reach out to us.</Text>
        <Text>We have received your message and will get back to you as soon as possible.</Text>
        <Text>Rest assured, your concerns are important to us, and we are committed to providing you with the best possible assistance.</Text>
    </Tamplate>
);

export const ContactTemplateAdmin = ({ email, message }: ContactFormTypes) => (
    <Tamplate>
        <Heading className="text-lg my-5">Contact Us Message from: {siteName}</Heading>
        <Hr />
        <Section className="border border-primary flex items-center justify-start px-5 rounded-xl">
            <Text>Email: {email}</Text>
            <Hr />
            <Text>Message: {message}</Text>
        </Section>

    </Tamplate>
);
