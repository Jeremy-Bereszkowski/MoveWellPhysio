import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import BlockButton from "./BlockButton";
import URL from "../../assets/strings/urls";

const useStyles = makeStyles(theme => ({
    para: {
        margin: 0,
        padding: 2
    }
}))

const data = {
    buttonText: "Book A Consult",
    href: URL.CLINIKO,
}

export default function BookConsultButton(props) {
    const classes = useStyles()
    const {color} = props

    return (
        <BlockButton color={color} href={data.href}>
            <p className={classes.para}>
                <b>{data.buttonText}</b>
            </p>
        </BlockButton>
    )
}

BookConsultButton.defaultProps = {
    color: "green"
}

BookConsultButton.propTypes = {
    color: PropTypes.string,
}
