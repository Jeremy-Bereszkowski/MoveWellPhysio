import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";
import Colours from "../../assets/strings/colours";
import URL from "../../assets/strings/urls";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
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

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor={dropdownHoverColor}
              buttonText="Services"
              buttonProps={{
                className: classes.navLink,
                color: Colours.green
              }}
              dropdownList={[
                <Link href={URL.PHYSIOTHERAPY}>
                  <Button className={classes.subHeadingButton}>
                    <b>
                      PHYSIOTHERAPY
                    </b>
                  </Button>
                </Link>,
                <Link href="/">
                  <Button className={classes.subHeadingButton}>
                    <b>
                      PHYSIO-LEAD REHABILITATION CLASSES
                    </b>
                  </Button>
                </Link>,
                <Link href="/">
                  <Button className={classes.subHeadingButton}>
                    <b>
                      FOCUSED GROUP EXERCISE
                    </b>
                  </Button>
                </Link>,
                <Link href="/">
                  <Button className={classes.subHeadingButton}>
                    <b>
                      PROFESSIONAL MENTORING
                    </b>
                  </Button>
                </Link>,
              ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href={URL.ABOUT}>
            <Button className={classes.button}>
              About MoveWell
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/">
            <Button className={classes.button}>
              Book Online
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href={URL.CONTACT}>
            <Button className={classes.button}>
              Contact
            </Button>
          </Link>
        </ListItem>
      </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
