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
    icons: {
        icon: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78',
    },
    applicationName : 'Packagefy.com Website',
    openGraph : {
        title: 'Packagefy',
        description: "Packagefy - Find your best holiday package.",
        images: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78',
        type: 'website',
        siteName: 'Packagefy'
    },
    twitter : {
        title: 'Packagefy',
        card: 'summary_large_image',
        description: "Packagefy - Find your best holiday package.",
        images: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78',
        creator: 'packagefy',
        creatorId: 'packagefy',
    },
    authors : [{name: 'Raj Dwivedi', url: 'https://rajdwivedi.space'}],
    robots: {follow: true, index: true},

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
        <Head>
            {/* Canonical Link */}
            <link rel="canonical" href="https://packagefy.com" />

            {/* Social Media Profiles */}
            <link rel="me" href="https://www.facebook.com/Packagefy" />
            <link rel="me" href="https://www.linkedin.com/company/packagefy/" />
            <link rel="me" href="https://www.instagram.com/packagefy/" />

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

        </Head>


        <Script src="https://www.googletagmanager.com/gtag/js?l=dataLayer&amp;id=G-4L0BZGV7V7" async></Script>

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
