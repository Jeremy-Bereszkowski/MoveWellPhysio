import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import MainContainerLayout from "../../layout/MainContainerLayout";
import ParallaxLayout from "../../layout/ParallaxLayout";

import ProfessionalMentoringData from "../../assets/data/pages/services/professionalMentoring";

import styles from "../../assets/jss/pages/services/professionalMentoringStyles";
import GreenGeaderBlackBody from "../../components/TextBlocks/GreenHeaderBlackBody";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={ProfessionalMentoringData.core.parallaxImage} parallaxHeader={ProfessionalMentoringData.core.parallaxHeader} parallaxBody={ProfessionalMentoringData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <GreenGeaderBlackBody  body={ProfessionalMentoringData.body.strings}/>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
