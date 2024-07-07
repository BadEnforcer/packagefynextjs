"use client"

import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {FirebaseError} from "@firebase/app";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import firebase from "../../../../../firebase";
import {useRouter} from "next/navigation";
import {DestinationData} from "@/app/_utility/types";
import dynamic from 'next/dynamic';
import axios from "axios";
const PhotoIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.PhotoIcon));
const Footer = dynamic(() => import('@/app/components/Footer'));
const ToastContainer = dynamic(() => import("react-toastify").then(mod => mod.ToastContainer));


export default function ModifyDestinationPage() {
    const [searchId, setSearchId] = useState<string>('')
    const [destinationId, setDestinationId] = useState<string>('');
    const [destinationName, setDestinationName] = useState<string>('');
    const [destinationDescription, setDestinationDescription] = useState<string>('');
    const [coverPhoto, setCoverPhoto] = useState<File>();
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [fetchedData, setFetchedData] = useState<DestinationData>();
    const [coverImageUrl, setCoverImageUrl] = useState<string>();


    const router = useRouter();


    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                router.push(`/admin?message=Please Login&src=/admin/dashboard/edit-destination`);
            }
        });

        return () => unsubscribe();
    }, [router]);


    async function HandleIdSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsProcessing(true)

        try {
            if (!searchId) {
                toast.error("Please enter the destination ID");
                setIsProcessing(false);
                return
            }

            // check if data exists
            const docRef = doc(firebase.db, "destinations", searchId.toLowerCase());
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                toast.error('Invalid ID or Entry does not exist in Database.');
                setIsProcessing(false);
                return
            }

            // if data exists
            const destinationDataSnapshot: DestinationData = docSnap.data() as DestinationData;
            setFetchedData(destinationDataSnapshot)
            console.log(destinationDataSnapshot)

            setDestinationId(destinationDataSnapshot.id);
            setDestinationName(destinationDataSnapshot.name);
            setDestinationDescription(destinationDataSnapshot.description);
            setCoverImageUrl(destinationDataSnapshot.coverImageUrl);

            setIsProcessing(false);


        } catch (err) {
            console.log(err);
            setIsProcessing(false);
            if (err instanceof FirebaseError) return toast.error(err.code)
            if (err instanceof Error) return toast.error(err.message)
            return toast.error("An Unknown Error occurred. Please try again.");
        }


    }


    async function handleDestinationUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!destinationId || !destinationName || !destinationDescription || !destinationDescription.trim().length) {
            toast.info('You cannot make fields null. Make sure they have some value.');
            return;
        }

        setIsProcessing(true) // disable button

        let downloadUrl = coverImageUrl;
        let base64 : string | undefined;

        let fileExtension: string | undefined;

        if (coverPhoto) { // Extract file extension if file exists.
            fileExtension = coverPhoto.name.split('.').at(-1)
        }


        // SANITY CHECKS
        if (coverPhoto && !fileExtension) {
            toast.error("Unable to read file extension.");
            setIsProcessing(false)
            return;
        }

        const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

        if (fileExtension && !validExtensions.includes(fileExtension)) {
            toast.error(`File must have a valid extension: ${validExtensions.join(', ')}`);
            setIsProcessing(false)
            return;
        }



        if (coverPhoto) {
            try {
                //     upload the image to storage-database
                const storage = getStorage();

                const fileMetaData = {
                    contentType: coverPhoto.type
                }

                const newCoverImageRef = ref(storage, `destinations/${destinationId}.${fileExtension}`);

                toast.info('Uploading updated image...')
                await uploadBytes(newCoverImageRef, coverPhoto, fileMetaData);
                toast.success('Image updated successfully.');

                downloadUrl = await getDownloadURL(newCoverImageRef)

                const res = await axios.post('/api/getBase64', JSON.stringify({ imageUrl: downloadUrl  }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                base64 = res.data.base64

            } catch (err) {
                console.error(err);
                if (err instanceof FirebaseError) toast.error(err.code);
                if (err instanceof Error) toast.error(err.message);
                setIsProcessing(false) // enable button
            }
        }

        if (!fetchedData) {
            toast.error("The submit function was launched before initial data fetched. This isn't ideal, Please make a report for this Bug.");
            setIsProcessing(false);
            return
        }

        const updatedDocument = {
            ...fetchedData,
            name: destinationName,
            description: destinationDescription,
            coverImageUrl: downloadUrl,
            coverImageFilename: downloadUrl === coverImageUrl ? fetchedData.coverImageFilename : `${destinationId}.${fileExtension}`,
            coverImageBase64: base64 ? base64 : fetchedData.coverImageBase64,
            version: fetchedData.version + 1,
            fileName: downloadUrl ? `${destinationId}.${fileExtension}` : fetchedData.coverImageFilename,

            modified: new Date(),
            modificationInfo: {
                createdBy: firebase.auth.currentUser?.email,
                lastModifiedBy: firebase.auth.currentUser?.email,
            }
        };

        try {
            // uploaded information
            await updateDoc(doc(firebase.db, "destinations", destinationId), updatedDocument);

            toast.success('Data Updated successfully.');

            setTimeout(() => {
                // note: if  success, button will not be re-enabled.
                router.push('/admin/dashboard');
            }, 3000);


        } catch (err) {
            console.error(err);
            if (err instanceof FirebaseError) toast.error(err.code);
            if (err instanceof Error) toast.error(err.message);
            setIsProcessing(false) // enable button
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={async (e) => await HandleIdSearch(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            {/*ID FORM START*/}
                            <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">Please put the
                                destinationID
                                (located in the URL)</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                example: www.packagefy.com/destination/<span
                                className={'text-red-600'}>&quot;_destinationId_&quot;</span>
                            </p>


                            <div className="sm:col-span-4 mt-5">
                                <label htmlFor="destination-id"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Destination ID
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                        <input
                                            type="text"
                                            name="search-id"
                                            id="search-id"
                                            required
                                            value={searchId.toLowerCase()}
                                            autoComplete="off"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="new-york"
                                            onChange={(e) => {
                                                const trimmedValue = e.target.value.trim(); // Trim leading and trailing whitespace
                                                if (!trimmedValue.includes(' ')) { // Check if the trimmed value contains spaces
                                                    setSearchId(trimmedValue.toLowerCase()); // Update state with lowercase value
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <button
                                    disabled={isProcessing}
                                    type="submit"
                                    className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-opacity-30"
                                >
                                    Search
                                </button>
                                <button type="button"
                                        onClick={() => router.push('/admin/dashboard')}
                                        className="ml-6 text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>

                                <p className="mt-3 text-sm leading-6 text-gray-600">NO SPACES ALLOWED. ALL LETTERS ARE
                                    IN <b>lower case.</b></p>
                            </div>
                            {/*ID FORM END*/}
                        </div>
                    </div>
                </form>
            </div>

            {fetchedData && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={async (e) => await handleDestinationUpdate(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">


                            <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">Details</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Please cancel if you do not wish to change.
                                Changes will be visible in about 15 seconds after confirmation.
                            </p>

                            <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">Stats</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This Destination has <span
                                className={'font-bold'}>{fetchedData.packages.length}</span> Packages.
                                They will not be modified by this operation.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                {/*Destination ID*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="destination-id"
                                           className="block text-sm font-medium leading-6 text-gray-900  ">
                                        Destination ID (readonly) (cannot be changed once defined)
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md  sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">packagefy.com/destination/</span>
                                            <input
                                                type="text"
                                                name="destination-id"
                                                id="destination-id"
                                                autoComplete="off"
                                                required={false}
                                                value={destinationId}
                                                readOnly={true}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-red-600 placeholder:text-red-600 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="destination-id"
                                                onChange={(e) => setDestinationId(e.target.value ? e.target.value : '')}
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
                                                required={false}
                                                value={destinationName}
                                                autoComplete="off"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="New York"
                                                onChange={(e) => setDestinationName(e.target.value ? e.target.value : '')}
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Make sure it is correct. This
                                        will
                                        appear on Banner & all other places.</p>
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
                    onChange={(e) => setDestinationDescription(e.target.value ? e.target.value : '')}
                    required={false}
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
                                        Cover photo (optional to update)
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
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        onChange={(e) => {
                                                            if (e.target.files && e.target.files.length > 0) {
                                                                const file = e.target.files[0];
                                                                setCoverPhoto(file);
                                                                toast('File is valid.');
                                                            }
                                                        }}
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">{coverPhoto ? `Current Image : ${coverPhoto.name}` : null}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button"
                                onClick={() => router.push('/admin/dashboard')}
                                className="text-sm font-semibold leading-6 text-gray-900">
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
            </div>}

            {fetchedData?.packages && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={async (e) => await handleDestinationUpdate(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="mt-10 text-2xl font-semibold leading-7 text-gray-900">Packages</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                All the packages available inside this destination.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/*Destination Name*/}
                                <div className="sm:col-span-4">
                                    {fetchedData.packages.map((pkg, i) => (
                                        <a href={`/destination/${destinationId}/package/${pkg.id}`} key={i}
                                           className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-900">
                                            {pkg.name}
                                            <span className={'flex items-center gap-x-1 text-sky-400'}>
                                            Link
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
                                        </svg>
                                        </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>}

            <Footer/>
        </>

    )
}
