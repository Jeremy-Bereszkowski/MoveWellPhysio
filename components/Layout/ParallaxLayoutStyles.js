import {whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import {greenHrThick, parallaxHeaderText} from "../../assets/jss/coreStyles";

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
        ...parallaxHeaderText,
    },
    titleSubHeading: {
        textAlign: "center"
    },
    flexItem: {
        display: "flex",
    },
    greenHr: {
        ...greenHrThick,
    },
}

export default styles
