import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import LandingHeader from "../components/Header/LandingHeader";
import LandingHeaderLinks from "../components/Header/LandingHeaderLinks";
import LandingPageCarousel from "../components/Carousel/LandingPageCarousel";

import carouselStyle from "assets/jss/pages/landingPage";

const useStyles = makeStyles(carouselStyle);

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <div>
            <LandingHeader
                color="transparent"
                brand="MoveWell Physiotherapy"
                links={<LandingHeaderLinks dropdownHoverColor="black" />}
                fixed
                changeColorOnScroll={{
                    height: 300,
                    color: "black"
                }}
            />
            <LandingPageCarousel />
        </div>
    )
}
