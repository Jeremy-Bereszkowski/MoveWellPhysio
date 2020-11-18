import React from "react";
import Carousel from "react-slick";

import {makeStyles} from "@material-ui/core/styles";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import carouselStyle from "./landingPageCarouselStyle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(carouselStyle);

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <div className={classes.imageTint}>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title}>MoveWell Physiotherapy</h1>
                    <h2 >Active, goal-focused physiotherapy.</h2>
                    <Button className={classes.button}>
                        <p2>
                            <b>Book Online</b>
                        </p2>
                    </Button>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Freedom from acute pain in daily lifestyle</h1>
                    <Button className={classes.button}>
                        <p2>
                            <b>LEARN HOW</b>
                        </p2>
                    </Button>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Returning to optimal sports performance</h1>
                    <Button className={classes.button}>
                        <p2>
                            <b>LEARN HOW</b>
                        </p2>
                    </Button>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Relieving pain from persistent conditions</h1>
                    <Button className={classes.button}>
                        <p2>
                            <b>LEARN HOW</b>
                        </p2>
                    </Button>
                </div>
            </div>
        </Carousel>
    )
}
