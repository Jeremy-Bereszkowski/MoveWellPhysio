import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import MainContainerLayout from "../components/Layout/MainContainerLayout";
import ParallaxLayout from "../components/Layout/ParallaxLayout";

import TopText from "../pages-sections/about-page/TopText";
import BottomProfiles from "../pages-sections/about-page/BottomProfiles";

import AboutData from "../assets/data/pages/about";

import styles from "../assets/jss/pages/about";
const useStyles = makeStyles(styles);

export default function Physiotherapy(props) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={AboutData.core.parallaxImage} parallaxHeader={AboutData.core.parallaxHeader} parallaxBody={AboutData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <TopText />
                    </Grid>
                    <Grid item>
                        <hr size={30} className={classes.hr}/>
                    </Grid>
                    <Grid item>
                        <BottomProfiles />
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
