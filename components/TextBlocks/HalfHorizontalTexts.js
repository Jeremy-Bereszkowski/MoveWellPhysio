import React from "react";
import PropTypes from "prop-types"
import className from "classnames"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {smallFont} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    bodyText: {
        ...smallFont,
        fontWeight: "200",
        textAlign: "left",
        lineHeight: "inherit"
    },
});

export default function HalfHorizontalTexts(props) {
    const classes = useStyles();

    const {leftText, rightText} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignContent={"flex-start"}
        >
            <Grid item>
                <h4 className={className(classes.bodyText)}>
                    {leftText}:
                </h4>
            </Grid>
            <Grid item>
                <h4 className={classes.bodyText}>
                    {rightText}
                </h4>
            </Grid>
        </Grid>
    )
}

HalfHorizontalTexts.propTypes = {
    leftText: PropTypes.string,
    rightText: PropTypes.string,
}
