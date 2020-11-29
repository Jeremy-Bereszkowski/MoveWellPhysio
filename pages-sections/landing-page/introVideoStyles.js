import {blackColor, grayColor, hexToRgb, section} from "../../assets/jss/nextjs-material-kit-pro";

const introVideoStyles = {
    section: {
        ...section,
        padding: "70px 0px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    iframeContainer: {
        "& > iframe": {
            width: "100%",
            boxShadow:
                "0 16px 38px -12px rgba(" +
                hexToRgb(blackColor) +
                ", 0.56), 0 4px 25px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(blackColor) +
                ", 0.2)"
        }
    },
    container: {
        maxWidth: "70%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%"
    },
    hr: {
        marginTop: "140px",
        borderTop: "1px solid black",
    },
    topMargin: {
        marginTop: "40px"
    }
};

export default introVideoStyles;
