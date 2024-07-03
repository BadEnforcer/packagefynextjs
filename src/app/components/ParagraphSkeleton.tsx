export default function ParagraphSkeleton() {
    return (
        <>
            <p className="h-4 bg-gray-200 rounded-full w-[40%] animate-pulse"></p>

            <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            </ul>
        </>
    )
}