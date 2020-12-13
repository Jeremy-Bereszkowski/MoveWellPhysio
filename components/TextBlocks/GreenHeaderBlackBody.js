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
});

export default function GreenHeaderBlackBody(props) {
    const classes = useStyles();

    const {header, body} = props

    return (
        <>
            {
                !header ? null :
                    <Grid
                        container
                        spacing={4}
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
            <Grid
                container
                spacing={4}
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
        </>
    )
}

GreenHeaderBlackBody.propTypes = {
    header: PropTypes.string,
    body: PropTypes.array,
}
