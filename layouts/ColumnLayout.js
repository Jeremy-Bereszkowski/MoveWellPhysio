import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: "1250px",
        margin: "2vh auto"
    }
}))

export default function ColumnLayout(props) {
    const classes = useStyles()

    const {children} = props

    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}
