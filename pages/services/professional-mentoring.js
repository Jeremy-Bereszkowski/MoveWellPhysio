import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import MainContainerLayout from "../../components/Layout/MainContainerLayout";
import ParallaxLayout from "../../components/Layout/ParallaxLayout";

import {ProfessionalMentoringData} from "../../assets/strings/pageData";

import styles from "../../assets/jss/pages/services/professionalMentoringStyles";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    return (
        <ParallaxLayout parallaxImage={ProfessionalMentoringData.core.parallaxImage} parallaxHeader={ProfessionalMentoringData.core.parallaxHeader} parallaxBody={ProfessionalMentoringData.core.parallaxBody}>
            <MainContainerLayout maxWidth={"lg"}>
                <Grid
                    container
                    spacing={4}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <h2 className={classes.greenHeaderText}>
                            {ProfessionalMentoringData.body.header}
                        </h2>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={4}
                    direction={"row"}
                    justify={"flex-start"}
                    alignContent={"center"}
                >
                    {
                        ProfessionalMentoringData.body.strings.map(element => {
                            return (
                                <Grid item>
                                    <h4 className={classes.blackBodyText}>
                                        {element}
                                    </h4>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
