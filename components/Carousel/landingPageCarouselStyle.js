import {blackColor, container, grayColor, hexToRgb, title} from "../../assets/jss/nextjs-material-kit-pro";

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
        backgroundSize: "cover",
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
        marginBottom: "500px",
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
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontSize: "6.125rem"
    },
    title2: {
        fontWeight: "1000",
        marginBottom: "25px",
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontSize: "6.125rem",
        maxWidth: "70%",
        marginLeft: "auto",
        marginRight: "auto",
    }
};

export default landingPageCarouselStyle;
