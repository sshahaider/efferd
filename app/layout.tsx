import "./globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { DM_Sans } from "next/font/google";

import { domain, siteLink, siteName } from "@/config";
import Scripts from "@/components/Scripts";
import LandingHeader from "@/components/header/LandingHeader";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });


const meta = {
	title: `${siteName} - Next-Level Web Development Services`,
	dec: `We design and build modern, high-performance websites tailored to your business goals`,
	link: siteLink + "/"
}


export const metadata: Metadata = {
	title: meta.title,
	description: meta.dec,
	metadataBase: new URL(siteLink),
	applicationName: siteName,
	keywords: [siteName, domain, "Web Development Services"],
	publisher: siteName,
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
	},
	alternates: {
		canonical: meta.link,
	},
	openGraph: {
		title: meta.title,
		description: meta.dec,
		url: meta.link,
		locale: 'en-US',
		siteName,
		type: 'website',
	},
}
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Scripts />
			<head />
			<body
				className={clsx(
					"dark min-h-screen antialiased w-full",
					dmSans.className
				)}
			>
				<LandingHeader />
				<main className='-mt-[60px]'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}