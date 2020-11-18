import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Button from "../CustomButtons/Button";
import styles from "./mainfooterStyles";

const useStyles = makeStyles(styles);

export default function MainFooter(props) {
    const classes = useStyles();
    const theme = "dark"
    const themeType = theme === "transparent" || theme == undefined ? false : true;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes[theme]]: themeType,
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.footerContainer}>
                <div>
                    <div className={classes.left}>
                        <a
                            href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components"
                            target="_blank"
                            className={classes.footerBrand}
                        >
                            MoveWell Physiotherapy
                        </a>
                    </div>
                    <div className={classes.pullCenter}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="http://blog.creative-tim.com/?ref=njsmkp-footer-components"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Blog
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://www.creative-tim.com/presentation?ref=njsmkp-footer-components"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Presentation
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="#pablito"
                                    onClick={e => e.preventDefault()}
                                    className={classes.block}
                                >
                                    Discover
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="#pablito"
                                    onClick={e => e.preventDefault()}
                                    className={classes.block}
                                >
                                    Payment
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-footer-components"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Contact us
                                </a>
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.rightLinks}>
                        <ul>
                            <li>
                                <Button
                                    href="https://twitter.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    color="white"
                                    justIcon
                                    simple
                                >
                                    <i className="fab fa-twitter" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="https://dribbble.com/creativetim?ref=creativetim"
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
                                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                                    target="_blank"
                                    color="white"
                                    justIcon
                                    simple
                                >
                                    <i className="fab fa-instagram" />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.clearFix} />
            </div>
        </footer>
    )
}
