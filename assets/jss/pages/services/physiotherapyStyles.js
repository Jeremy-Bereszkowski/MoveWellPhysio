import Colours from "../../../strings/colours";
import {blackColor, grayColor, hexToRgb, whiteColor} from "../../nextjs-material-kit-pro";

const styles = {
    hr: {
        marginTop: "5vh",
        borderTop: "1px solid black"
    },
    greenHeaderText: {
        marginTop: "-2vh",
        color: Colours.green,
        fontWeight: "800",
        textTransform: "uppercase",
        textAlign: "center"
    },
    blackBodyText: {
        fontWeight: "400",
        textAlign: "left"
    },
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        width: "30vw",
        height: "6vh",
        maxWidth: "200px",
        maxHeight: "120px",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        padding: "12px 30px",
        marginTop: "25px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover": {
            color: whiteColor,
            backgroundColor: grayColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.2)"
        },

    },
}

export default styles
