import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {SpeedInsights} from "@vercel/speed-insights/next"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSlickTheme.css"
import dynamic from "next/dynamic";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import { Analytics } from "@vercel/analytics/react"
const PrelineScript = dynamic(() => import('./components/PrelineScript'))
import Head from 'next/head';
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "Packagefy",
    description: "Packagefy - Find your best holiday package. Follow us on Facebook, LinkedIn, and Instagram for the latest updates.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Meta Description */}
            <meta name="description" content="Packagefy - Find your best holiday package. Follow us on Facebook, LinkedIn, and Instagram for the latest updates." />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Packagefy" />
            <meta property="og:description" content="Packagefy - Find your best holiday package." />
            <meta property="og:image" content="/src/assets/logo.png" />
            <meta property="og:url" content="https://packagefy.com" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Packagefy" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Packagefy" />
            <meta name="twitter:description" content="Packagefy - Find your best holiday package." />
            <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78" />
            <meta name="twitter:url" content="https://x.com/packagefy" />

            {/* Favicon */}
            <link rel="icon" type="image/png" href="https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78" />

            {/* Canonical Link */}
            <link rel="canonical" href="https://packagefy.com" />

            {/* RSS Feed */}
            {/*<link rel="alternate" type="application/rss+xml" title="RSS Feed for Packagefy" href="https://packagefy.com/rss.xml" />*/}

            {/* Social Media Profiles */}
            <link rel="me" href="https://www.facebook.com/Packagefy" />
            <link rel="me" href="https://www.linkedin.com/company/packagefy/" />
            <link rel="me" href="https://www.instagram.com/packagefy/" />

            {/* Additional SEO Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#4f46e5" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Packagefy",
                        "url": "https://packagefy.com",
                        "logo": "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78",
                        "sameAs": [
                            "https://www.facebook.com/Packagefy",
                            "https://www.linkedin.com/company/packagefy/",
                            "https://www.instagram.com/packagefy/"
                        ]
                    }
                    `}
            </script>

            <Script src="https://www.googletagmanager.com/gtag/js?l=dataLayer&amp;id=G-4L0BZGV7V7" async></Script>
        </Head>
        <SpeedInsights/>
        <Analytics />

        <body className={inter.className}>
        <ToastContainer/>

        {children}
        <PrelineScript/>

        </body>
        </html>

    );
}
