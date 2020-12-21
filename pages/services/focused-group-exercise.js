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

import BookConsultButton from "components/Buttons/BookConsultButton";
import BookGroupClassButton from "components/Buttons/BookGroupClassButton";

import FocusedGroupData from "assets/data/pages/services/focusedGroup";

const useStyles = makeStyles({});

export default function FocusedGroupExercise(props) {
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={FocusedGroupData.core.parallaxImage} parallaxHeader={FocusedGroupData.core.parallaxHeader} parallaxBody={FocusedGroupData.core.parallaxBody}>
                <MainContainerLayout>
                    <ColumnLayout>
                        <Grid
                            container
                            spacing={2}
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            <Grid item>
                                <TopText/>
                            </Grid>
                            <Grid item>
                                <MiddleText />
                            </Grid>
                            <Grid item>
                                <BottomText />
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    spacing={2}
                                    direction={"row"}
                                    justify={"center"}
                                    alignContent={"center"}
                                >
                                    <Grid item>
                                        <BookConsultButton />
                                    </Grid>
                                    <Grid item>
                                        <BookGroupClassButton />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ColumnLayout>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
