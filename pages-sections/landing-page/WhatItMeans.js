import React from "react";
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";

import Badge from "../../components/Badge/Badge";

import cardProject5 from "../../assets/img/examples/card-project5.jpg";
import styles from "./whatItMeansStyles";
const useStyles = makeStyles(styles);

export default function WhatItMeans(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <GridItem xs={12} sm={5} md={5}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <GridItem>
                        <h2 className={classNames(classes.title, classes.subHeaderText)}>
                            <b>WHAT IT MEANS TO MOVE WELL</b>
                        </h2>
                    </GridItem>
                    <GridItem>
                        <h4>
                            <b>You want to exercise throughout your life. Exercise is a modality for a healthy and happy life.</b>
                        </h4>
                    </GridItem>
                    <GridItem>
                        <h4>
                            <b>Your treatment is improving your capacity to do the exercise and movement that's important to you.</b>
                        </h4>
                    </GridItem>
                    <GridItem>
                        <h4>
                            <b>Your recovery means being able to run that 10km, go for that walk, perform in your sport.</b>
                        </h4>
                    </GridItem>
                    <GridItem>
                        <h4>
                            <b>We help you take the next step towards living an active lifestyle with pain-free movement and exercise.</b>
                        </h4>
                    </GridItem>
                    <GridItem>
                        <h5 className={classNames( classes.subHeaderText, classes.inlineBlock)}>
                            <b>OUR PHYSIOTHERAPY APPROACH</b>
                        </h5>
                        <Icon className={classNames(classes.inlineBlock, classes.arrow)} >
                            <KeyboardArrowRightIcon />
                        </Icon>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem xs={12} sm={5} md={5}>
                <Card
                    background
                    className={classes.card4}
                    style={{ backgroundImage: `url(${cardProject5})` }}
                >
                    <CardBody background className={classes.cardBody4}>
                        <Badge color="rose">CLIENT: DJ KHALED</Badge>
                        <a href="#pablo" onClick={e => e.preventDefault}>
                            <h3 className={classes.cardTitle}>Another One</h3>
                            <p className={classes.cardDescription}>
                                Don{"'"}t be scared of the truth because we need to
                                restart the human foundation in truth.
                            </p>
                        </a>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem>
                <hr size={30} className={classes.hr}/>
            </GridItem>
        </Grid>
    )
}
