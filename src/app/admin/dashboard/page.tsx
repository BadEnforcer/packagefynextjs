"use client"
import {ToastContainer} from "react-toastify";
import firebase from "../../../../firebase";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function AdminDashboard() {
    const router = useRouter();


    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                router.push(`/admin?message=Please Login`);
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        <>
        <ToastContainer />
        <section id={'admin-dashboard'}>
            <div className={'absolute inset-0 bg-neutral-700 flex items-center justify-center w-screen h-screen text-white'} >
                <div className={'grid grid-rows-1 lg:grid-rows-2 gap-x-[20vw] gap-y-[2vw]'}>
                    {/*ROW 1*/}
                    <div className={'row-start-1 row-span-1 grid grid-cols-3 gap-x-[1vw]'}>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                            onClick={() => {
                                router.push('dashboard/add-new-destination')
                            }}
                            >Add new Destination</button>
                        </div>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                                    onClick={() => {
                                        router.push('dashboard/edit-destination')
                                    }}
                            >Edit Destination</button>
                        </div>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                                    onClick={() => {
                                        router.push('dashboard/delete-destination')
                                    }}
                            >Delete Destination</button>
                        </div>
                    </div>

                    {/*  Row 2  */}
                    <div className={'row-start-2 row-span-1 grid grid-cols-3 gap-x-[1vw]'}>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                                    onClick={() => {
                                        router.push('dashboard/add-new-package')
                                    }}
                            >Add new Package/Trip</button>
                        </div>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                                    onClick={() => {
                                        router.push('dashboard/edit-package')
                                    }}
                            >Edit a Package/Trip</button>
                        </div>
                        <div className={'flex items-center justify-center'}>
                            <button className={'border border-white rounded-2xl h-14 w-52'}
                                    onClick={() => {
                                        router.push('dashboard/delete-package')
                                    }}
                            >Delete a Package/Trip</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}