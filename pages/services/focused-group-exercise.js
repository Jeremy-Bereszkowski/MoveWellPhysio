import React from "react";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";

import MainContainerLayout from "../../components/Layout/MainContainerLayout";
import FocusedGroupData from "../../assets/data/pages/services/focusedGroup";

export default function FocusedGroupExercise(props) {

    return (
        <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>

            </MainContainerLayout>
        </ParallaxLayout>
    )
}
