import React from "react";
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import HeaderLink from "./HeaderLink";

import {blackColor, grayColor, hexToRgb, mlAuto, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import HeaderLinkData from "assets/data/components/header";
import Colours from "assets/strings/colours";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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
}));

export default function HeaderLinks(props) {
  const {onClick, vertical} = props

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
          /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const classes = useStyles();
  return (
      <>
        {
          vertical === true ?
              <Grid
                  container
                  direction={"column"}
                  alignContent={"stretch"}
                  alignItems={"stretch"}
                  justify={"center"}
              >
                {
                  HeaderLinkData.map(element => {
                    return (
                        <Grid item>
                          <HeaderLink vertical element={element} onClick={onClick}/>
                        </Grid>
                    )
                  })
                }
              </Grid>
              :
              <div className={classes.mlAuto}>
                {
                  HeaderLinkData.map(element => {
                    return (
                        <HeaderLink element={element} onClick={onClick}/>
                    )
                  })
                }
              </div>
        }
      </>
  );
}

HeaderLinks.defaultProps = {
  vertical: false,
}

HeaderLinks.propTypes = {
  onClick: PropTypes.func,
  vertical: PropTypes.bool,
}
