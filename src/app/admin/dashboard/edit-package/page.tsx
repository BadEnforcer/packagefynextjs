// @ts-nocheck

"use client"

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseError } from "@firebase/app";
import { doc, runTransaction } from "firebase/firestore";
import firebase from "../../../../../firebase";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import { uuidv4 } from "@firebase/util";

const PhotoIcon = dynamic(() => import('@heroicons/react/24/solid').then(mod => mod.PhotoIcon), { ssr: false });
const Footer = dynamic(() => import('@/app/components/Footer'), { ssr: false });
const ToastContainer = dynamic(() => import("react-toastify").then(mod => mod.ToastContainer), { ssr: false });
const CkEditorInitialized = dynamic(() => import('@/app/components/CkEditorInitialized'), { ssr: false });

type ItineraryData = {
    id: string;
    heading: string,
    description: string,
}

type Package = {
    id: string
    name: string
    coverImageUrl: string
    coverImageFilename: string,
    originalPrice: number
    discountedPrice: number
    description: string
    duration: string,
    pickupAndDropLocation: string,
    itinerary: {
        id: string,
        heading: string,
        description: string,
    }[] | []
    inclusions: string[] | []
    exclusions: string[] | []
}

interface DestinationData {
    id: string,
    name: string,
    description: string,
    coverImageUrl: string,
    packages: Package[] | [],
    fileName: string,
    created: Date,
    modified: Date,
    version: number,
    modificationInfo: {
        createdBy: string,
        lastModifiedBy: string
    }
}

