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
import {useScroll} from "react-use-gesture";
import Slide from "react-reveal/Slide";
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
            <GridItem xs={12} sm={5} md={5}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Slide right >
                    {/*<Slide right when={show}>*/}
                        <GridItem>
                            <h2 className={classNames(classes.title, classes.subHeaderText)}>
                                <b>ABOUT MOVEWELL</b>
                            </h2>
                        </GridItem>
                        <GridItem>
                            <h4>
                                <b>We're experts in physiotherapy and exercise.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4>
                                <b>We take care to understand you first, designing your recovery around your needs and fitness goals.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4>
                                <b>MoveWell uses an active style of treatment that prioritises pain relief through improved function.</b>
                            </h4>
                        </GridItem>
                        <GridItem>
                            <h4>
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
            {/*<GridItem>
                <hr size={30} className={classes.hr}/>
            </GridItem>*/}
        </Grid>
    )
}
