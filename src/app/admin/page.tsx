"use client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "../../../firebase";
import React, { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseError } from "@firebase/app";
import { useSearchParams } from 'next/navigation';

function AdminEntryContent() {
    const router  = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get('message')) {
            toast.warning(searchParams.get('message'));
        }
    }, [searchParams]);

    async function handleGoogleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        await signInWithPopup(firebase.auth, provider);

        const src = searchParams.get('src');

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
            <ToastContainer />
            <section id={'login-section'}>
                <div className={'absolute inset-0 bg-neutral-700 flex items-center justify-center w-screen h-screen'}>
                    <button
                        type={'button'}
                        className={'border border-white text-lg p-4 rounded-2xl text-white hover:outline hover:outline-blue-500 hover:font-medium hover:text-sky-400'}
                        onClick={async (e) => await handleGoogleSignIn(e)}>
                        Login with Google
                    </button>
                </div>
            </section>
        </>
    );
}

export default function AdminEntryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminEntryContent />
        </Suspense>
    );
}
