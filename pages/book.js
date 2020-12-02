import React from "react";

import ParallaxLayout from "../components/Layout/ParallaxLayout";
import BooktData from "../assets/data/pages/book";

export default function Book(props) {

    return (
        <ParallaxLayout parallaxImage={BooktData.core.parallaxImage} parallaxHeader={BooktData.core.parallaxHeader} parallaxBody={BooktData.core.parallaxBody}>
        </ParallaxLayout>
    )
}
