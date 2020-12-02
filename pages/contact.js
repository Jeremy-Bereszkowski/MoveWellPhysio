import React from "react";

import {Grid} from "@material-ui/core";

import MainContainerLayout from "../components/Layout/MainContainerLayout";
import ParallaxLayout from "../components/Layout/ParallaxLayout";

import OpeningHours from "../pages-sections/contact-page/OpeningHours";
import Address from "../pages-sections/contact-page/Address";
import Contact from "../pages-sections/contact-page/Contact";
import {ContactData} from "../assets/strings/pageData";

export default function ContactPage(props) {
    return (
        <ParallaxLayout parallaxImage={ContactData.core.parallaxImage} parallaxHeader={ContactData.core.parallaxHeader}>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    spacing={3}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid
                        item
                        sm={12} md={4}
                    >
                        <OpeningHours />
                    </Grid>
                    <Grid
                        item
                        sm={12} md={4}
                    >
                        <Address />
                    </Grid>
                    <Grid
                        item
                        sm={12} md={4}
                    >
                        <Contact />
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
