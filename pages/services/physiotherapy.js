import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import CommonInjuriesBlock from "pages-sections/services/physiotherapy/CommonInjuriesBlock";

import GreenHeaderBlackBody from "components/TextBlocks/GreenHeaderBlackBody";
import BookConsultButton from "components/Buttons/BookConsultButton";
import BookGroupClassButton from "components/Buttons/BookGroupClassButton";

import {bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import {blackColor, grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import PhysiotherapyData from "assets/data/pages/services/physiotherapy";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    hr: {
        marginTop: "5vh",
        borderTop: "1px solid black"
    },
    greenHeaderText: {
        ...bodyHeaderText,
    },
    blackBodyText: {
        ...bodyParaText1,
        marginLeft: "7vw",
        marginRight: "7vw",
    },
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        width: "30vw",
        height: "6vh",
        maxWidth: "200px",
        maxHeight: "120px",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        padding: "12px 30px",
        marginTop: "25px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover": {
            color: whiteColor,
            backgroundColor: grayColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.2)"
        },

    },
});

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={PhysiotherapyData.core.parallaxImage} parallaxHeader={PhysiotherapyData.core.parallaxHeader} parallaxBody={PhysiotherapyData.core.parallaxBody}>
            <MainContainerLayout>
                <ColumnLayout>
                    <Grid
                        container
                        spacing={4}
                        direction={"column"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid item>
                            <GreenHeaderBlackBody header={PhysiotherapyData.howPhysioCanHelp.header} body={PhysiotherapyData.howPhysioCanHelp.para}/>
                        </Grid>
                        <Grid item>
                            <CommonInjuriesBlock image={PhysiotherapyData.commonInjuries.image} header={PhysiotherapyData.commonInjuries.header} body={PhysiotherapyData.commonInjuries.body} />
                        </Grid>
                        <Grid item>
                            <GreenHeaderBlackBody header={PhysiotherapyData.howToGetStarted.header} body={PhysiotherapyData.howToGetStarted.para}/>
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
    )
}
