import React from "react";
import classNames from "classnames";
import Slide from "react-reveal/Slide";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import styles from "./paraLayoutStyles";
import Link from "next/link";
import URL from "../../assets/strings/urls";
const useStyles = makeStyles(styles);

export default function ParaLayout(props) {
    const classes = useStyles();

    const {image, headerString, bodyStringArray, actionString, actionUrl, imageLeft} = props

    /*const href = actionUrl === "about" ? URL.ABOUT : URL.PHYSIOTHERAPY*/

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
                            <b>{bodyString}</b>
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
                            <h5 className={classNames(classes.bodyActionText, classes.inlineBlock)}>
                                {actionString}
                            </h5>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Icon className={classes.arrow}>
                            <KeyboardArrowRightIcon />
                        </Icon>
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
