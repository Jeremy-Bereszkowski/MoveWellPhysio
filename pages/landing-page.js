import React from "react";

import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LandingPageCarousel from "components/Carousel/LandingPageCarousel";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import ParaLayout from "pages-sections/landing-page/ParaLayout";
import InstagramFeed from "pages-sections/landing-page/InstagramFeed";

import {blackHrThin} from "assets/jss/coreStyles";
import LandingData from "assets/data/pages/landing-data";
import URL from "assets/strings/urls";
import {Helmet} from "react-helmet";

const useStyles = makeStyles({
    hr: {
        ...blackHrThin,
    },
    padding: {
        padding: "4vh 0",
    }
});

export default function LandingPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <Helmet>
                <script src="" crossOrigin></script>
            </Helmet>
            <LandingPageCarousel/>
            <MainContainerLayout>
                <ColumnLayout>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems="stretch"
                    >
                        <Grid item className={classes.padding}>
                            <ParaLayout actionUrl={URL.PHYSIOTHERAPY} image={LandingData.para1.image} headerString={LandingData.para1.header} bodyStringArray={LandingData.para1.body} actionString={LandingData.para1.action} actionUrl={URL.PHYSIOTHERAPY} imageLeft={false}/>
                        </Grid>
                        <Grid item className={classes.padding}>
                            <hr size={30} className={classes.hr}/>
                        </Grid>
                        <Grid item className={classes.padding}>
                            <ParaLayout actionUrl={URL.ABOUT} image={LandingData.para2.image} headerString={LandingData.para2.header} bodyStringArray={LandingData.para2.body} actionString={LandingData.para2.action} actionUrl={URL.ABOUT} imageLeft={true}/>
                        </Grid>
                        <Grid item className={classes.padding}>
                            <hr size={30} className={classes.hr}/>
                        </Grid>
                        <Grid item className={classes.padding}>
                            <InstagramFeed/>
                        </Grid>
                    </Grid>
                </ColumnLayout>
            </MainContainerLayout>
        </HeaderFooterLayout>
    )
}
