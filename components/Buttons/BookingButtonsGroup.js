import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import BookConsultButton from "./BookConsultButton";
import BookGroupClassButton from "./BookGroupClassButton";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    pad: {
        padding: "1vw"
    }
}))

export default function BookingButtonsGroup(props) {
    const classes = useStyles()

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
        >
            <Grid item className={classes.pad}>
                <BookConsultButton />
            </Grid>
            <Grid item className={classes.pad}>
                <BookGroupClassButton />
            </Grid>
        </Grid>
    )
}
