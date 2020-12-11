import React from "react";
import PropTypes from "prop-types"
import className from "classnames"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import styles from "./dayStyles";
const useStyles = makeStyles(styles);

export default function Day(props) {
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
                    {dayText}:
                </h4>
            </Grid>
            <Grid item>
                        <h4 className={classes.bodyText}>
                            {openTime}
                            {"  -  "}
                            {closeTime}
                        </h4>
                {/*<Grid
                    container
                    spacing={2}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                    </Grid>*/}
                    {/*<Grid item>
                        <h4 className={classes.bodyText}>
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.bodyText}>
                        </h4>
                    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
    )
}

Day.propTypes = {
    dayText: PropTypes.string,
    openTime: PropTypes.string,
    closeTime: PropTypes.string,
}
