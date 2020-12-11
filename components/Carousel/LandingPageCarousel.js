import React from "react";
import Carousel from "react-slick";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import LandingData from "assets/data/pages/landing-data";
import {blackColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";
import {greenHrThick, parallaxHeaderText} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

import BlockButton from "../Buttons/BlockButton";

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
        textAlign: "center",
        color: Colours.white,
    },
});

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    function Buttons(href1, href2, buttonText1, buttonText2) {
        if (href2 === undefined) {
            return (
                <BlockButton color={"green"} href={href1}>
                    <p style={{margin: 0, padding: 2}}>
                        <b>{buttonText1}</b>
                    </p>
                </BlockButton>
            )
        } else {
            return (
                <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <BlockButton color={"green"} href={href1}>
                            <p style={{margin: 0, padding: 2}}>
                                <b>{buttonText1}</b>
                            </p>
                        </BlockButton>
                    </Grid>
                    <Grid item>
                        <BlockButton color={"dark"} href={href2}>
                            <p style={{margin: 0, padding: 2}}>
                                <b>{buttonText2}</b>
                            </p>
                        </BlockButton>
                    </Grid>
                </Grid>
            )
        }
    }

    function Slide(image, header, body, href1, buttonText1, href2, buttonText2) {
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
                        {Buttons(href1, href2, buttonText1, buttonText2)}
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Carousel {...settings}>
            {LandingData.carousel.map(elements => {
                return(
                    Slide(elements[0], elements[1], elements[2], elements[3], elements[4], elements[5], elements[6])
                )
            })}
        </Carousel>
    )
}
