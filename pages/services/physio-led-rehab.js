import React from "react";

import {Grid} from "@material-ui/core";

import ParallaxLayout from "../../layout/ParallaxLayout";
import MainContainerLayout from "../../layout/MainContainerLayout";
import GreenHeaderBlackBody from "../../components/TextBlocks/GreenHeaderBlackBody";

import PhysioLedRehabData from "../../assets/data/pages/services/physioLedRehab";
import Clients from "../../pages-sections/services/physio-led-rehab-page/Clients";

export default function PhysioLedRehab(props) {
    return (
        <ParallaxLayout parallaxImage={PhysioLedRehabData.core.parallaxImage} parallaxHeader={PhysioLedRehabData.core.parallaxHeader} parallaxBody={PhysioLedRehabData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    spacing={4}
                    direction={"column"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <GreenHeaderBlackBody header={PhysioLedRehabData.top.header} body={PhysioLedRehabData.top.body}/>
                    </Grid>
                    <Grid item>
                        <Clients />
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
