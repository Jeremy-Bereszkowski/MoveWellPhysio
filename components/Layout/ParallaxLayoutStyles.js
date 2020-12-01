import {title, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";
import {greenParallaxText} from "../../assets/jss/coreStyles";

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
        ...greenParallaxText
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
