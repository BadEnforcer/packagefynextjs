import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
const footerNavigation = {
    explore: [
        {name: 'Popular', href: '/#showcase-grid'},
        {name: 'Reviews', href: '/#testimonials'},
        {name: 'Search', href: '/#hero-search'},
    ],
    support: [
        {name: 'Email', href: 'mailto:Packagefytour@gmail.com'},
        {name: 'Mobile', href: 'tel:6388029737'},
    ],
    company: [
        {name: 'About', href: '/about'},
        {name: 'Jobs', href: 'mailto:Packagefytour@gmail.com?subject=I%20am%20interested%20in%20working%20for%20your%20organization'},
        {name: 'Partners', href: '/#recognition-and-collaboration'},
    ],
    legal: [
        {name: 'Claim', href: 'mailto:Packagefytour@gmail.com?subject=[CopyrightClaim] '},
    ],
    social: [
        {
            name: 'YouTube',
            href: '#',
            icon: SiYoutube,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: IoLogoInstagram,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: BsTwitterX
        },
    ],
}


export default function Footer() {

    return (
        <footer className="bg-[#0F0F0F] mt-8" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-full lg:mx-20 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className={'relative h-16'}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-16"
                                src={'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/resources%2Fnewlogo.svg?alt=media&token=833503db-fc0a-4385-9779-58abdd059d78'}
                                alt="Packagefy"
                            />
                        </div>

                        <p className="text-white text-base">
                            Find your Best Holiday Packages.
                        </p>
                        <div className="flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href}
                                   className="text-white hover:text-stone-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true"/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="font-semibold text-white tracking-wider uppercase">Explore</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.explore.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href}
                                               className="text-base text-white/90 hover:text-stone-500">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href}
                                               className="text-base text-white/90 hover:text-stone-500">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href}
                                               className="text-base text-white/90 hover:text-stone-500">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/*<div className="mt-12 md:mt-0">*/}
                            {/*    <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>*/}
                            {/*    <ul role="list" className="mt-4 space-y-4">*/}
                            {/*        {footerNavigation.legal.map((item) => (*/}
                            {/*            <li key={item.name}>*/}
                            {/*                <a href={item.href}*/}
                            {/*                   className="text-base text-white/90 hover:text-stone-500">*/}
                            {/*                    {item.name}*/}
                            {/*                </a>*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Packagefy, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}