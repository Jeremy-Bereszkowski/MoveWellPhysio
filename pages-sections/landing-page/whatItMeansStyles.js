import {
    mlAuto,
    mrAuto,
    title,
    cardTitle,
    description,
    coloredShadow,
    whiteColor,
    sectionDark,
    hexToRgb, grayColor, mainRaised, section, blackColor
} from "assets/jss/nextjs-material-kit-pro.js";
import Colours from "../../assets/strings/colours";

const whatItMeansStyles = {
    mlAuto,
    mrAuto,
    title,
    description,
    coloredShadow,
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
    projects: {
        padding: "80px 0",
        background: grayColor[14],
        backgroundPosition: "50%",
        backgroundSize: "cover",
        "& hr": {
            margin: "70px auto",
            maxWidth: "970px"
        }
    },
    tabSpace: {
        padding: "20px 0 50px 0px"
    },
    cardCategory: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important",
        marginTop: "10px"
    },
    cardTitleWhite: {
        ...cardTitle,
        color: whiteColor + "  !important",
        marginTop: "10px !important"
    },
    cardDescription: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important"
    },
    sectionSpace: {
        height: "60px",
        display: "block"
    },
    marginTop20: {
        marginTop: "20px"
    },
    card2: {
        textAlign: "center"
    },
    sectionDark: {
        ...sectionDark,
        backgroundSize: "550% 450%",
        "& $title, & $cardTitle": {
            color: whiteColor
        },
        "& $cardCategory": {
            color: "rgba(" + hexToRgb(whiteColor) + ", 0.5) !important"
        },
        "& $cardDescription": {
            color: "rgba(" + hexToRgb(whiteColor) + ", 0.76) !important"
        }
    },
    projects3: {
        "& $title": {
            marginBottom: "80px",
            marginTop: "5px"
        },
        "& h6": {
            marginBottom: "5px"
        }
    },
    card4: {
        marginTop: "0",
        marginBottom: "0",
        "& $cardTitle": {
            color: whiteColor
        }
    },
    cardBody4: {
        paddingTop: "140px",
        paddingBottom: "140px"
    },
    info4: {
        padding: "0"
    },
    subHeaderText: {
        color: Colours.green,
        margin: "0",
        fontSize: "2vw",
        marginTop: "2vh",
        marginBottom: "2vh",
    },
    middleText: {
        fontSize: "1vw",
        marginTop: "2vh",
        marginBottom: "2vh",
        marginLeft: "2px",
        marginRight: "2vw",
    },
    mainRaised: {
        ...mainRaised
    },
    section: {
        ...section,
        padding: "70px 0px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    inlineBlock: {
        display: "inline-block"
    },
    arrow: {
      paddingTop: "6px"
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
        borderTop: "1px solid black"
    },
    topMargin: {
        marginTop: "40px"
    },
    parallax: {
        height: "72vh",
        width: "auto",
        maxHeight: "1600px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        boxShadow:
            "0 16px 24px 2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 6px 30px 5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
        borderRadius: "6px"
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
};

export default whatItMeansStyles;
