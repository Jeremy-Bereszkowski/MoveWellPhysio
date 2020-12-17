import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import CommonInjuriesBlock from "pages-sections/services/physiotherapy/CommonInjuriesBlock";
import TimelineBlock from "pages-sections/services/physiotherapy/TimelineBlock";

import GreenHeaderBlackBody from "components/TextBlocks/GreenHeaderBlackBody";
import BookingButtonsGroup from "components/Buttons/BookingButtonsGroup";

import PhysiotherapyData from "assets/data/pages/services/physiotherapy";

const useStyles = makeStyles({});

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={PhysiotherapyData.core.parallaxImage} parallaxHeader={PhysiotherapyData.core.parallaxHeader} parallaxBody={PhysiotherapyData.core.parallaxBody}>
            <MainContainerLayout>
                <ColumnLayout>
                    <Grid
                        container
                        spacing={8}
                        direction={"column"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid item>
                            <GreenHeaderBlackBody header={PhysiotherapyData.howPhysioCanHelp.header} body={PhysiotherapyData.howPhysioCanHelp.para}/>
                        </Grid>
                        <Grid item>
                            <TimelineBlock header={PhysiotherapyData.timelineBlock.header} body={PhysiotherapyData.timelineBlock.body} />
                        </Grid>
                        <Grid item>
                            <CommonInjuriesBlock image={PhysiotherapyData.commonInjuries.image} header={PhysiotherapyData.commonInjuries.header} body={PhysiotherapyData.commonInjuries.body} />
                        </Grid>
                        <Grid item>
                            <GreenHeaderBlackBody header={PhysiotherapyData.howToGetStarted.header} body={PhysiotherapyData.howToGetStarted.para}/>
                        </Grid>
                        <Grid item>
                            <BookingButtonsGroup />
                        </Grid>
                    </Grid>
                </ColumnLayout>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
