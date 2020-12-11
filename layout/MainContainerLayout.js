import React from "react";

import {makeStyles} from "@material-ui/core/styles"

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    bodyContainer: {
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        maxWidth: "100%",
    },
    section: {
        background: grayColor[14],
    },
    main: {
        margin: "0",
        paddingTop: "2vh",
        paddingBottom: "3vh",
        paddingLeft: "2vw",
        paddingRight: "2vw",
    }
})

export default function MainContainerLayout(props) {
    const classes = useStyles()

    const {children} = props

    return (
        <div className={classes.section}>
            <div className={classes.bodyContainer}>
                <div className={classes.main}>
                    {children}
                </div>
            </div>
        </div>
    )
}
