import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "../Parallax/Parallax";

import style from "./ServiceLayoutStyles"
const useStyles = makeStyles(style)

export default function ServicesLayout(props) {
    const classes = useStyles()

    const {children, parallaxImage, parallaxHeader, parallaxBody, maxWidth} = props

    const containerClasses = maxWidth === "lg" ? classNames(classes.bodyContainer, classes.large) : classNames(classes.bodyContainer, classes.medium)



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
                        <Grid item style={{display: "flex"}} justify={"center"} alignContent={"center"}>
                            <h1 className={classes.title}>{parallaxHeader}</h1>
                        </Grid>
                        <Grid item>
                            <hr size={30} className={classes.greenHr}/>
                        </Grid>
                        <Grid item style={{display: "flex"}} justify={"center"} alignContent={"center"}>
                            <h4 className={classes.titleSubHeading}>
                                {parallaxBody}
                            </h4>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            <div className={classNames(classes.section, classes.sectionGray)}>
                <div className={containerClasses}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

ServicesLayout.PropTypes = {
    parallaxImage: PropTypes.string,
    parallaxHeader: PropTypes.string,
    parallaxBody: PropTypes.string,
    maxWidth: PropTypes.string,
}
