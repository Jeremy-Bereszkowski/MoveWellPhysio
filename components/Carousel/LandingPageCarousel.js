import React from "react";
import Carousel from "react-slick";

import {makeStyles} from "@material-ui/core/styles";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import carouselStyle from "./landingPageCarouselStyle";

const useStyles = makeStyles(carouselStyle);

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <Carousel {...settings}>
            <div className={classes.imageTint}>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title}>MoveWell Physiotherapy</h1>
                    <h2 >Active, goal-focused physiotherapy.</h2>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Freedom from acute pain in daily lifestyle</h1>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Returning to optimal sports performance</h1>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Relieving pain from persistent conditions</h1>
                </div>
            </div>
        </Carousel>
    )
}
