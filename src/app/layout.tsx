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


const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "Packagefy",
    description: "Packagefy.com",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
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
