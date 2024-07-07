"use client"
import {ToastContainer} from "react-toastify";
import firebase from "../../../../firebase";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Link from "next/link";
import SpinnerFullScreen from "@/app/components/FullScreenSpinner";
const links = [
    {
        href: 'dashboard/add-new-destination',
        title: 'Add Destination',
    },
    {
        href: 'dashboard/edit-destination',
        title: 'Edit Destination',
    },
    {
        href: 'dashboard/delete-destination',
        title: 'Remove Destination',
    },
    {
        href: 'dashboard/add-new-package',
        title: 'Add Package',
    },
    {
        href: 'dashboard/edit-package',
        title: 'Edit Package',
    },
    {
        href: 'dashboard/delete-package',
        title: 'Remove Package',
    },

]
export default function AdminDashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                router.push(`/admin?message=Please Login`);
            }
        });
        return () => unsubscribe();
    }, [router]);

    if (isLoading) return <SpinnerFullScreen />

    return (
        <>
            <ToastContainer/>
            <section id={'admin-dashboard'}>
                <div
                    className={' bg-neutral-200 flex items-center justify-center w-screen h-screen text-white'}>
                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {links.map((link, index) => (
                            <li key={index}
                                className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                <Link href={link.href}
                                      onClick={() => setIsLoading(true)}
                                      className="w-full flex items-center justify-center p-6 space-x-6 rounded-lg hover:ring hover:ring-indigo-700 focus:scale-110 ">
                                    <p className="mt-1 text-gray-500 text-sm truncate">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}