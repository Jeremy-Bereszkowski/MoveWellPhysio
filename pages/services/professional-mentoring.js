import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import MainContainerLayout from "../../components/Layout/MainContainerLayout";
import ParallaxLayout from "../../components/Layout/ParallaxLayout";

import ProfessionalMentoringData from "../../assets/data/pages/services/professionalMentoring";

import styles from "../../assets/jss/pages/services/professionalMentoringStyles";
import GreenGeaderBlackBody from "../../components/TextBlocks/GreenHeaderBlackBody";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={ProfessionalMentoringData.core.parallaxImage} parallaxHeader={ProfessionalMentoringData.core.parallaxHeader} parallaxBody={ProfessionalMentoringData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <GreenGeaderBlackBody header={ProfessionalMentoringData.body.header} body={ProfessionalMentoringData.body.strings}/>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
