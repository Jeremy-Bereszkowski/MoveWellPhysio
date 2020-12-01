import React from "react";

import ParallaxLayout from "../components/Layout/ParallaxLayout";
import ParallaxImage from "../assets/img/physio/sign.jpg";

export default function Book(props) {

    const parallaxHeader = "Book Online"
    const parallaxBody = "Coming soon"

    return (
        <ParallaxLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
        </ParallaxLayout>
    )
}
