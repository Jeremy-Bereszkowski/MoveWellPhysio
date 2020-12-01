import React from "react";

import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LandingPageCarousel from "../components/Carousel/LandingPageCarousel";
import MainContainerLayout from "../components/Layout/MainContainerLayout";

import IntroVideo from "../pages-sections/landing-page/IntroVideo";
import ParaLayout from "../pages-sections/landing-page/ParaLayout";

import Para1Image from "../assets/img/physio/clients/client_11.jpg"
import Para2Image from "../assets/img/physio/clients/client.jpg"

import landingStyle from "assets/jss/pages/landingPage";
const useStyles = makeStyles(landingStyle);

export default function LandingPage(props) {
    const classes = useStyles();

    const Para1Header = "What it means to move well"
    const Para1Body = [
        "You want to exercise throughout your life. Exercise is a modality for a healthy and happy life.",
        "Your treatment is improving your capacity to do the exercise and movement that's important to you.",
        "Your recovery means being able to run that 10km, go for that walk, perform in your sport.",
        "We help you take the next step towards living an active lifestyle with pain-free movement and exercise.",
    ]
    const Para1Action = "Our Physiotherapy Approach"

    const Para2Header = "About Movewell"
    const Para2Body = [
        "We're experts in physiotherapy and exercise.",
        "We take care to understand you first, designing your recovery around your needs and fitness goals.",
        "MoveWell uses an active style of treatment that prioritises pain relief through improved function.",
        "Our team believes in the value of helping you develop a lifestyle that prevents pain.",
    ]
    const Para2Action = "More About Movewell"

    return (
        <div>
            <LandingPageCarousel/>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    direction={"row"}
                    alignContent={"center"}
                    justify={"center"}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ParaLayout image={Para1Image} headerString={Para1Header} bodyStringArray={Para1Body} actionString={Para1Action} actionUrl={URL.PHYSIOTHERAPY} imageLeft={false}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <hr size={30} className={classes.hr}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <IntroVideo />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <hr size={30} className={classes.hr}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ParaLayout image={Para2Image} headerString={Para2Header} bodyStringArray={Para2Body} actionString={Para2Action} actionUrl={URL.ABOUT} imageLeft={true}/>
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </div>
    )
}
