import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import SocialButtonGroup from "../Buttons/SocialButtonGroup";

import {grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import FooterData from "assets/data/components/footer";
import Colours from "assets/strings/colours";
import AJAXLogo from "assets/img/logos/AJAX.png"
import MaccabiLogo from "assets/img/logos/MacabbiCricket.jpg"

const useStyles = makeStyles({
    footer: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "& ul": {
            marginTop: "auto",
            marginBottom: "auto"
        },
        "& ul li": {
            display: "inline-block",
        },
        "& h4, & h5": {
            color: whiteColor,
            textDecoration: "none"
        },
    },
    footerBrand: {
        color: Colours.green,
        margin: "0",
    },
    leftItem: {
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        display: "flex",
        minWidth: "33%",
    },
    centerItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        minWidth: "33%",
    },
    rightItem: {
        minWidth: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    supporterLogo: {
        height: "80px",
        width: "auto",
        display: "inline",
        marginLeft: "10px",
        marginRight: "10px"
    },
    dark: {
        background:
            "radial-gradient(ellipse at center," +
            grayColor[4] +
            " 0," +
            grayColor[5] +
            " 100%)",
        backgroundSize: "550% 450%",
        color: whiteColor,
        "& p": {
            color: grayColor[0]
        },
        "& i": {
            color: whiteColor
        },
        "& a": {
            color: whiteColor,
            opacity: ".86",
            "&:visited": {
                color: whiteColor
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
        "& hr": {
            borderColor: "rgba(" + hexToRgb(whiteColor) + ",0.2)"
        }
    }
});

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
                spacing={3}
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
            >
                <Grid item xs={12} sm={12} md={4} className={classes.leftItem}>
                    <div style={{marginLeft: "auto", marginRight: "auto"}}>
                        <h3 className={classes.footerBrand}>
                            {FooterData.core.header}
                        </h3>
                        <h5 className={classes.footerBrand}>
                            {FooterData.core.address1}
                        </h5>
                        <h5 className={classes.footerBrand}>
                            {FooterData.core.address2}
                        </h5>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.centerItem}>
                    <h3 style={{textAlign: "center", marginTop: "10px"}}>
                        {FooterData.middle.header}
                    </h3>
                    <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                        <img src={AJAXLogo} className={classes.supporterLogo}/>
                        <img src={MaccabiLogo} className={classes.supporterLogo}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={classes.rightItem}>
                    <SocialButtonGroup />
                </Grid>
            </Grid>
        </footer>
    )
}
