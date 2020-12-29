import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

import LandingHeader from "components/Header/Header";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(theme => ({}))

export default function HeaderFooterLayout(props) {
    const classes = useStyles()
    const {children} = props

    return (
        <>
            <LandingHeader />
            {children}
            <Footer />
        </>
    )
}
