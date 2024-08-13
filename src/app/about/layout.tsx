import type {Metadata} from "next";
import {Inter} from "next/font/google";
import ".././globals.css";
import React from "react";
import {SpeedInsights} from "@vercel/speed-insights/next"
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react"
const PrelineScript = dynamic(() => import('../components/PrelineScript'))
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "About us",
    description:
        "solution for all your travel needs. We make travel better and easier for people of India. Packagefy ideally caters " +
        "to a diverse range of customers to maximize its market reach and appeal." +
        "This includes:  Leisure Travelers, Business Travelers, Adventure Seekers, Budget-conscious Travelers Offering affordable options, Honeymooners, Educational Student tours.",
    icons: {
        icon: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78',
    },
    applicationName : 'Packagefy.com Website',
    openGraph : {
        title: 'About us',
        description:
            "solution for all your travel needs. We make travel better and easier for people of India. Packagefy ideally caters " +
            "to a diverse range of customers to maximize its market reach and appeal." +
            "This includes:  Leisure Travelers, Business Travelers, Adventure Seekers, Budget-conscious Travelers Offering affordable options, Honeymooners, Educational Student tours.",
        images: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.png?alt=media&token=923e7d4c-912d-48ed-99fa-946a2247f49c',
        type: 'website',
        siteName: 'Packagefy'
    },
    twitter : {
        title: 'About us - Packagefy',
        card: 'summary_large_image',
        description:
            "solution for all your travel needs. We make travel better and easier for people of India. Packagefy ideally caters " +
            "to a diverse range of customers to maximize its market reach and appeal." +
            "This includes:  Leisure Travelers, Business Travelers, Adventure Seekers, Budget-conscious Travelers Offering affordable options, Honeymooners, Educational Student tours.",
        images: 'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.png?alt=media&token=923e7d4c-912d-48ed-99fa-946a2247f49c',
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

        <Script src="https://www.googletagmanager.com/gtag/js?l=dataLayer&amp;id=G-4L0BZGV7V7" async></Script>
        <SpeedInsights/>
        <Analytics />

        <body className={inter.className}>
        {children}
        <PrelineScript/>

        </body>
        </html>

    );
}
