import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import CommonInjuriesBlock from "pages-sections/services/physiotherapy/CommonInjuriesBlock";
import TimelineBlock from "pages-sections/services/physiotherapy/TimelineBlock";

import GreenHeaderBlackBody from "components/TextBlocks/GreenHeaderBlackBody";
import BookingButtonsGroup from "components/Buttons/BookingButtonsGroup";

import PhysiotherapyData from "assets/data/pages/services/physiotherapy";
import BookConsultButton from "../../components/Buttons/BookConsultButton";
import BookGroupClassButton from "../../components/Buttons/BookGroupClassButton";

const useStyles = makeStyles({
    spacing: {
        margin: "20px 0",
    },
});

export default function Physiotherapy({...rest}) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={PhysiotherapyData.core.parallaxImage} parallaxHeader={PhysiotherapyData.core.parallaxHeader} parallaxBody={PhysiotherapyData.core.parallaxBody}>
                <MainContainerLayout>
                    <ColumnLayout>
                        <Grid
                            container
                            direction={"column"}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <Grid item className={classes.spacing}>
                                <GreenHeaderBlackBody header={PhysiotherapyData.howPhysioCanHelp.header} body={PhysiotherapyData.howPhysioCanHelp.para}/>
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <TimelineBlock header={PhysiotherapyData.timelineBlock.header} body={PhysiotherapyData.timelineBlock.body} />
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <CommonInjuriesBlock image={PhysiotherapyData.commonInjuries.image} header={PhysiotherapyData.commonInjuries.header} body={PhysiotherapyData.commonInjuries.body} />
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <GreenHeaderBlackBody header={PhysiotherapyData.howToGetStarted.header} body={PhysiotherapyData.howToGetStarted.para}/>
                            </Grid>
                            <Grid item className={classes.spacing}>
                                <Grid
                                    container
                                    direction={"row"}
                                    justify={"center"}
                                    alignContent={"center"}
                                >
                                    <Grid item className={classes.pad}>
                                        <BookConsultButton />
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
