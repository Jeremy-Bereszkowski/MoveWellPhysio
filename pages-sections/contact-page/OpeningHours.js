import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import DayBlock from "components/TextBlocks/DayBlock";

import ContactData from "assets/data/pages/contact";
import {bodyHeaderText} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
    },
});

export default function OpeningHours() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignContent={"stretch"}
        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {ContactData.openingHours.header}
                </h2>
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.monday[0]} openTime={ContactData.openingHours.monday[1]} closeTime={ContactData.openingHours.monday[2]} />
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.tuesday[0]} openTime={ContactData.openingHours.tuesday[1]} closeTime={ContactData.openingHours.tuesday[2]} />
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.wednesday[0]}  openTime={ContactData.openingHours.wednesday[1]} closeTime={ContactData.openingHours.wednesday[2]} />
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.thursday[0]} openTime={ContactData.openingHours.thursday[1]} closeTime={ContactData.openingHours.thursday[2]} />
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.friday[0]} openTime={ContactData.openingHours.friday[1]} closeTime={ContactData.openingHours.friday[2]} />
            </Grid>
            <Grid item>
                <DayBlock dayText={ContactData.openingHours.saturday[0]} openTime={ContactData.openingHours.saturday[1]} closeTime={ContactData.openingHours.saturday[2]} />
            </Grid>
        </Grid>
    )
}
