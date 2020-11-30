import {blackColor, grayColor, hexToRgb, title, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
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
        /*"@media (min-width: 576px)": {
            maxWidth: "540px"
        },
        "@media (min-width: 768px)": {
            maxWidth: "720px"
        },
        "@media (min-width: 992px)": {
            maxWidth: "960px"
        },
        "@media (min-width: 1200px)": {
            maxWidth: "1140px"
        },*/
        zIndex: "2"
    },
    bodyContainer: {
        paddingRight: "1vw",
        paddingLeft: "1vw",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: whiteColor,
        textDecoration: "none",
        fontSize: "5vw",
        textTransform: "uppercase",
    },
    titleSubHeading: {
        fontSize: "1.5vw",
    },
    section: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        paddingBottom: "20px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    main: {
        background: grayColor[16],
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        "@media (max-width: 576px)": {
            marginTop: "-20px"
        },
        "@media (max-width: 830px)": {
            marginLeft: "10px",
            marginRight: "10px"
        },
        margin: "-20px 0px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 6px 30px 5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
        paddingTop: "3vh",
        paddingBottom: "50px",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    hr: {
        marginTop: "40px",
        borderTop: "1px solid black"
    },
    greenHr: {
        borderTop: "7px solid " + Colours.green
    },
    large: {
        maxWidth: "90%"
    },
    medium: {
        maxWidth: "70%"
    },
}

export default styles
