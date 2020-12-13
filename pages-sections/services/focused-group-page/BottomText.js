import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {bodyHeaderText, bodyParaText} from "assets/jss/coreStyles";
import FocusedGroupData from "assets/data/pages/services/focusedGroup";
import {bodyParaText1} from "../../../assets/jss/coreStyles";

const useStyles = makeStyles({
    marginTop: {
        marginTop: "4vh"
    },
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    },
    blackSubHeaderText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
        fontWeight: "800",
    },
    blackParaText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
});

export default function BottomText(props) {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                spacing={4}
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
                className={classes.marginTop}
            >
                <Grid item>
                    <h2 className={classes.greenHeaderText}>
                        {FocusedGroupData.bottom.header}
                    </h2>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
                direction={"row"}
                justify={"flex-start"}
                alignContent={"center"}
            >
                {
                    FocusedGroupData.bottom.body.map(element => {
                        return (
                            <Grid item key={element}>
                                {
                                    element.header === undefined ?
                                        null
                                        :
                                        <h6 className={classes.blackSubHeaderText}>
                                            {element.header}
                                        </h6>
                                }
                                <h4 className={classes.blackParaText}>
                                    {element.body}
                                </h4>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
