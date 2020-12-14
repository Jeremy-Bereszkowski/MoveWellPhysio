import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import {
    blackColor, dangerColor, grayColor, hexToRgb,
    infoColor,
    primaryColor, roseColor,
    successColor,
    warningColor,
    whiteColor
} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";
import {extraSmallFont} from "../../assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "20px",
        paddingLeft: "0",
        marginBottom: "0",
        overflow: "visible !important"
    },
    flexContainer: {
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexWrap: "wrap"
        }
    },
    displayNone: {
        display: "none !important"
    },
    fixed: {
        overflow: "visible !important"
    },
    horizontalDisplay: {
        display: "block"
    },
    pills: {
        float: "left",
        position: "relative",
        display: "block",
        borderRadius: "30px",
        minWidth: "100px",
        textAlign: "center",
        transition: "all .3s",
        padding: "10px 15px",
        color: whiteColor,
        backgroundColor: grayColor[10],
        height: "clamp(20px, 6vh, 62px)",
        opacity: "1",
        maxWidth: "100%",
        margin: "0 5px",
        minHeight: "unset",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontSize: extraSmallFont,
        fontWeight: "500",
        boxShadow:
            "0 4px 20px 0px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 7px 10px -5px rgba(" +
            hexToRgb(grayColor[10]) +
            ", 0.4)"
    },
    pillsWithIcons: {
        borderRadius: "4px"
    },
    tabIcon: {
        width: "30px",
        height: "30px",
        display: "block",
        margin: "15px 0 !important"
    },
    horizontalPills: {
        width: "100%",
        float: "none !important",
        "& + button": {
            margin: "10px 0"
        }
    },
    contentWrapper: {
        marginTop: "20px",
        "& .react-swipeable-view-container > div > div": {
            paddingLeft: "15px",
            paddingRight: "15px"
        }
    },
    green: {
        "&,&:hover": {
            color: whiteColor,
            backgroundColor: Colours.green,
            boxShadow:
                "0 4px 20px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.14), 0 7px 10px -5px rgba(" +
                hexToRgb(Colours.green) +
                ", 0.4)"
        }
    },
    alignCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    tabLabelContainer: {
        padding: "unset !important"
    },
    label: {
        fontSize: "50px"
    }
}));

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = index => {
    setActive(index);
  };
  const { tabs, direction, horizontal, alignCenter } = props;
  const classes = useStyles();
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              label: classes.label,
              selected: classes["green"]
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <Grid
        container
        direction={"row"}
        justify={"center"}
        alignContent={"stretch"}
    >
      <Grid item {...horizontal.tabsGrid}>{tabButtons}</Grid>
      <Grid item {...horizontal.contentGrid}>{tabContent}</Grid>
    </Grid>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};
