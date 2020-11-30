import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import ParallaxImage from "../../assets/img/physio/outside.jpg"
import ServicesLayout from "../../components/Layout/ServicesLayout";


import styles from "../../assets/jss/pages/services/physiotherapyStyles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "physio"
    const parallaxBody = "Physiotherapy is the holistic treatment of your physical discomfort"

    return (
        <ServicesLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody} maxWidth={"lg"}>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
                style={{display: "flex"}}
            >
                <Grid
                    item
                    justify={"center"}
                    alignContent={"center"}
                >
                    <h2 className={classes.greenHeaderText}>
                        How physiotherapy can help
                    </h2>
                </Grid>
                <Grid
                    item
                    spacing={6}
                    md={9} xl={9}
                    justify={"center"}
                    alignContent={"center"}
                    style={{display: "relative"}}
                >
                    <h3 className={classes.blackBodyText}>
                        Physiotherapy treats pain. But it is also an approach to preventing injury, achieving higher performance and maintaining a healthy physical lifestyle.
                    </h3>
                    <h3 className={classes.blackBodyText}>
                        You don’t need a doctor’s referral to get professional help with your pain.
                    </h3>
                    <div style={{margin: "0", position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                        <Button className={classes.button}>
                            <p2>
                                <b>
                                    Book A consult
                                </b>
                            </p2>
                        </Button>
                    </div>
                </Grid>
                <Grid
                    item
                    md={10} xl={10}
                    justify={"center"}
                    alignContent={"center"}
                    style={{display: "flex"}}
                >
                    <hr size={30} className={classes.hr}/>
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
                style={{display: "flex"}}
            >
                <Grid
                    item
                    md={10} xl={10}
                    justify={"center"}
                    alignContent={"center"}
                    style={{display: "flex"}}
                >
                    <hr size={30} className={classes.hr}/>
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
                style={{display: "flex"}}
            >
                <Grid
                    item
                    md={10} xl={10}
                    justify={"center"}
                    alignContent={"center"}
                    style={{display: "flex"}}
                >
                    <hr size={30} className={classes.hr}/>
                </Grid>
            </Grid>
        </ServicesLayout>
    )
}
