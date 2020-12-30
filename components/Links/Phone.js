import React from 'react'
import PropTypes from 'prop-types'

import {makeStyles} from "@material-ui/core/styles"

import {phone} from "../../assets/data/global";

const useStyles = makeStyles(theme => ({
    blackText: {
        color: "inherit"
    },
}))

export default function PhoneLink(props) {
    const classes = useStyles()
    const {text} = props

    return (
        <a href={"tel:"+phone} className={classes.blackText}>{text}</a>
    )
}

PhoneLink.defaultProps = {}

PhoneLink.propTypes = {
    text: PropTypes.string,
}
