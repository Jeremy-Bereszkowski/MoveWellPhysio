import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import Day from "../../components/OpenHours/Day";

import ContactData from "../../assets/data/pages/contact";

import styles from "./contactStyles";
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
                    {ContactData.contact.header}
                </h2>
            </Grid>
            <Grid item>
                <Day dayText={ContactData.contact.telephone.header} hoursText={ContactData.contact.telephone.value} />
            </Grid>
            <Grid item>
                <Day dayText={ContactData.contact.email.header} hoursText={ContactData.contact.email.data} />
            </Grid>
        </Grid>
    )
}
