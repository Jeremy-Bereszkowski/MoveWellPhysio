import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import style from "./MainContainerLayoutStyles"
const useStyles = makeStyles(style)

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
