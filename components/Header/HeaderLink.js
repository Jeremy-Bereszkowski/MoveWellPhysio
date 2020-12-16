import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles";

import HeaderButton from "./HeaderButton";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme => ({
    navLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
            color: "inherit"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            "& ul": {
                maxHeight: "300px",
                overflow: "scroll"
            },
            width: "100%",
            "&:not(:last-child)": {
                "&:after": {
                    width: "calc(100% - 30px)",
                    content: '""',
                    display: "block",
                    height: "1px",
                    marginLeft: "15px",
                    backgroundColor: grayColor[14]
                }
            }
        }
    },
    vertical: {
        width: "-webkit-fill-available",
    }
}));

export default function HeaderLink(props) {
    const classes = useStyles();

    const {element, onClick, vertical} = props

    const listClasses = vertical ? classNames(classes.listItem, classes.vertical) : classes.listItem

    if (element.sub === undefined) {
        return (
            <div className={listClasses}>
                <HeaderButton element={element} onClick={onClick}/>
            </div>
        )
    } else {
        const subLinks = element.sub.map((ele) => {
            return <HeaderButton element={ele} onClick={onClick}/>
        })

        return (
            <div className={listClasses}>
                <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor={"dark"}
                    buttonText={element.core.key}
                    buttonProps={{
                        className: classes.navLink,
                        color: Colours.green
                    }}
                    dropdownList={subLinks}
                />
            </div>
        )
    }
}

HeaderLink.propTypes = {
    element: PropTypes.object,
    onClick: PropTypes.func,
    vertical: PropTypes.bool,
}
