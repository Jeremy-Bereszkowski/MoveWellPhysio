import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

import HeaderButton from "./HeaderButton";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Colours from "../../assets/strings/colours";

import styles from "./headerLinkStyles";
const useStyles = makeStyles(styles);

export default function HeaderLink(props) {
    const classes = useStyles();

    const {element} = props

    if (element.sub === undefined) {
        return (
            <HeaderButton element={element} />
        )
    } else {
        const subLinks = element.sub.map((ele) => {
            return <HeaderButton element={ele} />
        })

        return (
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor={"dark"}
                    buttonText="Services"
                    buttonProps={{
                        className: classes.navLink,
                        color: Colours.green
                    }}
                    dropdownList={subLinks}
                />
            </ListItem>
        )
    }
}

HeaderLink.propTypes = {
    element: PropTypes.object,
}
