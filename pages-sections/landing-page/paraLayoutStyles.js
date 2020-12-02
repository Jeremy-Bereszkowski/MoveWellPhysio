import {bodyActionText, bodyHeaderText, bodyParaText} from "../../assets/jss/coreStyles";
import {blackColor, hexToRgb} from "../../assets/jss/nextjs-material-kit-pro";

const styles = {
    title: {
        textAlign: "center"
    },
    bodyHeaderText: {
        ...bodyHeaderText,
        textAlign: "left",
    },
    bodyParaText: {
        ...bodyParaText,
        marginLeft: "2px",
    },
    bodyActionText: {
        ...bodyActionText
    },
    inlineBlock: {
        display: "inline-block"
    },
    arrow: {
        marginBottom: "-6px",
    },
    textDiv: {
        marginLeft: "auto",
        justify: "center",
        marginRight: "auto"
    },
    divPadding: {
        paddingLeft: "4vw",
        paddingRight: "4vw",
    },
    image: {
        width: "100%",
        height: "60vh",
        maxHeight: "1600px",
        position: "relative",
        marginRight: "-40vw",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
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
