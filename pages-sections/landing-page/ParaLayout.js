import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Slide from "react-reveal/Slide";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {bodyActionText, bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import {blackColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    title: {
        textAlign: "center"
    },
    bodyHeaderText: {
        ...bodyHeaderText,
        textAlign: "left",
    },
    bodyParaText: {
        ...bodyParaText1,
        marginLeft: "2px",
    },
    bodyActionText: {
        ...bodyActionText
    },
    inlineBlock: {
        display: "inline-block"
    },
    arrow: {
        marginBottom: "-6px",
    },
    textDiv: {
        marginLeft: "auto",
        justify: "center",
        marginRight: "auto"
    },
    divPadding: {
        paddingLeft: "4vw",
        paddingRight: "4vw",
    },
    image: {
        width: "100%",
        height: "60vh",
        maxHeight: "1600px",
        position: "relative",
        marginRight: "-40vw",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
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

export default function ParaLayout(props) {
    const classes = useStyles();

    const {image, headerString, bodyStringArray, actionString, actionUrl, imageLeft} = props

    const SlideBlock = () => {
        return (
            <>
                {imageLeft === false ?
                    <Grid item xs={12} sm={12} md={6}>
                        <Slide left cascade>
                            <TextBlock />
                        </Slide>
                    </Grid>
                    :
                    <Grid item xs={12} sm={12} md={6}>
                        <Slide left>
                            <TextBlock />
                        </Slide>
                    </Grid>
                }
            </>
        )
    }
    const TextBlock  = () => {
        return (
            <div className={classNames(classes.textDiv)}>
                <h2 className={classes.bodyHeaderText}>
                    {headerString}
                </h2>
                {bodyStringArray.map(bodyString => {
                    return (
                        <h4 className={classes.bodyParaText} key={bodyString}>
                            {bodyString}
                        </h4>
                    )
                })}
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-start"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <Link href={actionUrl}>
                            <a>
                                <h5 className={classNames(classes.bodyActionText, classes.inlineBlock)}>
                                    {actionString}
                                </h5>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href={actionUrl}>
                            <a>
                                <Icon className={classes.arrow}>
                                    <KeyboardArrowRightIcon />
                                </Icon>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const ImageBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <div
                    className={classNames(classes.image, classes.darkColor)}
                    style={{
                        backgroundImage: "url(" + image + ")",
                    }}
                />
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
            {imageLeft === true ?
                <>
                    <ImageBlock />
                    <SlideBlock />
                </>
                :
                <>
                    <SlideBlock />
                    <ImageBlock />
                </>
            }
        </Grid>
    )
}

ParaLayout.propTypes = {
    image: PropTypes.string,
    headerString: PropTypes.string,
    bodyStringArray: PropTypes.array,
    actionString: PropTypes.string,
    actionUrl: PropTypes.string,
    imageLeft: PropTypes.bool,
}
