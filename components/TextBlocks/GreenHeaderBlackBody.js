import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import styles from "./greenHeaderBlackBodyStyles";
const useStyles = makeStyles(styles);

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
