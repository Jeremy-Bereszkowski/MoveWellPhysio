import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {
    bodyHeaderText,
    bodyParaText,
    bodyParaText1,
    darkColor,
    extraSmallFont,
    largeFont,
    smallFont
} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";
import {blackColor, grayColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";
import {bodyHeaderText2, bodyParaText3, bodyParaText4} from "../../assets/jss/coreStyles";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    blackBodyText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
    clientText: {
        ...bodyParaText3,
        marginBottom: "-1vh",
        color: Colours.green,
    },
    bodyParaText: {
        ...bodyParaText1,
    },
    clientParaText: {
        ...bodyParaText4
    },
    bodyHeaderText: {
        ...bodyHeaderText2,
        color: Colours.green,
    },
    divPadding: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    divHeader: {
        marginTop: "2.5vh",
        paddingRight: "1vw",
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
        ...darkColor
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
                    alignContent={"flex-start"}
                    justify={"flex-start"}
                >
                    <Grid item>
                        <h6 className={classes.clientText}>
                            {clientName + " (" + clientAge + ")"}
                        </h6>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"flex-start"}
                            alignItems={"flex-start"}
                            justify={"flex-start"}
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
            spacing={1}
            direction="direction"
            justify="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
            className={classes.divPadding}
        >
            <Grid item>
                <h2 className={classNames(classes.title, classes.bodyHeaderText)}>
                    {header}
                </h2>
            </Grid>
            {para.map(bodyString => {
                return (
                    <Grid item>
                        <h5 className={classes.bodyParaText} key={bodyString}>
                            {bodyString}
                        </h5>
                    </Grid>
                )
            })}
            <Grid item>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    alignContent={"flex-start"}
                    className={classes.divHeader}
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
            </Grid>
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
