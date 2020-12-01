import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "../Parallax/Parallax";

import style from "./ParallaxLayoutStyles"
const useStyles = makeStyles(style)

export default function ParallaxLayout(props) {
    const classes = useStyles()

    const {children, parallaxImage, parallaxHeader, parallaxBody} = props

    return (
        <div>
            <Parallax image={parallaxImage} filter="dark">
                <div className={classes.container}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid
                            item
                            className={classes.flexItem}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h1 className={classes.title}>{parallaxHeader}</h1>
                        </Grid>
                        <Grid item>
                            <hr size={30} className={classes.greenHr}/>
                        </Grid>
                        <Grid
                            item
                            className={classes.flexItem}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <h4 className={classes.titleSubHeading}>
                                {parallaxBody}
                            </h4>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            {children}
        </div>
    )
}

ParallaxLayout.PropTypes = {
    parallaxImage: PropTypes.string,
    parallaxHeader: PropTypes.string,
    parallaxBody: PropTypes.string,
}
