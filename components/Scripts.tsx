import Script from 'next/script'
import React from 'react'

const Scripts = () => {
  return <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-362476924"></script>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
    />
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=AW-362476924"
    />

    <Script id="ga-script" strategy="lazyOnload">
      {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
				  page_path: window.location.pathname,
				});
				`}
    </Script>

    <Script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-362476924');
				`}
    </Script>
  </>

}

export default Scripts
