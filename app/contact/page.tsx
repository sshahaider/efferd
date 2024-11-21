import { siteName } from "@/config"
import ContactForm from "./Form"
import GridBackGround from "@/components/ui/GridBackGround"
import { Card, CardContent } from "@/components/ui/card"
import { PlusIcon } from "lucide-react"

const meta = {
    title: `Contact - ${siteName}`,
    dec: "If you have any questions regarding our Services or need help, please fill out the form here.",
    link: `/contact`
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: [`Contact`, siteName],
        alternates: {
            canonical: meta.link,
        },
        openGraph: {
            title: meta.title,
            description: meta.dec,
            url: meta.link,
            locale: 'en-US',
            siteName: siteName,
            type: 'website',
        },
    }
}

export default async function Page() {
    return (
        <div className="relative pb-48">
            <GridBackGround />
            <div className="mx-2 md:mx-auto max-w-2xl py-10 px-4 md:px-10 lg:px-24">
                <div className="w-full h-full py-12 flex flex-col items-center justify-center mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mt-5">
                      Contact With Us
                    </h1>
                    <p className="text-center mt-5 opacity-75 text-sm">
                    If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.
                    </p>
                </div>
                <Card className="w-full p-2 relative rounded-none bg-background min-h-[400px] h-full flex justify-center items-center">
                    <PlusIcon className="absolute h-6 w-6 -top-3 -left-3" />
                    <PlusIcon className="absolute h-6 w-6 -top-3 -right-3" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3" />
                    <CardContent className="h-full w-full p-4">
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}