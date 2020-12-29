import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {bodyParaText2} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    bodyText: {
        ...bodyParaText2
    },
    sideMargins: {
        paddingLeft: "3.5vw",
        paddingRight: "3.5vw",
    }
});

export default function HalfHorizontalTexts(props) {
    const classes = useStyles();

    const {leftText, rightText} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"stretch"}
            className={classes.sideMargins}
        >
            <Grid item>
                <h4 className={classes.bodyText}>
                    {leftText + ": " + rightText}
                </h4>
            </Grid>
            <Grid item>
                <h4 className={classes.bodyText}>
                    {/*{" " + }*/}
                </h4>
            </Grid>
        </Grid>
    )
}

HalfHorizontalTexts.propTypes = {
    leftText: PropTypes.string,
    rightText: PropTypes.string,
}
