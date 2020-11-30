import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ParallaxImage from "../assets/img/physio/sign.jpg"
import ServicesLayout from "../components/Layout/ServicesLayout";

import styles from "../assets/jss/pages/about";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "About Movewell"
    const parallaxBody = "Active, goal-focused physiotherapy"

    return (
        <ServicesLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
            >
                <Grid
                    item
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h3 className={classes.blackBodyText}>
                                MoveWell are experts in physiotherapy
                            </h3>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h3 className={classes.blackBodyText}>
                                To help you overcome your pain, we take considerable care to understand your history, capabilities and goals first. We design rehabilitation plans that are realistic for you and are supported by the appropriate education.
                            </h3>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h3 className={classes.blackBodyText}>
                                We offer a range of services to rehabilitate injury and pain, develop physical wellness and performance. Our team believes in the value of helping you develop a lifestyle that prevents pain
                            </h3>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h3 className={classes.blackBodyText}>
                                Our recovery plans place ultimate importance on the achievement of your goals.
                            </h3>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid
                            item
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h2 className={classes.greenHeaderText}>
                                Our Staff
                            </h2>
                        </Grid>
                        <Grid
                            item
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <Grid
                                container
                                direction={"row"}
                                justify={"center"}
                                alignContent={"center"}
                            >
                                <Grid
                                    item
                                    md={4}
                                    justify={"center"}
                                    alignContent={"center"}
                                >
                                </Grid>
                                <Grid
                                    item
                                    md={4}
                                    justify={"center"}
                                    alignContent={"center"}
                                >
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ServicesLayout>
    )
}
