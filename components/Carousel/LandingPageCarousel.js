import React from "react";
import Carousel from "react-slick";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import LandingData from "assets/data/pages/landing-data";
import {blackColor, grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import {greenHrThick, parallaxHeaderText} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

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
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        minWidth: "auto",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".7125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover": {
            color: whiteColor,
            backgroundColor: grayColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.2)"
        },
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
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    function Slide(image, header, body, buttonText, href) {
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
                        <Button className={classes.button} href={href}>
                            <p>
                                <b>{buttonText}</b>
                            </p>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Carousel {...settings}>
            {LandingData.carousel.map(elements => {
                return(
                    Slide(elements[0], elements[1], elements[2], elements[3], elements[4])
                )
            })}
        </Carousel>
    )
}
