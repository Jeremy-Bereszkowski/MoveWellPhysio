import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import ParallaxImage from "../../assets/img/physio/outside.jpg"
import MainContainerLayout from "../../components/Layout/MainContainerLayout";


import styles from "../../assets/jss/pages/services/physiotherapyStyles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ParallaxLayout from "../../components/Layout/ParallaxLayout";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "physiotherapy"
    const parallaxBody = "Physiotherapy is the holistic treatment of your physical discomfort"

    return (
        <ParallaxLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    spacing={4}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <h2 className={classes.greenHeaderText}>
                            How physiotherapy can help
                        </h2>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            Physiotherapy treats pain. But it is also an approach to preventing injury, achieving higher performance and maintaining a healthy physical lifestyle.
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            You don’t need a doctor’s referral to get professional help with your pain.
                        </h4>
                    </Grid>
                    <Grid item>
                        <div style={{marginTop: "4vh", position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                            <Button className={classes.button}>
                                <p>
                                    <b>
                                        Book A consult
                                    </b>
                                </p>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={10} xl={10}>
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
                    <Grid item md={10} xl={10}>
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
                    <Grid item md={10} xl={10}>
                        <hr size={30} className={classes.hr}/>
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
