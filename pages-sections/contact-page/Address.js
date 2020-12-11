import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import MapContainer from "util/google";

import {bodyHeaderText} from "assets/jss/coreStyles";
import ContactData from "assets/data/pages/contact";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
    },
    blackBodyText: {
        fontWeight: "200",
        lineHeight: "3vh",
        fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))",
        margin: "0",
        padding: "0",
        textAlign: "center"
    },
    addressNoteText: {
        marginTop: "40px",
        marginBottom: "20px",
    },
    mapContainer: {
        position: "relative",
        height: "25vh",
        width: "100%"
    }
});

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
