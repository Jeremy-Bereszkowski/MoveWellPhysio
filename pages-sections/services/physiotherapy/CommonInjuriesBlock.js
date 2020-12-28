import React from 'react'
import PropTypes from "prop-types"
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import {blackColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import useIsTouchDevice from "../../../util/device-detect";

const useStyles = makeStyles(theme => ({
    parallax: {
        height: "45vh",
        maxHeight: "500px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        margin: "0",
        padding: "5px",
        border: "0",
        display: "flex",
        alignItems: "center",
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
    },
    headerText: {
        ...bodyHeaderText,
        color: whiteColor,
        fontWeight: "400"
    },
    bodyText: {
        ...bodyParaText1,
        fontWeight: "200",
        color: "white",
        zIndex: "5",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    },
    wordBlock: {
        position: "absolute",
    },
    container: {
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        zIndex: "2"
    },
    extraHeight: {
        height: "85vh",
        maxHeight: "100vh",
    }
}))

export default function CommonInjuriesBlock(props) {
    const classes = useStyles()

    const {image, header, body} = props

    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes["darkColor"]]: true,
        [classes.extraHeight]: useIsTouchDevice()
    });

    return (
        <div className={parallaxClasses} style={{backgroundImage: "url(" + image + ")"}}>
            <div className={classes.container}>
                <Grid
                    container
                    spacing={3}
                    direction={"column"}
                    alignContent={"center"}
                    alignItems={"center"}
                    justify={"space-evenly"}
                >
                    <Grid item>
                        <h2 className={classes.headerText}>
                            {header}
                        </h2>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            spacing={2}
                            direction={"row"}
                            alignContent={"center"}
                            alignItems={"center"}
                            justify={"space-evenly"}
                        >
                            {
                                body.map((ele, key) => {
                                    return (
                                        <Grid md={3} sm={3} item key={key}>
                                            <h4 className={classes.bodyText}>
                                                {ele}
                                            </h4>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

CommonInjuriesBlock.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.array,
}
