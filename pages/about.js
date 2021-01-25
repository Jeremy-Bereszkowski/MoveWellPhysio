import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ParallaxLayout from "layouts/ParallaxLayout";
import ColumnLayout from "layouts/ColumnLayout";

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

export default function AboutPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={AboutData.core.parallaxImage} parallaxHeader={AboutData.core.parallaxHeader} parallaxBody={AboutData.core.parallaxBody}>
                <MainContainerLayout>
                    <ColumnLayout>
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
                    </ColumnLayout>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
