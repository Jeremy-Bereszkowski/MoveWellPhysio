import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import HalfHorizontalTexts from "components/TextBlocks/HalfHorizontalTexts";

import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import ContactData from "assets/data/pages/contact";
import {email, phone} from "../../assets/data/global";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
    },
    blackBodyText: {
        ...bodyParaText1,
        marginTop: "0",
        marginBottom: "0",
        textAlign: "center",
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
            justify={"center"}
            alignContent={"stretch"}
        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {ContactData.contact.header}
                </h2>
            </Grid>
            <Grid item>
                <HalfHorizontalTexts type={"phone"} leftText={ContactData.contact.telephone.header} rightText={ContactData.contact.telephone.value} />
            </Grid>
            <Grid item>
                <HalfHorizontalTexts type={"email"} leftText={ContactData.contact.email.header} rightText={ContactData.contact.email.data} />
            </Grid>
        </Grid>
    )
}
