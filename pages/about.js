import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import MainContainerLayout from "layouts/MainContainerLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import TopText from "pages-sections/about-page/TopText";
import BottomProfiles from "pages-sections/about-page/BottomProfiles";

import AboutData from "assets/data/pages/about";

const useStyles = makeStyles({
    hr: {
        marginTop: "5vh",
        marginBottom: "5vh",
        borderTop: "2px solid black"
    },
});

export default function Physiotherapy(props) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={AboutData.core.parallaxImage} parallaxHeader={AboutData.core.parallaxHeader} parallaxBody={AboutData.core.parallaxBody}>
            <MainContainerLayout>
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
