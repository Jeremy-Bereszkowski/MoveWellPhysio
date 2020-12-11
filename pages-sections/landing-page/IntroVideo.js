import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GridItem from "components/Grid/GridItem";

import {blackColor, grayColor, hexToRgb, section} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    section: {
        ...section,
        padding: "70px 0px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    iframeContainer: {
        "& > iframe": {
            width: "100%",
            boxShadow:
                "0 16px 38px -12px rgba(" +
                hexToRgb(blackColor) +
                ", 0.56), 0 4px 25px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(blackColor) +
                ", 0.2)"
        }
    },
    container: {
        maxWidth: "70%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%"
    },
    hr: {
        marginTop: "140px",
        borderTop: "1px solid black",
    },
    topMargin: {
        marginTop: "2vh"
    }
});

export default function IntroVideo(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.topMargin}
        >
            <GridItem md={10}>
                <div className={classes.iframeContainer}>
                    <iframe
                        height="800"
                        width="4000"
                        src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen=""
                        title="Tesla"
                    />
                </div>
            </GridItem>
        </Grid>
    )
}

