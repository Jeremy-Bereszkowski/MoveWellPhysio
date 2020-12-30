import React from 'react'
import PropTypes from 'prop-types'

import {makeStyles} from "@material-ui/core/styles"

import {email} from "../../assets/data/global";

const useStyles = makeStyles(theme => ({
    blackText: {
        color: "inherit"
    },
}))

export default function EmailLink(props) {
    const classes = useStyles()
    const {text} = props

    return (
        <a href={"mailto:"+email} className={classes.blackText}>{text}</a>
    )
}

EmailLink.defaultProps = {}

EmailLink.propTypes = {
    text: PropTypes.string,
}
