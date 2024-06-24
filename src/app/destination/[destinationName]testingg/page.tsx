export default function Page({ params }: { params: { destinationName: string } }) {
    return <div>My Destination: {params.destinationName}</div>
}