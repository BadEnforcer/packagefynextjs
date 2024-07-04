"use client"

import React, {useEffect, useState} from "react";


//
import {toast} from "react-toastify";
import {getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {FirebaseError} from "@firebase/app";
import {doc, getDoc, setDoc} from "firebase/firestore";
import firebase from "../../../../../firebase";
import {useRouter} from "next/navigation";


import dynamic from 'next/dynamic';

const PhotoIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.PhotoIcon));
const Footer = dynamic(() => import('@/app/components/Footer'));

const ToastContainer = dynamic(() => import("react-toastify").then(mod => mod.ToastContainer));







// type DestinationData = {
//     id: string,
//     name: string,
//     description: string,
//     coverImageUrl: string,
//     coverImageBase64: string,
// }


export default function AddNewDestinationPage() {
    const [destinationId, setDestinationId] = useState<string>();
    const [destinationName, setDestinationName] = useState<string>();
    const [destinationDescription, setDestinationDescription] = useState<string>();
    const [coverPhoto, setCoverPhoto] = useState<File>();
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (firebase.auth.currentUser) {
            console.log('User is signed in', firebase.auth.currentUser.displayName);
        } else {
            router.push('/admin?message=Please Login&src=/admin/dashboard/add-new-destination');
        }
    })


    async function handleNewDestination(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!destinationId || !destinationName || !destinationDescription || !destinationDescription.trim().length || !coverPhoto) {
            toast.info('Please fill all required fields correctly.');
            return;
        }

        // check of existing documents

        setIsProcessing(true) // disable button

        const docRef = doc(firebase.db, "destinations", destinationId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            toast.error('A Destination with Same ID Exists.')
            return
        }


        try {
            //     upload the image to storage-database
            const storage = getStorage();

            const fileMetaData = {
                contentType: coverPhoto.type
            }

            const fileExtension = coverPhoto.name.split('.').pop();
            const newCoverImageRef = ref(storage, `destinations/${destinationId}.${fileExtension}`);

            toast.info('Starting image upload...')
            await uploadBytes(newCoverImageRef, coverPhoto, fileMetaData);
            toast.success('Image uploaded successfully.');


            // uploaded information
            await setDoc(doc(firebase.db, "destinations", destinationId), {
                id: destinationId,
                name: destinationName,
                description: destinationDescription,
                coverImageUrl: await getDownloadURL(newCoverImageRef),
                created: new Date().toISOString(),
                modified: new Date().toISOString(),
                version: 0,
                modificationInfo : {
                    createdBy: firebase.auth.currentUser?.email,
                    lastModifiedBy: firebase.auth.currentUser?.email,
                }

            });

            toast.success('Successfully uploaded successfully.');

            // note: if  success, button will not be re-enabled.
            router.push('/admin/dashboard')


        } catch (err) {
            console.error(err);
            if (err instanceof FirebaseError) toast.error(err.code);
            if (err instanceof Error) toast.error(err.message);
            setIsProcessing(false) // enable button
        }
    }

    return (
        <>
            <ToastContainer />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={async (e) => await handleNewDestination(e)} >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Add a new Destination</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This destination will be visible as soon as you publish the changes.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            {/*Destination ID*/}

                            <div className="sm:col-span-4">
                                <label htmlFor="destination-id"
                                       className="block text-sm font-medium leading-6 text-gray-900  ">
                                    Destination ID
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">packagefy.com/destination/</span>
                                        <input
                                            type="text"
                                            name="destination-id"
                                            id="destination-id"
                                            autoComplete="off"
                                            required
                                            value={destinationId}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="destination-id"
                                            onChange={(e) => setDestinationId(e.target.value ? e.target.value : undefined)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/*Destination Name*/}
                            <div className="sm:col-span-4">
                                <label htmlFor="destination-id"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Destination Name
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                        <input
                                            type="text"
                                            name="destination-id"
                                            id="destination-id"
                                            required
                                            value={destinationName}
                                            autoComplete="off"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="New York"
                                            onChange={(e) => setDestinationName(e.target.value ? e.target.value : undefined)}
                                        />
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Make sure it is correct. This will
                                    appear everywhere.</p>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="destination-description"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                <textarea
                    id="destination-description"
                    name="destination-description"
                    rows={5}
                    value={destinationDescription}
                    onChange={(e) => setDestinationDescription(e.target.value ? e.target.value : undefined)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={'A Brief Description'}
                />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Make sure it is not too long.
                                    Recommend size is 6-7 lines max.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div
                                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" required={true} name="file-upload" type="file"
                                                       onChange={(e) => {
                                                           if (e.target.files !== null) {
                                                               const file = e.target.files[0];

                                                               // check file extension
                                                               const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                                                               const fileExtension = file.name.split('.').pop()?.toLowerCase();

                                                               // return fileExtension ? validExtensions.includes(fileExtension) : false;
                                                               if (!fileExtension) {
                                                                   toast.error("Unable to read file extension.");
                                                                   return
                                                               }

                                                               if (validExtensions.includes(fileExtension)) {
                                                                   setCoverPhoto(file);
                                                                   toast('File is valid.')
                                                               } else {
                                                                   toast.error(`File must have a valid extension : ${validExtensions.toString()}`);
                                                                   return
                                                               }
                                                           } else {
                                                               toast.error('File was not received successfully');
                                                               return
                                                           }

                                                       }}
                                                       className="sr-only"/>
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">{coverPhoto ? `Current Image : ${coverPhoto.name}` : null }</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        disabled={isProcessing}
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-opacity-30"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Footer />
        </div>
            </>

    )
}
