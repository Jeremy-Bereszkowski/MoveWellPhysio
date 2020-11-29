import React from "react";
import classNames from "classnames"
import Slide from "react-reveal/Slide";
import {useScroll} from "react-use-gesture";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import GridItem from "../../components/Grid/GridItem";
import image from "../../assets/img/physio/yasha_headshot.jpg"

import styles from "./whatItMeansStyles";
const useStyles = makeStyles(styles);

export default function WhatItMeans(props) {
    const classes = useStyles();

    const [show, setShow] = React.useState(false);

    const scroll = useScroll(state => {
        console.log("scrolling", state)

        if (state.offset[1] > 500){
            setShow(true)
        }
    }, {
        domTarget: window,
    });

    React.useEffect(scroll, [scroll]);

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <GridItem xs={12} sm={6} md={6}>
                <Grid
                    container
                    spacing={10}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Slide left when={show}>
                        <GridItem>
                            <h2 className={classNames(classes.title, classes.subHeaderText)}>
                                <b>WHAT IT MEANS TO MOVE WELL</b>
                            </h2>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>You want to exercise throughout your life. Exercise is a modality for a healthy and happy life.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>Your treatment is improving your capacity to do the exercise and movement that's important to you.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>Your recovery means being able to run that 10km, go for that walk, perform in your sport.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
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
                    </Slide>
                </Grid>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
                <div
                    className={classNames({
                        [classes.parallax]: true,
                        [classes["darkColor"]]: true
                    })}
                    style={{
                        backgroundImage: "url(" + image + ")",
                    }}
                />
            </GridItem>
        </Grid>
    )
}
