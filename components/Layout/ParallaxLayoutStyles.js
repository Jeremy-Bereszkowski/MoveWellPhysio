import {title, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";

const styles = {
    container: {
        color: whiteColor,
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        maxWidth: "60%",
        zIndex: "2"
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: whiteColor,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center"
    },
    titleSubHeading: {
        textAlign: "center"
    },
    flexItem: {
        display: "flex",
    },
    greenHr: {
        borderTop: "7px solid " + Colours.green
    },
}

export default styles
