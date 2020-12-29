import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import OpeningHours from "pages-sections/contact-page/OpeningHours";
import Address from "pages-sections/contact-page/Address";
import Contact from "pages-sections/contact-page/Contact";

import ContactData from "assets/data/pages/contact";

const useStyles = makeStyles({
    spacing: {
        margin: "20px 0",
    },
});

export default function ContactPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={ContactData.core.parallaxImage} parallaxHeader={ContactData.core.parallaxHeader}>
                <MainContainerLayout>
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid item sm={12} md={4} className={classes.spacing}>
                            <OpeningHours />
                        </Grid>
                        <Grid item sm={12} md={4} className={classes.spacing}>
                            <Address />
                        </Grid>
                        <Grid item sm={12} md={4} className={classes.spacing}>
                            <Contact />
                        </Grid>
                    </Grid>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
