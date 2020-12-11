import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ContactData from "../../assets/data/pages/contact";
import HalfHorizontalTexts from "../../components/TextBlocks/HalfHorizontalTexts";

import styles from "./contactStyles";
const useStyles = makeStyles(styles);

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
                    {ContactData.contact.header}
                </h2>
            </Grid>
            <Grid item>
                <HalfHorizontalTexts leftText={ContactData.contact.telephone.header} rightText={ContactData.contact.telephone.value} />
            </Grid>
            <Grid item>
                <HalfHorizontalTexts leftText={ContactData.contact.email.header} rightText={ContactData.contact.email.data} />
            </Grid>
        </Grid>
    )
}
