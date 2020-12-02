import React from "react";
import PropTypes from "prop-types"
import className from "classnames"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import styles from "./dayStyles";
const useStyles = makeStyles(styles);

export default function Day(props) {
    const classes = useStyles();

    const {dayText, hoursText} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignContent={"flex-start"}
        >
            <Grid item sm={6}>
                <h4 className={className(classes.bodyText, classes.leftMargin)}>
                    {dayText}:
                </h4>
            </Grid>
            <Grid item sm={6}>
                <h4 className={classes.bodyText}>
                    {hoursText}
                </h4>
            </Grid>
        </Grid>
    )
}

Day.PropTypes = {
    dayText: PropTypes.string,
    hoursText: PropTypes.string,
}
