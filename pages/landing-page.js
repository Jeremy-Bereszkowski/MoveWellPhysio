import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import LandingPageCarousel from "../components/Carousel/LandingPageCarousel";

import landingStyle from "assets/jss/pages/landingPage";
import WhatItMeans from "../pages-sections/landing-page/WhatItMeans";
import IntroVideo from "../pages-sections/landing-page/IntroVideo";
import classNames from "classnames";
import About from "../pages-sections/landing-page/About";

const useStyles = makeStyles(landingStyle);

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <div>
            <LandingPageCarousel />
            <div className={classNames(classes.section, classes.sectionGray)}>
                <div className={classes.container}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <WhatItMeans />
                        <IntroVideo />
                        <About />
                    </div>
                </div>
            </div>
        </div>
    )
}
