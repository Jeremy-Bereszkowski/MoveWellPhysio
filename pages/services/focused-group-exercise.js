import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import ParallaxLayout from "../../layout/ParallaxLayout";
import MainContainerLayout from "../../layout/MainContainerLayout";

import FocusedGroupData from "../../assets/data/pages/services/focusedGroup";

import TopText from "../../pages-sections/services/focused-group-page/TopText";
import BottomText from "../../pages-sections/services/focused-group-page/BottomText";

import styles from "../../assets/jss/pages/services/focusedGroupStyles";
import {Grid} from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function FocusedGroupExercise(props) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
            <MainContainerLayout>
                <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    alignContent={"center"}
                    justify={"center"}
                >
                    <Grid item>
                        <TopText/>
                    </Grid>
                    <Grid item>
                        <BottomText />
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
