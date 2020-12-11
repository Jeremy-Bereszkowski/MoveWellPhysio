import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import PropTypes from "prop-types"
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

import styles from "./headerButtonStyles";
const useStyles = makeStyles(styles);

export default function HeaderButton(props) {
    const classes = useStyles();

    const {element, onClick} = props

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

HeaderButton.propTypes = {
    element: PropTypes.object,
    onClick: PropTypes.func,
}
