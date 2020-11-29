import React from "react";
import classNames from "classnames"
import Slide from "react-reveal/Slide";
import {useScroll} from "react-use-gesture";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import GridItem from "../../components/Grid/GridItem";
import image from "../../assets/img/physio/clients/client.jpg";

import styles from "./whatItMeansStyles";
const useStyles = makeStyles(styles);

export default function About(props) {
    const classes = useStyles();

    const [show, setShow] = React.useState(false);

    const scroll = useScroll(state => {
        console.log("scrolling", state)

        if (state.offset[1] > 1500){
            setShow(true)
        } else if (state.offset[1] < 100){
            setShow(false)
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
            className={classes.topMargin}
        >
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
            <GridItem xs={12} sm={6} md={6}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Slide right >
                        <GridItem>
                            <h2 className={classNames(classes.title, classes.subHeaderText)}>
                                <b>ABOUT MOVEWELL</b>
                            </h2>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>We're experts in physiotherapy and exercise.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>We take care to understand you first, designing your recovery around your needs and fitness goals.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>MoveWell uses an active style of treatment that prioritises pain relief through improved function.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4 className={classes.middleText}>
                                <b>Our team believes in the value of helping you develop a lifestyle that prevents pain.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h5 className={classNames( classes.subHeaderText, classes.inlineBlock)}>
                                <b>MORE ABOUT MOVEWELL</b>
                            </h5>
                            <Icon className={classNames(classes.inlineBlock, classes.arrow)} >
                                <KeyboardArrowRightIcon />
                            </Icon>
                        </GridItem>
                    </Slide>
                </Grid>
            </GridItem>
        </Grid>
    )
}
