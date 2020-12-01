import React from "react";
import classNames from "classnames";
import Slide from "react-reveal/Slide";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import styles from "./paraLayoutStyles";
const useStyles = makeStyles(styles);

export default function ParaLayout(props) {
    const classes = useStyles();

    const {image, headerString, bodyStringArray, actionString, actionUrl, imageLeft} = props

    const TextBlock  = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <Slide >
                    <div style={{marginLeft: "auto", justify: "center",  marginRight: "auto"}}>
                        <h2 className={classNames(classes.title, classes.bodyHeaderText)}>
                            {headerString}
                        </h2>
                        {bodyStringArray.map(bodyString => {
                            return (
                                <h4 className={classes.bodyParaText} key={bodyString}>
                                    <b>{bodyString}</b>
                                </h4>
                            )
                        })}
                        <div>
                            <h5 className={classNames(classes.bodyActionText, classes.inlineBlock)}>
                                {actionString}
                            </h5>
                            <Icon className={classNames(classes.inlineBlock, classes.arrow)}>
                                <KeyboardArrowRightIcon />
                            </Icon>
                        </div>
                    </div>
                </Slide>
            </Grid>
        )
    }

    const ImageBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <div
                    className={classNames({
                        [classes.image]: true,
                        [classes["darkColor"]]: true
                    })}
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
        >
            {imageLeft === true ?
                <>
                    <ImageBlock />
                    <TextBlock />
                </>
                :
                <>
                    <TextBlock />
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
