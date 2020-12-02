import React from "react";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";
import PhysioLedRehabData from "../../assets/data/pages/services/physioLdRehab";

export default function PhysioLedRehab(props) {
    return (
        <ParallaxLayout parallaxImage={PhysioLedRehabData.core.parallaxImage} parallaxHeader={PhysioLedRehabData.core.parallaxHeader} parallaxBody={PhysioLedRehabData.core.parallaxBody}>
        </ParallaxLayout>
    )
}
