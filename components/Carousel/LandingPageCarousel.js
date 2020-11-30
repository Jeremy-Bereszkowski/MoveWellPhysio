import React from "react";
import Carousel from "react-slick";

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import image1 from "assets/img/physio/layout_1.jpg";
import image2 from "assets/img/physio/reformer.jpg";
import image3 from "assets/img/physio/ring_reformer.jpg";
import image4 from "assets/img/physio/redcord.jpg";

import carouselStyle from "./landingPageCarouselStyle";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(carouselStyle);

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <div className={classes.imageTint}>
                <img src={image1} alt="First slide" className={classes.imageStyle}/>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item style={{display: "flex"}} justify={"center"} alignContent={"center"}>
                        <h1 className={classes.title}>MoveWell Physiotherapy</h1>
                    </Grid>
                    <Grid item>
                        <hr size={30} className={classes.greenHr}/>
                    </Grid>
                    <Grid item style={{display: "flex"}} justify={"center"} alignContent={"center"}>
                        <h4 className={classes.titleSubHeading}>
                            Active, goal-focused physiotherapy
                        </h4>
                    </Grid>
                </Grid>
                {/*<div className={classes.imageText}>
                    <h1 className={classes.title}>MoveWell Physiotherapy</h1>
                    <h2 style={{fontSize: "2.5vw"}}>Active, goal-focused physiotherapy</h2>
                    <Button className={classes.button}>
                        <p2>
                            <b>Book Online</b>
                        </p2>
                    </Button>
                </div>*/}
            </div>
            <div className={classes.imageTint}>
                <img src={image2} alt="First slide" className={classes.imageStyle}/>
                <div className={classes.imageText} style={{marginBottom: "30vh",}}>
                    <h1 className={classes.title2}>Freedom from acute pain</h1>
                    <Button className={classes.button}>
                        <p2>
                            <b>LEARN HOW</b>
                        </p2>
                    </Button>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image3} alt="First slide" className={classes.imageStyle}/>
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Return to optimal sports performance</h1>
                    <Button className={classes.button}>
                        <p2>
                            <b>LEARN HOW</b>
                        </p2>
                    </Button>
                </div>
            </div>
            <div className={classes.imageTint}>
                <img src={image4} alt="First slide" className={classes.imageStyle}/>
                <div className={classes.imageText}>
                    <h1 className={classes.title2}>Improve strength and conditioning</h1>
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
