import React from "react";
import Carousel from "react-slick";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import BlockButton from "components/Buttons/BlockButton";
import BookingButtonsGroup from "components/Buttons/BookingButtonsGroup";

import LandingData from "assets/data/pages/landing-data";
import {blackColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";
import {greenHrThick, parallaxHeaderText, parallaxSubHeaderText} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    filter: {},
    imageTint: {
        backgroundSize: "contain",
        "&:before": {
            background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    imageText: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: "10",
        marginTop: "-60vh",
        textAlign: "center",
        display: "block!important",
    },
    title: {
        ...parallaxHeaderText,
        marginTop: "30px",
        minHeight: "32px",
        marginLeft: "15%",
        marginRight: "15%",
    },
    imageStyle: {
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100vh",
        maxHeight: "1600px",
        minWidth: "100%",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
    },
    greenHr: {
        ...greenHrThick,
        marginLeft: "15%",
        marginRight: "15%",
    },
    titleSubHeading: {
        ...parallaxSubHeaderText,
    },
    buttonText: {
        margin: 0,
        padding: 2
    }
});

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    function Buttons(href, buttonText) {
        if (href !== "landing") {
            return (
                <BlockButton color={"green"} href={href}>
                    <p className={classes.buttonText}>
                        <b>{buttonText}</b>
                    </p>
                </BlockButton>
            )
        } else {
            return (
                <BookingButtonsGroup />
            )
        }
    }

    function Slide(image, header, body, href, buttonText) {
        return (
            <div className={classes.imageTint} key={header}>
                <div style={{backgroundImage: "url(" + image + ")"}} className={classes.imageStyle}/>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                    className={classes.imageText}
                >
                    <Grid item>
                        <h1 className={classes.title}>
                            {header}
                        </h1>
                    </Grid>
                    <Grid item>
                        <hr size={30} className={classes.greenHr}/>
                    </Grid>
                    {body !== 0 ?
                        <Grid item>
                            <h4 className={classes.titleSubHeading}>
                                {body}
                            </h4>
                        </Grid>
                        :
                        null
                    }
                    <Grid item>
                        {Buttons(href, buttonText)}
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Carousel {...settings}>
            {LandingData.carousel.map(element => {
                return(
                    Slide(element.image, element.header, element.body, element.href, element.buttonText)
                )
            })}
        </Carousel>
    )
}
