import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/nextjs-material-kit-pro/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();

  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });

  return (
      <div
          className={parallaxClasses}
          style={{
            ...style,
            backgroundImage: "url(" + image + ")",
          }}
      >
        {children}
      </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf([
    "primary",
    "rose",
    "dark",
    "info",
    "success",
    "warning",
    "danger"
  ]),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
