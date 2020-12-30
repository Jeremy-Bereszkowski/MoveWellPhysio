import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {bodyParaText2} from "assets/jss/coreStyles";
import PhoneLink from "../Links/Phone";
import EmailLink from "../Links/Email";

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

    const {leftText, rightText, type} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"stretch"}
            className={classes.sideMargins}
        >
            <Grid item>
                {type ?
                    <h4 className={classes.bodyText}>
                        {leftText + ": "}
                        {type==="phone" ? <PhoneLink text={rightText}/> : null}
                        {type==="email" ? <EmailLink text={rightText}/> : null}
                    </h4>
                    :
                    <h4 className={classes.bodyText}>
                        {leftText + ": " + rightText}
                    </h4>
                }
            </Grid>
        </Grid>
    )
}

HalfHorizontalTexts.propTypes = {
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired,
    ref: PropTypes.string,
    type: PropTypes.oneOf([
        "phone",
        "email"
    ])
}
