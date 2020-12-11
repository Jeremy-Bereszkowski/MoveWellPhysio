import React from "react";

import {makeStyles} from "@material-ui/core/styles"

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    bodyContainer: {
        paddingRight: "1vw",
        paddingLeft: "1vw",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        maxWidth: "90%",
    },
    section: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        paddingBottom: "20px",
        background: grayColor[14],
    },
    main: {
        position: "relative",
        zIndex: "3",
        margin: "-20px 0px 0px",
        paddingTop: "5vh",
        paddingBottom: "3vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
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
