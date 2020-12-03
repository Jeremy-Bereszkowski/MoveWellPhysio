import React from "react";
import Link from "next/link";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

import styles from "./headerButtonStyles";
const useStyles = makeStyles(styles);

export default function HeaderButton(props) {
    const classes = useStyles();

    const {element, onClick} = props

    return (
        <ListItem className={classes.listItem}>
            <Link href={element.core.link} as={element.core.as}>
                <Button className={classes.button} onClick={onClick}>
                    {element.core.key}
                </Button>
            </Link>
        </ListItem>
    )
}

HeaderButton.propTypes = {
    element: PropTypes.object,
    onClick: PropTypes.func,
}
