import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ParallaxImage from "../assets/img/physio/sign.jpg"
import ServicesLayout from "../components/Layout/ServicesLayout";

import YashaHeadshot from "../assets/img/physio/yasha_headshot.jpg"
import ChrisHeadshot from "../assets/img/physio/chris headshot.jpg"

import styles from "../assets/jss/pages/about";
import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import GridContainer from "../components/Grid/GridContainer";
import {MapContainer} from "../util/google";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "About Movewell"
    const parallaxBody = "Active, goal-focused physiotherapy"

    return (
        <ServicesLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody} maxWidth={"lg"}>
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
                            <h4 className={classes.blackBodyText}>
                                MoveWell are experts in physiotherapy
                            </h4>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h4 className={classes.blackBodyText}>
                                To help you overcome your pain, we take considerable care to understand your history, capabilities and goals first. We design rehabilitation plans that are realistic for you and are supported by the appropriate education.
                            </h4>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h4 className={classes.blackBodyText}>
                                We offer a range of services to rehabilitate injury and pain, develop physical wellness and performance. Our team believes in the value of helping you develop a lifestyle that prevents pain
                            </h4>
                        </Grid>
                        <Grid
                            item
                            md={9} xl={9}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h4 className={classes.blackBodyText}>
                                Our recovery plans place ultimate importance on the achievement of your goals.
                            </h4>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                    >
                        <hr size={30} className={classes.hr}/>
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
                                Our Team
                            </h2>
                        </Grid>
                        <Grid
                            item
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <Grid
                                container
                                justify={"center"}
                                alignContent={"center"}
                            >
                                <Grid
                                    item
                                    md={6} xl={6}
                                    justify={"center"}
                                    alignContent={"center"}
                                    style={{display: "flex"}}
                                >
                                    <Card plain className={classes.card2}>
                                        <CardHeader image plain>
                                            <img
                                                src={YashaHeadshot}
                                                alt="yasha_headshot"
                                                style={{width: "60%", height: "auto", marginLeft: "20%", marginRight: "20%"}}
                                            />
                                            <div
                                                className={classes.coloredShadow}
                                                style={{
                                                    backgroundImage:
                                                        "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
                                                    opacity: "1"
                                                }}
                                            />
                                        </CardHeader>
                                        <CardBody plain>
                                            <h4 className={classes.textStyle}>
                                                Yasha Gurevitch
                                            </h4>
                                            <h6 className={classes.textStyle}>
                                                Principle Physiotherapist
                                            </h6>
                                            <p className={classes.textStyle}>
                                                YASHAS DESCRIPTION HERE
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Grid>
                                <Grid
                                    item
                                    md={6} xl={6}
                                    justify={"center"}
                                    alignContent={"center"}
                                    style={{display: "flex"}}
                                >
                                    <Card plain className={classes.card2}>
                                        <CardHeader image plain>
                                            <img
                                                src={ChrisHeadshot}
                                                alt="chris_headshot"
                                                style={{width: "60%", height: "auto", marginLeft: "20%", marginRight: "20%"}}
                                            />
                                            <div
                                                className={classes.coloredShadow}
                                                style={{
                                                    backgroundImage:
                                                        "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                                                    opacity: "1"
                                                }}
                                            />
                                        </CardHeader>
                                        <CardBody plain>
                                            <h4 className={classes.textStyle}>
                                                Chris
                                            </h4>
                                            <h6 className={classes.textStyle}>
                                                Physiotherapist
                                            </h6>
                                            <p className={classes.textStyle}>
                                                CHRIS DESCRIPTION HERE
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ServicesLayout>
    )
}
