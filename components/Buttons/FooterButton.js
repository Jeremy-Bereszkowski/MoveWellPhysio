import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  behanceColor,
  blackColor, dangerColor, dribbbleColor, facebookColor, googleColor,
  grayColor,
  hexToRgb, infoColor, instagramColor, linkedinColor, pinterestColor,
  primaryColor, redditColor, roseColor,
  successColor, tumblrColor, twitterColor, warningColor,
  whiteColor, youtubeColor
} from "../../assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: grayColor[0],
    color: whiteColor,
    boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.12)",
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
    "&:hover,&:focus": {
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
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: whiteColor,
      color: grayColor[0]
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: whiteColor,
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: primaryColor[0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: infoColor[0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: successColor[0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: warningColor[0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: roseColor[0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: dangerColor[0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: twitterColor
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: facebookColor
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: googleColor
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: linkedinColor
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: pinterestColor
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: youtubeColor
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: tumblrColor
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: grayColor[8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: behanceColor
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: dribbbleColor
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: redditColor
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: instagramColor
      }
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
});

const FooterButton = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes["white"]]: true,
    [classes.simple]: true,
    [classes.justIcon]: true,
  });

  return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
  );
});

FooterButton.propTypes = {
  children: PropTypes.node,
};

export default FooterButton;
