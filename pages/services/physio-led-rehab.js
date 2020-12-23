import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import GreenHeaderBlackBody from "components/TextBlocks/GreenHeaderBlackBody";
import BookingButtonsGroup from "components/Buttons/BookingButtonsGroup";

import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import PhysioLedRehabData from "assets/data/pages/services/physioLedRehab";

const useStyles = makeStyles({
    marginTop: {
        marginTop: "4vh"
    },
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    },
    blackSubHeaderText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
        fontWeight: "800",
    },
    blackParaText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
});

export default function PhysioLedRehab(props) {
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={PhysioLedRehabData.core.parallaxImage} parallaxHeader={PhysioLedRehabData.core.parallaxHeader} parallaxBody={PhysioLedRehabData.core.parallaxBody}>
                <MainContainerLayout>
                    <ColumnLayout>
                        <Grid
                            container
                            direction={"column"}
                            justify={"center"}
                            alignContent={"center"}
                        >
                            <Grid item>
                                <GreenHeaderBlackBody header={PhysioLedRehabData.top.header} body={PhysioLedRehabData.top.body}/>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    direction={"row"}
                                    justify={"center"}
                                    alignContent={"center"}
                                    className={classes.marginTop}
                                >
                                    <Grid item>
                                        <h2 className={classes.greenHeaderText}>
                                            {PhysioLedRehabData.bottom.header}
                                        </h2>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction={"row"}
                                    justify={"flex-start"}
                                    alignContent={"center"}
                                >
                                    {
                                        PhysioLedRehabData.bottom.body.map((element, key) => {
                                            return (
                                                <Grid item key={element + " " + key}>
                                                    {
                                                        element.header === undefined ?
                                                            null
                                                            :
                                                            <h6 className={classes.blackSubHeaderText}>
                                                                {element.header}
                                                            </h6>
                                                    }
                                                    <h4 className={classes.blackParaText}>
                                                        {element.body}
                                                    </h4>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <Grid item>
                                <BookingButtonsGroup />
                            </Grid>
                        </Grid>
                    </ColumnLayout>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
