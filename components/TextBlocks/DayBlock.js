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

export default function DayBlock(props) {
    const classes = useStyles();

    const {dayText, openTime, closeTime} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignContent={"stretch"}
        >
            <Grid item>
                <h4 className={className(classes.bodyText)}>
                    {dayText}
                    {":"}
                </h4>
            </Grid>
            <Grid item>
                <h4 className={classes.bodyText}>
                    {openTime}
                    {"  -  "}
                    {closeTime}
                </h4>
            </Grid>
        </Grid>
    )
}

DayBlock.propTypes = {
    dayText: PropTypes.string,
    openTime: PropTypes.string,
    closeTime: PropTypes.string,
}
