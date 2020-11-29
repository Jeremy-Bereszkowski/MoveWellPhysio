import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import LandingPageCarousel from "../components/Carousel/LandingPageCarousel";

import WhatItMeans from "../pages-sections/landing-page/WhatItMeans";
import IntroVideo from "../pages-sections/landing-page/IntroVideo";
import About from "../pages-sections/landing-page/About";

import landingStyle from "assets/jss/pages/landingPage";
import GridItem from "../components/Grid/GridItem";
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
                        <hr size={30} className={classes.hr}/>
                        <IntroVideo />
                        <hr size={30} className={classes.hr}/>
                        <About />
                    </div>
                </div>
            </div>
        </div>
    )
}
