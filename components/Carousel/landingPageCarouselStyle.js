import {blackColor, container, grayColor, hexToRgb, title, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import image1 from "../../assets/img/physio/layout_1.jpg";
import Colours from "../../assets/strings/colours";

const landingPageCarouselStyle = {
    section: {
        padding: "70px 0"
    },
    container,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    },
    filter: {},
    imageTint: {
        backgroundSize: "contain",
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
    },
    dots: {
        marginRight: "20%",
        marginTop: "0",
        marginBottom: "1rem",
        position: "absolute",
        bottom: "5px",
        width: "100%",
        padding: "0",
        listStyle: "none",
        textAlign: "center",
        zIndex: "3"
    },
    imageText: {
        marginBottom: "25vh",
        paddingBottom: "45px",
        position: "absolute",
        right: "15%",
        bottom: "20px",
        left: "15%",
        zIndex: "10",
        paddingTop: "20px",
        color: "#ffffff",
        textAlign: "center",
        display: "block!important",
    },
    title: {
        fontWeight: "1000",
        marginBottom: "25px",
        fontFamily: `"Roboto Slab", "Times New Roman", sans-serif`,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontSize: "10vh"
    },
    title2: {
        fontWeight: "1000",
        marginBottom: "25px",
        fontFamily: `"Roboto Slab", "Times New Roman", sans-serif`,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontSize: "6.125rem",
        maxWidth: "75%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        minWidth: "auto",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".7125rem 1px",
        marginTop: "25px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
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
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            marginTop: "-1em",
            marginBottom: "-1em",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginTop: "0px",
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px"
            }
        }

    },
    imageStyle: {
        backgroundImage: "url(" + image1 + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100vh",
        width: "auto",
        minWidth: "100%",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
    }
};

export default landingPageCarouselStyle;
