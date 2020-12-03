import {
    bodyHeaderText,
    bodyParaText,
    extraSmallFont,
    largeFont,
    smallFont
} from "../../assets/jss/coreStyles";
import {blackColor, grayColor, hexToRgb} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";

const styles = {
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    blackBodyText: {
        ...bodyParaText,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
    clientText: {
        ...smallFont,
        fontWeight: "400",
        marginBottom: "-1vh",
        color: Colours.green,
    },
    bodyParaText: {
        ...smallFont,
        fontWeight: "600",
        color: grayColor[10]
    },
    clientParaText: {
        ...extraSmallFont,
        fontWeight: "600",
        color: grayColor[8]
    },
    bodyHeaderText: {
        ...largeFont,
        color: Colours.green,
        fontWeight: "400"
    },
    divPadding: {
        paddingLeft: "4vw",
        paddingRight: "4vw",
    },
    image: {
        maxWidth: "100%",
        width: "100%",
        height: "auto",
        maxHeight: "1600px",
        position: "relative",
        marginRight: "-40vw",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 6px 30px 5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
    },
    filter: {},
    darkColor: {
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
}

export default styles
