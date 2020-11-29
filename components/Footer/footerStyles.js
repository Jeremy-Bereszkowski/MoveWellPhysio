import { grayColor, whiteColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro.js";
import Colours from "../../assets/strings/colours";

const style = {
    footer: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "& ul": {
            marginTop: "auto",
            marginBottom: "auto"
        },
        "& ul li": {
            display: "inline-block",
        },
        "& h4, & h5": {
            color: whiteColor,
            textDecoration: "none"
        },
    },
    footerBrand: {
        color: Colours.green,
        textDecoration: "none",
        fontFamily: "Roboto Slab,Times New Roman,serif",
        margin: "0"
    },
    leftItem: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    centerItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    rightItem: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    supporterLogo: {
        height: "80px",
        width: "auto",
        display: "inline",
        marginLeft: "10px",
        marginRight: "10px"
    },
    dark: {
        background:
            "radial-gradient(ellipse at center," +
            grayColor[4] +
            " 0," +
            grayColor[5] +
            " 100%)",
        backgroundSize: "550% 450%",
        color: whiteColor,
        "& p": {
            color: grayColor[0]
        },
        "& i": {
            color: whiteColor
        },
        "& a": {
            color: whiteColor,
            opacity: ".86",
            "&:visited": {
                color: whiteColor
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
        "& hr": {
            borderColor: "rgba(" + hexToRgb(whiteColor) + ",0.2)"
        },
        "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
            color: whiteColor
        }
    }
};

export default style;
