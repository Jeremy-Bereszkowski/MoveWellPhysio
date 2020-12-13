import Colours from "../strings/colours";
import {blackColor, hexToRgb, title, whiteColor} from "./nextjs-material-kit-pro";

const extraSmallFont = {
    fontSize: "calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)))"
}

const smallFont = {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))"
}

const mediumFont = {
    fontSize: "calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)))"
}

const largeFont = {
    fontSize: "calc(36px + (56 - 36) * ((100vw - 300px) / (1600 - 300)))"
}

const parallaxHeaderText = {
    ...title,
    ...largeFont,
    display: "inline-block",
    position: "relative",
    color: whiteColor,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const bodyHeaderText = {
    ...largeFont,
    color: Colours.green,
    margin: "0",
    fontWeight: "150",
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
    lineHeight: "6vh",
    textTransform: "uppercase",
}
const bodyParaText = {
    ...smallFont,
    fontWeight: "400",
    lineHeight: "3vh",
    marginTop: "3vh",
    marginBottom: "3vh",
    marginLeft: "2vw",
    marginRight: "2vw",
}

const bodyActionText = {
    ...mediumFont,
    color: Colours.green,
    margin: "0",
    fontWeight: "200",
    marginTop: "2vh",
    marginBottom: "2vh",
    lineHeight: "6vh",
    textTransform: "uppercase",
}

const darkColor = {
    "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
    }
}

const blackHrThin = {
    marginTop: "4vh",
    marginBottom: "4vh",
    borderTop: "1px solid black"
}

const greenHrThick = {
    borderTop: "7px solid " + Colours.green,
    marginLeft: "10%",
    marginRight: "10%",
}

export {
    extraSmallFont,
    smallFont,
    mediumFont,
    largeFont,

    parallaxHeaderText,

    bodyHeaderText,
    bodyParaText,
    bodyActionText,

    darkColor,

    blackHrThin,
    greenHrThick,
}
