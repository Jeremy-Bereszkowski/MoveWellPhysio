import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import BookConsultButton from "./BookConsultButton";
import BookGroupClassButton from "./BookGroupClassButton";

const useStyles = makeStyles(theme => ({}))

export default function BookingButtonsGroup(props) {
    const classes = useStyles()

    return (
        <Grid
            container
            spacing={2}
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
        >
            <Grid item>
                <BookConsultButton />
            </Grid>
            <Grid item>
                <BookGroupClassButton />
            </Grid>
        </Grid>
    )
}
