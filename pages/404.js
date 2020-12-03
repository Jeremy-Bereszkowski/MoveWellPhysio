import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {m404Background} from "../assets/data/global";

import errorPageStyle from "assets/jss/nextjs-material-kit-pro/pages/errorPageStyles.js";
const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + m404Background + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.contentCenter}>
                    <GridContainer>
                        <GridItem md={12}>
                            <h1 className={classes.title}>404</h1>
                            <h2 className={classes.subTitle}>Page not found :(</h2>
                            <h4 className={classes.description}>
                                Oooops! Looks like you got lost.
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
