import React from "react";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";
import {FocusedGroupData} from "../../assets/strings/pageData";

export default function FocusedGroupExercise(props) {

    return (
        <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
        </ParallaxLayout>
    )
}
