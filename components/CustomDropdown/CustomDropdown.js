import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {useRouter} from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";

import URL from "../../assets/strings/urls";
import {
  blackColor, dangerBoxShadow, dangerColor,
  defaultFont,
  grayColor,
  hexToRgb, infoBoxShadow, infoColor, primaryBoxShadow,
  primaryColor, roseBoxShadow, roseColor, successBoxShadow, successColor, warningBoxShadow, warningColor,
  whiteColor
} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";

const useStyles = makeStyles(theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      "&, &$popperResponsive": {
        position: "static !important",
        left: "unset !important",
        top: "unset !important",
        transform: "none !important",
        willChange: "none !important",
        "& > div": {
          boxShadow: "none !important",
          transition: "none !important",
          marginTop: "0px !important",
          marginBottom: "5px !important",
          padding: "0px !important"
        }
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    },
    color: "transparent",
  },
  innerManager: {
    /*display: "block",*/
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "center"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: " 0",
    margin: "0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: Colours.dark,
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 auto",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: grayColor[8],
    whiteSpace: "nowrap",
    minHeight: "unset"
  },
  darkHover: {
    "&:hover": {
      boxShadow:
          "0 4px 20px 0px rgba(" +
          hexToRgb(blackColor) +
          ", 0.14), 0 7px 10px -5px rgba(" +
          hexToRgb(grayColor[9]) +
          ", 0.4)",
      backgroundColor: grayColor[9],
      color: whiteColor
    }
  },
  primaryHover: {
    "&:hover": {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow
    }
  },
  infoHover: {
    "&:hover": {
      backgroundColor: infoColor[0],
      color: whiteColor,
      ...infoBoxShadow
    }
  },
  successHover: {
    "&:hover": {
      backgroundColor: successColor[0],
      color: whiteColor,
      ...successBoxShadow
    }
  },
  warningHover: {
    "&:hover": {
      backgroundColor: warningColor[0],
      color: whiteColor,
      ...warningBoxShadow
    }
  },
  dangerHover: {
    "&:hover": {
      backgroundColor: dangerColor[0],
      color: whiteColor,
      ...dangerBoxShadow
    }
  },
  roseHover: {
    "&:hover": {
      backgroundColor: roseColor[0],
      color: whiteColor,
      ...roseBoxShadow
    }
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: grayColor[10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  },
  button: {
    backgroundColor: "transparent",
    minHeight: "auto",
    minWidth: "auto",
    color: whiteColor,
    border: "none",
    borderRadius: "3px",
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
  },
  underline: {
    borderBottom: "5px solid " + Colours.green,
  }
}));

export default function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const router = useRouter()

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const handleCloseMenu = param => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });


  var buttonStyles

  switch (router.pathname) {
    case URL.PHYSIOTHERAPY:
    case URL.PHYSIO_LEAD_REHAB:
    case URL.FOCUSED_GROUP_EXERCISE:
    case URL.PROFESSIONAL_MENTORING:
      buttonStyles = classNames(classes.button, classes.underline)
      console.log(router.pathname, URL.PHYSIO_LEAD_REHAB)
    default:
      buttonStyles = classes.button
  }

  const dropDownMenu = (
      <MenuList role="menu" className={classes.menuList}>
        {dropdownHeader !== undefined ? (
            <MenuItem
                onClick={() => handleCloseMenu(dropdownHeader)}
                className={classes.dropdownHeader}
            >
              {dropdownHeader}
            </MenuItem>
        ) : null}
        {dropdownList.map((prop, key) => {
          if (prop.divider) {
            return (
                <Divider
                    key={key}
                    onClick={() => handleCloseMenu("divider")}
                    className={classes.dropdownDividerItem}
                />
            );
          } else if (
              prop.props !== undefined &&
              prop.props["data-ref"] === "multi"
          ) {
            return (
                <MenuItem
                    key={key}
                    className={dropdownItem}
                    style={{ overflow: "visible", padding: 0 }}
                >
                  {prop}
                </MenuItem>
            );
          }
          return (
              <MenuItem
                  key={key}
                  onClick={() => handleCloseMenu(prop)}
                  className={dropdownItem}
              >
                {prop}
              </MenuItem>
          );
        })}
      </MenuList>
  );
  return (
      <div className={innerDropDown ? classes.innerManager : classes.manager}>
        <div className={buttonText !== undefined ? "" : classes.target}>
          <Button
              className={buttonStyles}
              onClick={handleClick}
              fullWidth
          >
            {buttonIcon !== undefined ? (
                <props.buttonIcon className={classes.buttonIcon} />
            ) : null}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            transition
            disablePortal
            placement={dropPlacement}
            className={classNames({
              [classes.popperClose]: !anchorEl,
              [classes.popperResponsive]: true,
              [classes.popperNav]: Boolean(anchorEl) && navDropdown
            })}
        >
          {() => (
              <Grow
                  in={Boolean(anchorEl)}
                  id="menu-list"
                  style={
                    dropup
                        ? { transformOrigin: "0 100% 0" }
                        : { transformOrigin: "0 0 0" }
                  }
              >
                <Paper className={classes.dropdown}>
                  {innerDropDown ? (
                      dropDownMenu
                  ) : (
                      <ClickAwayListener onClickAway={handleClose}>
                        {dropDownMenu}
                      </ClickAwayListener>
                  )}
                </Paper>
              </Grow>
          )}
        </Popper>
      </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.object,
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  dropPlacement: PropTypes.oneOf([
    "bottom",
    "top",
    "right",
    "left",
    "bottom-start",
    "bottom-end",
    "top-start",
    "top-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end"
  ]),
  noLiPadding: PropTypes.bool,
  innerDropDown: PropTypes.bool,
  navDropdown: PropTypes.bool,
  // This is a function that returns the clicked menu item
  onClick: PropTypes.func
};
