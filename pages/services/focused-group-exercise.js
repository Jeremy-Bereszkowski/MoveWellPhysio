import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";
import MainContainerLayout from "../../components/Layout/MainContainerLayout";

import FocusedGroupData from "../../assets/data/pages/services/focusedGroup";

import TopText from "../../pages-sections/services/focused-group-page/TopText";
import BottomText from "../../pages-sections/services/focused-group-page/BottomText";

import styles from "../../assets/jss/pages/services/focusedGroupStyles";
const useStyles = makeStyles(styles);

export default function FocusedGroupExercise(props) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <TopText/>
                <BottomText />
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
