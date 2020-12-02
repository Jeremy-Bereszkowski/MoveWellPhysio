import {
  blackColor,
  grayColor,
  whiteColor,
  mlAuto,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";
import Colours from "../../../strings/colours";

const headerLinksStyle = theme => ({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0"
  },
  mlAuto,
  button: {
    color: whiteColor,
    backgroundColor: "transparent",
    minHeight: "auto",
    minWidth: "auto",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
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
      backgroundColor: Colours.green,
      boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(grayColor[0]) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(blackColor) +
          ", 0.12), 0 8px 10px -5px rgba(" +
          hexToRgb(grayColor[0]) +
          ", 0.2)"
    },
  },
});

export default headerLinksStyle;
