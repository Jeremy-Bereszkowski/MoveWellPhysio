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

import styles from "assets/jss/nextjs-material-kit-pro/components/customDropdownStyle.js";
import URL from "../../assets/strings/urls";
const useStyles = makeStyles(styles);

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
