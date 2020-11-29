import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GridItem from "../../components/Grid/GridItem";

import styles from "./introVideoStyles";
const useStyles = makeStyles(styles);

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

