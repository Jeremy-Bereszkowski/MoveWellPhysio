import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import MainContainerLayout from "../../layouts/MainContainerLayout";
import ParallaxLayout from "../../layouts/ParallaxLayout";

import PhysiotherapyData from "../../assets/data/pages/services/physiotherapy";

import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";
import {blackColor, grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    hr: {
        marginTop: "5vh",
        borderTop: "1px solid black"
    },
    greenHeaderText: {
        ...bodyHeaderText,
    },
    blackBodyText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
    },
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        width: "30vw",
        height: "6vh",
        maxWidth: "200px",
        maxHeight: "120px",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        padding: "12px 30px",
        marginTop: "25px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover": {
            color: whiteColor,
            backgroundColor: grayColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.2)"
        },

    },
});

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={PhysiotherapyData.core.parallaxImage} parallaxHeader={PhysiotherapyData.core.parallaxHeader} parallaxBody={PhysiotherapyData.core.parallaxBody}>
            {/*<MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
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
            </MainContainerLayout>*/}
        </ParallaxLayout>
    )
}
