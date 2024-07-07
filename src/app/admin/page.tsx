"use client"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import firebase from "../../../firebase";
import React, {useEffect, Suspense} from "react";
import {useRouter} from "next/navigation";

import {ToastContainer, toast} from 'react-toastify';
import {FirebaseError} from "@firebase/app";
import {useSearchParams} from 'next/navigation';
const SpinnerFullScreen = dynamic(() => import('@/app/components/FullScreenSpinner'), {ssr: true})

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import {Dialog, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import dynamic from "next/dynamic";



function AdminEntryContent() {
    const [open, setOpen] = useState(true)
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isCheckingAuthState, setIsCheckingAuthState] = useState<boolean>(false);

    useEffect(() => {
        if (searchParams?.get('message')) {
            toast.warning(searchParams.get('message'));
        }
    }, [searchParams]);

    useEffect(() => {
        setIsCheckingAuthState(true);
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                setIsCheckingAuthState(false);
            } else {
                router.push(`/admin/dashboard`);
            }

            setIsCheckingAuthState(false);


        });

        return () => {
            unsubscribe()
        };
    }, [router]);


    async function handleGoogleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        await signInWithPopup(firebase.auth, provider);

        const src = searchParams?.get('src');

        if (src) {
            router.push(src);
        } else {
            router.push('/admin/dashboard');
        }

        try {
            // Your try block code here
        } catch (err) {
            if (err instanceof FirebaseError) toast.error(err.code);
            if (err instanceof Error) toast.error(err.message);
        }
    }

    return (
        <>
            <ToastContainer/>
            <section id={'login-section'}>
                <div className={'absolute inset-0 bg-neutral-700 flex items-center justify-center w-screen h-screen'}>
                    <Transition show={open} as={Fragment}>
                        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                </TransitionChild>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                        <div>
                                            <div
                                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                                </svg>

                                            </div>
                                            <div className="text-center sm:mt-5">
                                                <DialogTitle as="h3"
                                                             className="text-lg leading-6 font-medium text-gray-900">
                                                    Authentication Required!
                                                </DialogTitle>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Please verify your credentials by signing in.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                disabled={isCheckingAuthState}
                                                className="inline-flex disabled:bg-opacity-50 justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                onClick={async (e) => await handleGoogleSignIn(e)}
                                            >
                                                {isCheckingAuthState ?  'Hold on...' : 'Login'}
                                            </button>
                                        </div>
                                    </div>
                                </TransitionChild>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </section>
        </>
    );
}

export default function AdminEntryPage() {
    return (
        <Suspense fallback={<SpinnerFullScreen/>}>
            <AdminEntryContent/>
        </Suspense>
    );
}