export default function ModifyDestinationPage() {
    const [packageId, setPackageId] = useState<string>('')
    const [destinationId, setDestinationId] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const router = useRouter();
    const [fetchedPackageData, setFetchedPackageData] = useState<Package>()
    const [fetchedDestinationData, setFetchedDestinationData] = useState<DestinationData>()

    const [packageName, setPackageName] = useState<string>('');
    const [packageDescription, setPackageDescription] = useState<string>('');
    const [coverPhoto, setCoverPhoto] = useState<File>();
    const [originalPrice, setOriginalPrice] = useState<number>(0);
    const [discountedPrice, setDiscountedPrice] = useState<number>(0);
    const [exclusions, setExclusions] = useState<string[]>([]);
    const [inclusions, setInclusions] = useState<string[]>([]);
    const [itineraryData, setItineraryData] = useState<ItineraryData[]>([]);
    const [packageDuration, setPackageDuration] = useState<string>('');
    const [pickUpAndDropSpot, setPickUpAndDropSpot] = useState<string>('');

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (!user) {
                router.push(`/admin?message=Please Login&src=/admin/dashboard/edit-package`);
            }
        });

        return () => unsubscribe();
    }, [router]);

    function handleCkeditorChange(id: string, data: string) {
        const updatedData = itineraryData.map((item) =>
            item.id === id ? { ...item, description: data } : item
        );
        setItineraryData(updatedData);
    }

    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!destinationId || !packageId) {
            toast.info('Please fill all required details.');
            return;
        }

        setIsProcessing(true) // disable button

        try {
            // start transaction
            await runTransaction(firebase.db, async (transaction) => {
                // get destination document
                const destinationRef = doc(firebase.db, "destinations", destinationId);
                const destinationSnapshot = await transaction.get(destinationRef);

                if (!destinationSnapshot.exists()) { // if it does not exist
                    setIsProcessing(false);
                    throw new Error("No Destination Found using the given ID");
                }

                let destinationData = destinationSnapshot.data() as DestinationData;
                let availablePackages = destinationData.packages;

                if (availablePackages.length === 0) { // if length is 0
                    toast.info("This destinations has no packages.");
                    return;
                }

                // length is not 0
                let searchedPackage = availablePackages.filter((pkg) => pkg.id === packageId); // get the pkg to be deleted

                if (searchedPackage.length === 0) {
                    throw new Error("No Package found with specified package id.")
                }

                setFetchedPackageData(searchedPackage[0]);
                setFetchedDestinationData(destinationData);

                setPackageName(searchedPackage[0].name)
                setPackageDescription(searchedPackage[0].description)
                setOriginalPrice(searchedPackage[0].originalPrice)
                setDiscountedPrice(searchedPackage[0].discountedPrice)
                setItineraryData(searchedPackage[0].itinerary)
                setInclusions(searchedPackage[0].inclusions)
                setExclusions(searchedPackage[0].exclusions)
                setPackageDuration(searchedPackage[0].duration)
                setPickUpAndDropSpot(searchedPackage[0].pickupAndDropLocation)
                setIsProcessing(false) // enable buttons
            })
        } catch (err) {
            console.log(err);
            if (err instanceof FirebaseError) toast.error(err.code);
            if (err instanceof Error) toast.error(err.message);
            setIsProcessing(false)
        }
    }

    async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!packageName || !packageDescription || !packageDescription.trim().length || !pickUpAndDropSpot || !packageDuration) {
            toast.info('Please fill the details or refresh to restart.');
            return;
        }
        if (originalPrice === 0 || discountedPrice === 0) {
            toast.info('Prices cannot be Zero.');
            return;
        }
        if (originalPrice < discountedPrice) {
            toast.info('Original Price cannot be lower than Discounted price.')
            return
        }

        setIsProcessing(true)
        try {
            let newCoverImageUrl: string | undefined;

            if (coverPhoto) {
                //     upload cover image
                const storage = getStorage();
                const fileMetaData = {
                    contentType: coverPhoto.type
                }

                // Extract file extension
                const fileExtension = coverPhoto.name.split('.').pop()?.toLowerCase();
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

                const newCoverImageRef = ref(storage, `destinations/${destinationId}/package/${packageId}.${fileExtension}`);
                // upload the image
                const uploadResult = await toast.promise(uploadBytes(newCoverImageRef, coverPhoto, fileMetaData), {
                    pending: 'Uploading image...',
                    success: 'Image uploaded successfully',
                    error: 'Failed to upload image to DB.'
                })

                newCoverImageUrl = await getDownloadURL(uploadResult.ref);
            }

            // update the package
            if (!fetchedPackageData) {
                throw new Error("Tried to update details before fetching. This is a bug. Please report.")
            }

            await runTransaction(firebase.db, async (transaction) => {
                // filter the array of packages
                let filteredPackages = fetchedDestinationData?.packages.filter((pkg) => pkg.id !== packageId) || [];

                // updated package
                const updatedPackageData = {
                    ...fetchedPackageData,
                    name: packageName,
                    description: packageDescription,
                    duration: packageDuration,
                    pickupAndDropLocation: pickUpAndDropSpot,
                    coverImageUrl: newCoverImageUrl ? newCoverImageUrl : fetchedPackageData?.coverImageUrl,
                    coverImageFilename: newCoverImageUrl ? `${packageId}.${fileExtension}` : fetchedPackageData?.coverImageFilename,
                    originalPrice: originalPrice,
                    discountedPrice: discountedPrice,
                    itinerary: itineraryData,
                    inclusions: inclusions,
                    exclusions: exclusions
                } as Package;

                // push updated package into filtered packages
                filteredPackages.push(updatedPackageData);

                const destinationRef = doc(firebase.db, "destinations", destinationId);
                transaction.update(destinationRef, {
                    ...fetchedDestinationData, packages: filteredPackages
                })
                // complete
            })

            toast.success('Updated Successfully.');

            // note: if  success, button will not be re-enabled.
            // router.push('/admin/dashboard');
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
                <form onSubmit={async (e) => await handleSearch(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">

                            <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">Please input all
                                fields correctly.</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Press the search button to get details.
                            </p>


                            {/*Destination ID*/}
                            <div className="sm:col-span-4 my-10">
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
                                            value={destinationId?.toLowerCase()}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="destination-id"
                                            onChange={(e) => {
                                                const trimmedValue = e.target.value.trim(); // Trim leading and trailing whitespace
                                                if (!trimmedValue.includes(' ')) { // Check if the trimmed value contains spaces
                                                    setDestinationId(trimmedValue.toLowerCase()); // Update state with lowercase value
                                                }
                                            }}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        Destination ID is Found in url.<br/>
                                    </p>
                                </div>
                            </div>

                            {/*Package ID*/}
                            <div className="sm:col-span-4">
                                <label htmlFor="package-id"
                                       className="block text-sm font-medium leading-6 text-gray-900  ">
                                    Package ID
                                </label>
                                <div className="mt-2">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">package/</span>
                                        <input
                                            type="text"
                                            name="package-id"
                                            id="package-id"
                                            autoComplete="off"
                                            required
                                            value={packageId.toLowerCase()}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="package-id"
                                            onChange={(e) => {
                                                const trimmedValue = e.target.value.trim(); // Trim leading and trailing whitespace
                                                if (!trimmedValue.includes(' ')) { // Check if the trimmed value contains spaces
                                                    setPackageId(trimmedValue.toLowerCase()); // Update state with lowercase value
                                                }
                                            }}
                                        />

                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Also found in the url. <span
                                        className='bold text-black'>packagefy.com/destination/{destinationId?.toLowerCase() || 'destination-id'}/package/<span
                                        className={'text-indigo-400'}>{packageId || 'package-id'}</span></span>
                                    </p>
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
                            Search
                        </button>
                    </div>
                </form>

                {/*  DATA SHOWCASE FORM  */}
                {fetchedPackageData && <form onSubmit={async (e) => await handleUpdate(e)}>
                    {/*1St section*/}
                    <section className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Package</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This Package will be visible as soon as you publish the it.
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
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">packagefy.com/destination/</span>
                                            <input
                                                type="text"
                                                name="destination-id"
                                                id="destination-id"
                                                autoComplete="off"
                                                readOnly
                                                value={fetchedDestinationData?.id}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-indigo-600  focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/*Package ID*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="package-id"
                                           className="block text-sm font-medium leading-6 text-gray-900 ">
                                        Package ID
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">package/</span>
                                            <input
                                                type="text"
                                                name="package-id"
                                                id="package-id"
                                                autoComplete="off"
                                                readOnly={true}
                                                value={fetchedPackageData?.id}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-indigo-600 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />

                                        </div>
                                    </div>
                                </div>


                                {/*Package Name*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="package-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Package Name
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="package-name"
                                                id="package-name"
                                                required
                                                value={packageName}
                                                autoComplete="off"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Swiss New Year Bash"
                                                onChange={(e) => setPackageName(e.target.value ? e.target.value : '')}
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Appears on main banner and
                                        elsewhere on page. Make sure this is correctly spelled.</p>
                                </div>

                                {/*Package Description*/}
                                <div className="col-span-full">
                                    <label htmlFor="destination-description"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Package Description
                                    </label>
                                    <div className="mt-2">
                <textarea
                    id="destination-description"
                    name="destination-description"
                    rows={5}
                    value={packageDescription}
                    onChange={(e) => setPackageDescription(e.target.value ? e.target.value : '')}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={'A Brief Description'}
                />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Make sure it is not too long.
                                        Recommend size is 6-7 lines max.</p>
                                </div>

                                {/*Package Duration*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="package-duration"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Package Duration
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="package-duration"
                                                id="package-duration"
                                                required
                                                value={packageDuration}
                                                autoComplete="off"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="5 Days 4 Nights OR 5D 4N"
                                                onChange={(e) => setPackageDuration(e.target.value ? e.target.value : '')}
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Make sure it fits a format and
                                        is not too long.</p>
                                </div>

                                {/*Package Pickup and Drop Spot*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="package-pickup-and-drop-spot"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Pickup & Drop Spot
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="package-pickup-and-drop-spot"
                                                id="package-pickup-and-drop-spot"
                                                required
                                                value={pickUpAndDropSpot}
                                                autoComplete="off"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Delhi, Manali"
                                                onChange={(e) => setPickUpAndDropSpot(e.target.value ? e.target.value : '')}
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600"><b>Format :</b> &quot;Pickup
                                        Spot&quot; , &quot;Drop Spot&quot;. <br/>
                                        <span className={'text-red-600 font-bold'}>Please use comma to separate the locations else the Page will CRASH</span>
                                        <br/>
                                        If Spot are same, Write them twice and use comma.


                                    </p>
                                </div>

                                {/*Cover photo*/}
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
                                                    <span>Upload a file (optional)</span>
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
                                    <p className="mt-3 text-sm leading-6 text-gray-600">{coverPhoto ? `Current Image : ${coverPhoto.name}` : fetchedPackageData?.coverImageFilename}</p>
                                </div>

                                {/*ORIGINAL PRICE*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="original-price"
                                           className="block text-sm font-medium leading-6 text-gray-900  ">
                                    Original Price
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">INR ₹</span>
                                            <input
                                                type="number"
                                                name="original-price"
                                                id="original-price"
                                                autoComplete="off"
                                                required
                                                value={originalPrice}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="original-price"
                                                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/*Discounted PRICE*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="discounted-price"
                                           className="block text-sm font-medium leading-6 text-gray-900  ">
                                        Discounted Price
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span
                                            className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">INR ₹</span>
                                            <input
                                                type="number"
                                                name="discounted-price"
                                                id="discounted-price"
                                                autoComplete="off"
                                                required
                                                value={discountedPrice}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="discounted-price"
                                                onChange={(e) => setDiscountedPrice(Number(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </section>

                    {/*Itinerary*/}
                    <section className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="mt-10 text-2xl font-semibold leading-7 text-gray-900">Itinerary</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This items will appear in Itinerary section.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    {itineraryData.length > 0 && itineraryData.map((itinerary, i) => (
                                        <div key={i} className="flex flex-col items-start my-2">
                                            <div className="sm:col-span-4 w-full mb-4">
                                                <label htmlFor={`itinerary-${itinerary.id}`}
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Heading
                                                </label>
                                                <div className="mt-2">
                                                    <div
                                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md w-full">
                                                        <input
                                                            type="text"
                                                            name={`itinerary-${itinerary.id}`}
                                                            id={`itinerary-${itinerary.id}`}
                                                            required
                                                            value={itinerary.heading}
                                                            autoComplete="off"
                                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Swiss New Year Bash"
                                                            onChange={(e) => {
                                                                const updatedData = itineraryData.map((item, index) =>
                                                                    index === i ? {
                                                                        ...item,
                                                                        heading: e.target.value
                                                                    } : item
                                                                );
                                                                setItineraryData(updatedData);
                                                            }}
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                const newItinerary = itineraryData.filter(item => item.id !== itinerary.id);
                                                                console.log(itineraryData)
                                                                console.log(newItinerary)
                                                                setItineraryData(newItinerary);
                                                            }}
                                                            type="button"
                                                            className="translate-x-20 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="size-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-4 w-full">
                                                <label htmlFor={`description-${i}`}
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <div className="mt-2">
                                                    <div
                                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md w-full">
                                                        <div id={`description-${i}`}
                                                             className="block w-full border-0 bg-transparent">
                                                            <CkEditorInitialized
                                                                key={itinerary.id} // Use the unique id as key
                                                                initialValue={itinerary.description}
                                                                onChangeFunction={(id, data) => handleCkeditorChange(id, data)}
                                                                id={itinerary.id} // Pass the unique id instead of dataIndex
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                    <button
                                        disabled={isProcessing}
                                        onClick={() => setItineraryData((prev) => [...prev, {
                                            heading: '',
                                            description: '',
                                            id: uuidv4()
                                        }])}
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-opacity-30"
                                    >
                                        Add
                                    </button>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/*Inclusion*/}
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="mt-10 text-2xl font-semibold leading-7 text-gray-900">Inclusion</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This items will appear in inclusion section.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    {inclusions.map((inclusion, i) => (
                                        <div key={i} className="flex items-center my-2">
                                            <textarea
                                                id={`inclusion-${i}`}
                                                name={`inclusion-${i}`}
                                                rows={1}
                                                value={inclusion}
                                                onChange={(e) => {
                                                    const newInclusions = [...inclusions];
                                                    newInclusions[i] = e.target.value;
                                                    setInclusions(newInclusions);
                                                }}
                                                required
                                                className="flex-1 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder={'Bring Beer 🍺'}
                                            />
                                            <button
                                                disabled={isProcessing}
                                                onClick={() => {
                                                    const newInclusions = inclusions.filter((_, index) => index !== i);
                                                    setInclusions(newInclusions);
                                                }}
                                                type="button"
                                                className="translate-x-20 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-opacity-30"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                </svg>

                                            </button>
                                        </div>


                                    ))}
                                    <button
                                        disabled={isProcessing}
                                        onClick={() => setInclusions((prev) => [...prev, ''])}
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-opacity-30"
                                    >
                                        Add
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Exclusion*/}
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="mt-10 text-2xl font-semibold leading-7 text-gray-900">Exclusions</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This items will appear in exclusion section.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    {exclusions.map((exclusion, i) => (
                                        <div key={i} className="flex items-center my-2">
                                            <textarea
                                                id={`exclusion-${i}`}
                                                name={`exclusion-${i}`}
                                                rows={1}
                                                value={exclusion}
                                                onChange={(e) => {
                                                    const newExclusions = [...exclusions];
                                                    newExclusions[i] = e.target.value;
                                                    setExclusions(newExclusions);
                                                }}
                                                required
                                                className="flex-1 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder={'No Guns.'}
                                            />
                                            <button
                                                disabled={isProcessing}
                                                onClick={() => {
                                                    const newExclusions = exclusions.filter((_, index) => index !== i);
                                                    setExclusions(newExclusions);
                                                }}
                                                type="button"
                                                className="translate-x-20 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-opacity-30"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                </svg>

                                            </button>
                                        </div>


                                    ))}
                                    <button
                                        disabled={isProcessing}
                                        onClick={() => setExclusions((prev) => [...prev, ''])}
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-opacity-30"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Submission*/}
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
                </form>}

            </div>
            <Footer/>

        </>

    )
}
