import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ContactData from "../../assets/data/pages/contact";

import MapContainer from "../../util/google";

import styles from "./addressStyles";
const useStyles = makeStyles(styles);

export default function OpeningHours() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction={"column"}
            justify={"flex-start"}
            alignContent={"center"}
        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {ContactData.address.header}
                </h2>
            </Grid>
            <Grid item>
                <h5 className={classes.blackBodyText}>
                    {ContactData.address.address1}
                </h5>
            </Grid>
            <Grid item>
                <h5 className={classes.blackBodyText}>
                    {ContactData.address.address2}
                </h5>
            </Grid>
            <Grid item>
                <h5 className={classNames(classes.blackBodyText, classes.addressNoteText)}>
                    {ContactData.address.hint}
                </h5>
            </Grid>
            <Grid item>
                <div className={classes.mapContainer}>
                    <MapContainer />
                </div>
            </Grid>
        </Grid>
    )
}
