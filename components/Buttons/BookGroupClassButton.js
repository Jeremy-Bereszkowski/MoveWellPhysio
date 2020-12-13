import React from 'react'

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
    buttonText: "Book A Class",
    href: URL.CLINIKO,
}

export default function BookGroupClassButton(props) {
    const classes = useStyles()

    return (
        <BlockButton color={"dark"} href={data.href}>
            <p className={classes.para}>
                <b>{data.buttonText}</b>
            </p>
        </BlockButton>
    )
}
