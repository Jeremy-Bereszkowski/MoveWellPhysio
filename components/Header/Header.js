import React from "react";
import Link from "next/link";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";

import HeaderLinks from "./HeaderLinks";

import {
  blackColor, boxShadow, dangerColor,
  defaultFont, drawerWidth,
  grayColor,
  hexToRgb, infoColor,
  primaryColor, roseColor, successColor, transition, warningColor,
  whiteColor
} from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";
import URL from "assets/strings/urls";
import Logo from "assets/img/logos/1x/Asset 1mdpi.png"

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: grayColor[15],
    width: "100%",
    backgroundColor: whiteColor,
    boxShadow:
        "0 4px 18px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 7px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "4%",
    marginLeft: "4%",
    width: "100%",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  title: {
    letterSpacing: "unset",
    "&,& a": {
      ...defaultFont,
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    }
  },
  appResponsive: {
    margin: "50px 10px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.46)"
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.46)"
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.46)"
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.46)"
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.46)"
  },
  rose: {
    backgroundColor: roseColor[0],
    color: whiteColor,
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(roseColor[0]) +
        ", 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: whiteColor
  },
  dark: {
    color: whiteColor,
    backgroundColor: grayColor[9] + " !important",
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(grayColor[9]) +
        ", 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: grayColor[15],
    backgroundColor: whiteColor + " !important",
    boxShadow:
        "0 4px 18px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 7px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.15)"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    backgroundColor: Colours.dark
  },
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1",
    color: "white"
  }
}));

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [logoClass, setLogoClass] = React.useState({height: "auto", width: "18vw", minWidth: "150px"})
  const classes = useStyles();
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
      setLogoClass({height: "auto", width: "5vw", minWidth: "150px"})
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      setLogoClass({height: "auto", width: "18vw", minWidth: "150px"})
    }
  };
  const { color, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return (
    <AppBar className={appBarClasses}>
      <div className={classes.container}>
        <Button className={classes.title}>
          <Link href={URL.LANDING_PAGE} as={URL.ROOT}>
            <img src={Logo} style={logoClass}/>
          </Link>
        </Button>
        <Hidden mdDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{<HeaderLinks onClick={handleDrawerToggle}/>}</div>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </div>
      <Hidden lgUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{<HeaderLinks vertical onClick={handleDrawerToggle}/>}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
