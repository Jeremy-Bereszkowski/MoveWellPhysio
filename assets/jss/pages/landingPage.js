import {blackColor, grayColor, hexToRgb, whiteColor} from "../nextjs-material-kit-pro";

const landingPageStyle = {
    sectionGray: {
        background: grayColor[14]
    },
    section: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        paddingBottom: "20px"
    },
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        maxWidth: "90%"
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
        padding: "100px"
    },
    hr: {
        marginTop: "40px",
        borderTop: "1px solid black"
    },
}

export default landingPageStyle;
