import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import Button from "../CustomButtons/Button";

import AJAXLogo from "../../assets/img/logos/AJAX.png"
import MaccabiLogo from "../../assets/img/logos/MacabbiCricket.jpg"

import styles from "./footerStyles";
const useStyles = makeStyles(styles);

export default function Footer() {
    const classes = useStyles();
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes["dark"]]: true,
    });

    return (
        <footer className={footerClasses}>
            <Grid
                container
                spacing={4}
                direction={"row"}
                justify={"space-around"}
                alignContent={"center"}
            >
                <Grid item className={classes.leftItem}>
                    <h3 className={classes.footerBrand}>
                        MoveWell Physiotherapy
                    </h3>
                    <h5 className={classes.footerBrand}>
                        181 Bay Street
                    </h5>
                    <h5 className={classes.footerBrand}>
                        Brighton, VIC, 3188
                    </h5>
                </Grid>
                <Grid item className={classes.centerItem}>
                    <h3 style={{display: "inline"}}>Supporters: </h3>
                    <img src={AJAXLogo} className={classes.supporterLogo}/>
                    <img src={MaccabiLogo} className={classes.supporterLogo}/>
                </Grid>
                <Grid item className={classes.rightItem}>
                    <ul>
                        <li>
                            <Button
                                href="https://www.facebook.com/movewellmelbourne"
                                target="_blank"
                                color="white"
                                justIcon
                                simple
                            >
                                <i className="fab fa-facebook" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                href="https://www.instagram.com/movewellmelbourne/"
                                target="_blank"
                                color="white"
                                justIcon
                                simple
                            >
                                <i className="fab fa-instagram" />
                            </Button>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </footer>
    )
}
