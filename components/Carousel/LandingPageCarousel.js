import React from "react";
import Carousel from "react-slick";

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import image1 from "assets/img/physio/layout_1.jpg";
import image2 from "assets/img/physio/reformer.jpg";
import image3 from "assets/img/physio/ring_reformer.jpg";
import image4 from "assets/img/physio/redcord.jpg";

import carouselStyle from "./landingPageCarouselStyle";
import {Grid} from "@material-ui/core";
const useStyles = makeStyles(carouselStyle);

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

    const slideData = [
        [image1, "MoveWell Physiotherapy", "Active, goal-focused physiotherapy", "Book Online",],
        [image2, "Freedom from acute pain", 0, "LEARN HOW",],
        [image3, "Return to optimal sports performance", 0, "LEARN HOW",],
        [image4, "Improve strength and conditioning", 0, "LEARN HOW",],
    ]

    function Slide(image, header, body, buttonText) {
        return (
            <div className={classes.imageTint}>
                <img src={image} alt={header + " Slide"} className={classes.imageStyle}/>
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
                        <Button className={classes.button}>
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
            {slideData.map(elements => {
                return(
                    Slide(elements[0], elements[1], elements[2], elements[3])
                )
            })}
        </Carousel>
    )
}
