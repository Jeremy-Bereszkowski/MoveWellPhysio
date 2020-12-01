import {blackColor, grayColor, hexToRgb} from "../../assets/jss/nextjs-material-kit-pro";

const styles = {
    bodyContainer: {
        paddingRight: "1vw",
        paddingLeft: "1vw",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
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
        paddingTop: "5vh",
        paddingBottom: "3vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
    },
    large: {
        maxWidth: "90%"
    },
    medium: {
        maxWidth: "70%"
    },

}

export default styles
