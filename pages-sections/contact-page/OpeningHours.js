import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import Day from "../../components/OpenHours/Day";

import styles from "./openingHoursStyles";
import {ContactData} from "../../assets/strings/pageData";
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
                    {ContactData.openingHours.header}
                </h2>
            </Grid>
            <Grid item>
                <Day dayText={ContactData.openingHours.monday[0]} hoursText={ContactData.openingHours.monday[1]} />
            </Grid>
            <Grid item>
                <Day dayText={ContactData.openingHours.tuesday[0]} hoursText={ContactData.openingHours.tuesday[1]} />
            </Grid>
            <Grid item>
                <Day dayText={ContactData.openingHours.wednesday[0]} hoursText={ContactData.openingHours.wednesday[1]} />
            </Grid>
            <Grid item>
                <Day dayText={ContactData.openingHours.thursday[0]} hoursText={ContactData.openingHours.thursday[1]} />
            </Grid>
            <Grid item>
                <Day dayText={ContactData.openingHours.friday[0]} hoursText={ContactData.openingHours.friday[1]} />
            </Grid>
        </Grid>
    )
}
