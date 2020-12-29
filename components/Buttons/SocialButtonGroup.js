import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import FooterButton from "./FooterButton";

const useStyles = makeStyles(theme => ({}))

export default function SocialButtonGroup(props) {
    const classes = useStyles()
    const {color} = props

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
        >
            <Grid item>
                <FooterButton
                    href="https://www.facebook.com/movewellmelbourne"
                    target="_blank"
                >
                    <i className="fab fa-facebook"  style={{color: color}} />
                </FooterButton>
            </Grid>
            <Grid item>
                <FooterButton
                    href="https://www.instagram.com/movewellmelbourne/"
                    target="_blank"
                >
                    <i className="fab fa-instagram" style={{color: color}} />
                </FooterButton>
            </Grid>
        </Grid>
    )
}

SocialButtonGroup.defaultProps = {
    color: "white"
}

SocialButtonGroup.propTypes = {
    color: PropTypes.oneOf([
        "white",
        "black",
    ])
}
