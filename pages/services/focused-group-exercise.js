import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import TopText from "pages-sections/services/focused-group-page/TopText";
import MiddleText from "pages-sections/services/focused-group-page/MiddleText";
import BottomText from "pages-sections/services/focused-group-page/BottomText";

import BookingButtonsGroup from "components/Buttons/BookingButtonsGroup";

import FocusedGroupData from "assets/data/pages/services/focusedGroup";

const useStyles = makeStyles({
    spacing: {
        margin: "20px 0",
    },
});

export default function FocusedGroupExercise(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
                <MainContainerLayout>
                    <ColumnLayout>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            <Grid item className={classes.spacing}>
                                <TopText/>
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <MiddleText />
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <BottomText />
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <BookingButtonsGroup />
                            </Grid>
                        </Grid>
                    </ColumnLayout>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
