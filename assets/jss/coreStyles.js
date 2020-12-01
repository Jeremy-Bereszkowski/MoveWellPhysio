import Colours from "../strings/colours";
import {blackColor, hexToRgb, title, whiteColor} from "./nextjs-material-kit-pro";

const greenParallaxText = {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: whiteColor,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center"
}

const bodyHeaderText = {
    color: Colours.green,
    margin: "0",
    fontSize: "45px",
    fontWeight: "150",
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
    lineHeight: "6vh",
    textTransform: "uppercase",
}
const bodyParaText = {
    fontWeight: "400",
    lineHeight: "3vh",
    marginTop: "3vh",
    marginBottom: "3vh",
    marginLeft: "2vw",
    marginRight: "2vw",
}

const bodyActionText = {
    color: Colours.green,
    margin: "0",
    fontSize: "38px",
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
    greenParallaxText,

    bodyHeaderText,
    bodyParaText,
    bodyActionText,

    darkColor,

    blackHrThin,
    greenHrThick,
}
