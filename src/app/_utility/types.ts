export interface Package {
    id: string
    name: string
    coverImageUrl: string
    coverImageFilename: string,
    coverImageBase64:string,
    originalPrice: number
    discountedPrice: number
    description: string
    duration: string,
    pickupAndDropLocation: string,
    itinerary:
        {
            id: string,
            heading: string,
            description: string,
        }[] | []
    inclusions: string[] | []
    exclusions: string[] | []
}

export interface DestinationData {
    id: string,
    name: string,
    description: string,
    coverImageUrl: string,
    coverImageBase64:string
    coverImageFilename: string,
    packages: Package[] | [],
    created: Date,
    modified: Date,
    version: number,
    modificationInfo: {
        createdBy: string,
        lastModifiedBy: string
    }
}
