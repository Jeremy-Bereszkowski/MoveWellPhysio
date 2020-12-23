import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    blackBodyText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "clamp(4px, 1vh, 8px)",
        marginBottom: "clamp(4px, 1vh, 8px)",
        textAlign: "left",
    },
    pad: {
        padding: "2vw",
    },
});

export default function GreenHeaderBlackBody(props) {
    const classes = useStyles();

    const {header, body} = props

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"stretch"}
        >
            <Grid item className={classes.pad}>
                {
                    !header ? null :
                        <Grid
                            container
                            direction={"row"}
                            justify={"center"}
                            alignContent={"center"}
                        >

                            <Grid item>
                                <h2 className={classes.greenHeaderText}>
                                    {header}
                                </h2>
                            </Grid>
                        </Grid>
                }
            </Grid>
            <Grid item className={classes.pad}>
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-start"}
                    alignContent={"center"}
                >
                    {
                        body.map(element => {
                            return (
                                <Grid item key={element}>
                                    <h4 className={classes.blackBodyText}>
                                        {element}
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

GreenHeaderBlackBody.propTypes = {
    header: PropTypes.string,
    body: PropTypes.array,
}
