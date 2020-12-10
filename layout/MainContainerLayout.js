import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    bodyContainer: {
        paddingRight: "1vw",
        paddingLeft: "1vw",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
    },
    section: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        paddingBottom: "20px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    main: {
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-20px 0px 0px",
        paddingTop: "5vh",
        paddingBottom: "3vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
    },
    large: {
        maxWidth: "90%"
    },
    medium: {
        maxWidth: "70%"
    },
})

export default function MainContainerLayout(props) {
    const classes = useStyles()

    const {children, maxWidth} = props

    const containerClasses = maxWidth === "lg" ?
        classNames(classes.bodyContainer, classes.large) :
        classNames(classes.bodyContainer, classes.medium)

    return (
        <div className={classNames(classes.section, classes.sectionGray)}>
            <div className={containerClasses}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    {children}
                </div>
            </div>
        </div>
    )
}

MainContainerLayout.propTypes = {
    maxWidth: PropTypes.string,
}
