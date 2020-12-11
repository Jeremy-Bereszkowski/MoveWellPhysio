import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {bodyHeaderText, bodyParaText, extraSmallFont, largeFont, smallFont} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";
import {blackColor, grayColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    blackBodyText: {
        ...bodyParaText,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
    clientText: {
        ...smallFont,
        fontWeight: "400",
        marginBottom: "-1vh",
        color: Colours.green,
    },
    bodyParaText: {
        ...smallFont,
        fontWeight: "600",
        color: grayColor[10]
    },
    clientParaText: {
        ...extraSmallFont,
        fontWeight: "600",
        color: grayColor[8]
    },
    bodyHeaderText: {
        ...largeFont,
        color: Colours.green,
        fontWeight: "400"
    },
    divPadding: {
        paddingLeft: "4vw",
        paddingRight: "4vw",
    },
    image: {
        maxWidth: "100%",
        width: "100%",
        height: "auto",
        maxHeight: "1600px",
        position: "relative",
        marginRight: "-40vw",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 6px 30px 5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
    },
    filter: {},
    darkColor: {
        "&:before": {
            background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    }
});

export default function PhysioLedRehabBlock(props) {
    const classes = useStyles();
    const {left, header, para, clientImage, clientName, clientAge, clientPara} = props

    const ImageBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <div className={classNames(classes.image, classes.darkColor)}>
                    <img src={clientImage} className={classNames(classes.image)}/>
                </div>
            </Grid>
        )
    }

    const TextBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    alignContent={"center"}
                    justify={"center"}
                >
                    <Grid item>
                        <h2 className={classNames(classes.title, classes.bodyHeaderText)}>
                            {header}
                        </h2>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            {para.map(bodyString => {
                                return (
                                    <Grid item>
                                        <h5 className={classes.bodyParaText} key={bodyString}>
                                            {bodyString}
                                        </h5>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h6 className={classes.clientText}>
                            {clientName + " (" + clientAge + ")"}
                        </h6>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            {clientPara.map(bodyString => {
                                return (
                                    <Grid item>
                                        <h5 className={classes.clientParaText} key={bodyString}>
                                            <b>{bodyString}</b>
                                        </h5>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.divPadding}
        >
            {left === true ?
                <>
                    <ImageBlock/>
                    <TextBlock/>
                </>
                :
                <>
                    <TextBlock/>
                    <ImageBlock/>
                </>
            }
        </Grid>
    )
}

PhysioLedRehabBlock.propTypes = {
    header: PropTypes.string,
    para: PropTypes.array,
    clientImage: PropTypes.string,
    clientName: PropTypes.string,
    clientAge: PropTypes.string,
    clientPara: PropTypes.array,
    left: PropTypes.bool,
}
