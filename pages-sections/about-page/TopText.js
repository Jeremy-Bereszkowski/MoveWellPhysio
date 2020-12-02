import {Grid} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import {AboutData} from "../../assets/strings/pageData";

import styles from "./topTextStyles";
const useStyles = makeStyles(styles);

export default function TopText(props) {
    const classes = useStyles();

    return(
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"centert"}
        >
            {AboutData.top.map(element => {
                return (
                    <Grid item sm={12} md={12} className={classes.gridSpacing}>
                        <h4 className={classes.bodyParaText}>
                            {element}
                        </h4>
                    </Grid>
                )
            })}
        </Grid>
    )
}
