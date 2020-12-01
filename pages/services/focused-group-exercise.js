import React from "react";
import ParallaxLayout from "../../components/Layout/ParallaxLayout";
import ParallaxImage from "../../assets/img/physio/sign.jpg";

export default function FocusedGroupExercise(props) {

    const parallaxHeader = "Focused Group Exercise"
    const parallaxBody = "Coming soon"

    return (
        <ParallaxLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
        </ParallaxLayout>
    )
}
