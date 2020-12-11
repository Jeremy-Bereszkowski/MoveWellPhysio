import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {bodyHeaderText} from "assets/jss/coreStyles";
import PhysioLedRehabData from "assets/data/pages/services/physioLedRehab";

import PhysioLedRehabBlock from "components/TextBlocks/PhysioLedRehabBlock";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
});

export default function Clients(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={4}
            direction={"column"}
            justify={"center"}
            alignContent={"center"}

        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {PhysioLedRehabData.clients.header}
                </h2>
            </Grid>
            {
                PhysioLedRehabData.clients.clients.map(ele => {
                    if (ele === PhysioLedRehabData.clients.clients[0] || ele === PhysioLedRehabData.clients.clients[2]) {
                        return (
                            <Grid item>
                                <PhysioLedRehabBlock left header={ele.header} para={ele.para} clientImage={ele.clientImage} clientName={ele.clientName} clientAge={ele.clientAge} clientPara={ele.clientPara}/>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid item>
                                <PhysioLedRehabBlock header={ele.header} para={ele.para} clientImage={ele.clientImage} clientName={ele.clientName} clientAge={ele.clientAge} clientPara={ele.clientPara}/>
                            </Grid>
                        )
                    }

                })
            }
        </Grid>
    )
}
