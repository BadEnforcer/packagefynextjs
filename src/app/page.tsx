import HeroSearch from "@/app/components/HeroSearch";
import ImageGridDisclosure from "@/app/components/ImageGridDisclosure";
import React from "react";




// interface HomePageProps {
//     children: React.ReactNode;
// }


export default function HomePage() {

    return (
        <div id={'homepage-container'}>
            <HeroSearch />
            <ImageGridDisclosure />
        </div>
    )

}