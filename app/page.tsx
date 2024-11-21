import { CallToAction } from '@/components/landing-page/CallToAction'
import { Features } from '@/components/landing-page/Features'
import { Hero } from '@/components/landing-page/Hero'
import ReadyToStart from '@/components/landing-page/ReadyToStart'
import { Testimonials } from '@/components/landing-page/Testimonials'
import { TImeLineSteps } from '@/components/landing-page/TImeLineSteps'
import { siteLink, siteName } from '@/config'
import Script from 'next/script'

export const dynamic = "force-static";

export default async function Home() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": siteName,
    "url": siteLink,
  }

  return (
    <>
      <Script
        id={siteName}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TImeLineSteps />
      <Features />
      <Testimonials />
      <ReadyToStart />
      <CallToAction />
    </>
  )
}
