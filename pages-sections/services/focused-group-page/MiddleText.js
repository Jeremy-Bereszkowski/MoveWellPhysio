import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import FocusedGroupData from "../../../assets/data/pages/services/focusedGroup";
import {bodyHeaderText, bodyParaText1} from "../../../assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
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
}))

export default function Function(props) {
    const classes = useStyles()

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {FocusedGroupData.middle.header}
                </h2>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-start"}
                    alignContent={"center"}
                >
                    {
                        FocusedGroupData.middle.body.map((element, key) => {
                            return (
                                <Grid item key={element + " " + key}>
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
            </Grid>
        </Grid>
    )
}
