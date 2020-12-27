import React from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {makeStyles} from "@material-ui/core/styles"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles(theme => ({

}))


export default function BreathDownArrow() {
    const classes = useStyles()

    let intro = React.useRef(null)

    const textIntro = elem => {
        let tl = gsap.timeline({repeat: -1})
        tl.to(elem, {autoAlpha: 0})
        tl.to(elem, {autoAlpha: 0.5})
        tl.to(elem, {autoAlpha: 1})
    };

    React.useEffect(() => {
        //animate text
        textIntro(intro)
    }, [])

    return (
        <ArrowDownwardIcon ref={(el) => (intro = el)} style={{width: "4vh", height: "4vh", maxHeight: "40px", maxWidth: "40px", minHeight: "25px", minWidth: "25px", color: grayColor[3]}}/>
    );
}

Function.defaultProps = {}

Function.propTypes = {}
