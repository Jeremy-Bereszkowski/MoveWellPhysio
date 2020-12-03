import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import {
  infoColor,
  whiteColor,
  title, hexToRgb, blackColor
} from "assets/jss/nextjs-material-kit-pro.js";

const background = "/physio/layout.jpg"

const useStyles = makeStyles({
  progress: {
    color: infoColor[0],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    backgroundImage: "url("+background+")",
    margin: "0",
    padding: "0",
    textAlign: "center",
    position: "absolute",
    zIndex: "0",
    top: "0",
    height: "100%",
    width: "100%",
    backgroundSize: "cover"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    ...title,
    color: whiteColor
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
});

export default function PageChange(props) {
  const classes = useStyles();
  return (
    <div className={classes.imageTint}>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
