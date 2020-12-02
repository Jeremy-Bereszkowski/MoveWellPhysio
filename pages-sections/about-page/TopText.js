import {Grid} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import AboutData from "../../assets/data/pages/about";

import styles from "./topTextStyles";
const useStyles = makeStyles(styles);

export default function TopText(props) {
    const classes = useStyles();

    return(
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
        >
            {AboutData.top.map(element => {
                return (
                    <Grid item sm={12} md={12} className={classes.gridSpacing} key={element}>
                        <h4 className={classes.bodyParaText}>
                            {element}
                        </h4>
                    </Grid>
                )
            })}
        </Grid>
    )
}
