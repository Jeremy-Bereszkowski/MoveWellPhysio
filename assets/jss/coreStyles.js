import Colours from "../strings/colours";
import {blackColor, grayColor, hexToRgb, title, whiteColor} from "./nextjs-material-kit-pro";

const extraSmallFont = {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))"
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
    ...largeFont,
    /*fontFamily: `"Roboto Slab", "Times New Roman", serif`,*/
    fontWeight: "700",
    color: whiteColor,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const parallaxSubHeaderText = {
    ...extraSmallFont,
    fontWeight: "350",
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
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "6vh",
}

const bodyHeaderText2 = {
    fontSize: "calc(28px + (48 - 28) * ((100vw - 300px) / (1600 - 300)))",
    color: Colours.green,
    margin: "0",
    fontWeight: "150",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "6vh",
}

const bodyParaText1 = {
    ...smallFont,
    fontWeight: "400",
    lineHeight: "3vh",
    textAlign: "left",
}

const bodyParaText2 = {
    ...smallFont,
    fontWeight: "200",
    textAlign: "left",
}

const bodyParaText3 = {
    ...smallFont,
    fontWeight: "400",
    textAlign: "left",
}

const bodyParaText4 = {
    ...extraSmallFont,
    fontWeight: "500",
    color: grayColor[8]
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
    parallaxSubHeaderText,

    bodyHeaderText,
    bodyHeaderText2,
    bodyParaText1,
    bodyParaText2,
    bodyParaText3,
    bodyParaText4,
    bodyActionText,

    darkColor,

    blackHrThin,
    greenHrThick,
}
