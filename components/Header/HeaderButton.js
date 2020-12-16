import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import PropTypes from "prop-types"
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

import {blackColor, grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme => ({
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
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
                    content: '""',
                    display: "block",
                    height: "1px",
                    backgroundColor: grayColor[14]
                }
            }
        },
    },
    button: {
        color: whiteColor,
        backgroundColor: "transparent",
        minHeight: "auto",
        width: "fill",
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
    underline: {
        borderBottom: "5px solid " + Colours.green,
    }
}));

export default function HeaderButton(props) {
    const classes = useStyles();

    const {element, onClick, isList} = props

    const router = useRouter()

    const buttonStyles = element.core.link === router.pathname ?
        classNames(classes.button, classes.underline)
        :
        classes.button

    const InternalLink = () => {
        return (
            <Link href={element.core.link} as={element.core.as}>
                <Button className={buttonStyles} onClick={onClick} fullWidth>
                    {element.core.key}
                </Button>
            </Link>
        )
    }

    const ExternalLink = () => {
        return (
            <Button className={buttonStyles} onClick={onClick} fullWidth href={element.core.href}>
                {element.core.key}
            </Button>
        )
    }

    const ListBlock = () => {
        return (
            <ListItem className={classes.listItem}>
                {
                    element.core.link === undefined ? null : <InternalLink/>
                }
                {
                    element.core.href === undefined ? null : <ExternalLink/>
                }
            </ListItem>
        )
    }

    const Block = () => {
        return (
            <div className={classes.listItem}>
                {
                    element.core.link === undefined ? null : <InternalLink/>
                }
                {
                    element.core.href === undefined ? null : <ExternalLink/>
                }
            </div>
        )
    }

    return (
        <>
            {
                isList === true ? <ListBlock /> : <Block />
            }
        </>
    )
}

HeaderButton.defaultProps = {
    isList: true
}

HeaderButton.propTypes = {
    element: PropTypes.object,
    onClick: PropTypes.func,
    isList: PropTypes.bool,
}
