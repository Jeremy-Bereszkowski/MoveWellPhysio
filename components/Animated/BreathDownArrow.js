import React from 'react'
import gsap from "gsap"

import {makeStyles} from "@material-ui/core/styles"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles(theme => ({
    iconStyle: {
        width: "4vh",
        height: "4vh",
        maxHeight: "40px",
        maxWidth: "40px",
        minHeight: "25px",
        minWidth: "25px",
        marginTop: "0.5vh",
        color: "transparent"
    }
}))


export default function BreathDownArrow() {
    const classes = useStyles()

    let intro = React.useRef(null)

    const textIntro = elem => {
        gsap.to(elem, 1, {
            delay: 1,
            scale: 1.25,
            opacity: 1,
            repeat: 5,
            yoyo: true,
            color: "black",
        })
    }

    React.useEffect(() => {
        //animate text
        textIntro(intro)
    }, [])

    return (
        <ArrowDownwardIcon ref={(el) => (intro = el)} className={classes.iconStyle}/>
    );
}

Function.defaultProps = {}

Function.propTypes = {}
