import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {m404Background} from "assets/data/global";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import {blackColor, hexToRgb, title, whiteColor} from "../assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles(theme => ({
    contentCenter: {
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: "3",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        color: whiteColor,
        padding: "0 15px",
        width: "100%",
        maxWidth: "880px"
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "5.7em"
        },
        ...title,
        fontSize: "13.7em",
        color: whiteColor,
        letterSpacing: "14px !important",
        fontWeight: "700"
    },
    subTitle: {
        fontSize: "2.25rem",
        marginTop: "0",
        marginBottom: "8px"
    },
    description: {
        fontSize: "1.125rem",
        marginTop: "0",
        marginBottom: "8px"
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        }
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block",
        "&,& *,& *:hover,& *:focus": {
            color: "inherit !important"
        }
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right",
        "&,& *,& *:hover,& *:focus": {
            color: "inherit !important"
        }
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    }
}));

export default function ErrorPage({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + m404Background + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.contentCenter}>
                    <Grid
                        container
                        direction={"row"}
                        alignContent={"center"}
                        justify={"center"}
                    >
                        <Grid item md={12}>
                            <h1 className={classes.title}>404</h1>
                            <h2 className={classes.subTitle}>Page not found :(</h2>
                            <h4 className={classes.description}>
                                Oooops! Looks like you got lost.
                            </h4>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </HeaderFooterLayout>
    );
}
