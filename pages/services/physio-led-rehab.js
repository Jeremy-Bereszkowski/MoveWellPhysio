import React from "react";

import {Grid} from "@material-ui/core";

import ParallaxLayout from "../../layouts/ParallaxLayout";
import MainContainerLayout from "../../layouts/MainContainerLayout";
import GreenHeaderBlackBody from "../../components/TextBlocks/GreenHeaderBlackBody";

import PhysioLedRehabData from "../../assets/data/pages/services/physioLedRehab";
import ColumnLayout from "../../layouts/ColumnLayout";

export default function PhysioLedRehab(props) {
    return (
        <ParallaxLayout parallaxImage={PhysioLedRehabData.core.parallaxImage} parallaxHeader={PhysioLedRehabData.core.parallaxHeader} parallaxBody={PhysioLedRehabData.core.parallaxBody}>
            <MainContainerLayout>
                <ColumnLayout>
                    <Grid
                        container
                        spacing={6}
                        direction={"column"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid item>
                            <GreenHeaderBlackBody header={PhysioLedRehabData.top.header} body={PhysioLedRehabData.top.body}/>
                        </Grid>
                    </Grid>
                </ColumnLayout>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
