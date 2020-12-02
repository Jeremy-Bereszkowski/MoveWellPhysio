import React from "react";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";

import {PhysioLedRehabData} from "../../assets/strings/pageData";

export default function PhysioLedRehab(props) {
    return (
        <ParallaxLayout parallaxImage={PhysioLedRehabData.core.parallaxImage} parallaxHeader={PhysioLedRehabData.core.parallaxHeader} parallaxBody={PhysioLedRehabData.core.parallaxBody}>
        </ParallaxLayout>
    )
}
