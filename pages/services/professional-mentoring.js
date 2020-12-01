import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ParallaxImage from "../../assets/img/physio/balls_weights.jpg"
import MainContainerLayout from "../../components/Layout/MainContainerLayout";

import styles from "../../assets/jss/pages/services/professionalMentoringStyles";
import ParallaxLayout from "../../components/Layout/ParallaxLayout";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "Professional Mentoring"
    const parallaxBody = "Education for health students and practitioners"

    return (
        <ParallaxLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
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
                            How physiotherapy can help
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
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            Director of Physiotherapy, Yasha, along with the MoveWell team, run weekly mentoring sessions. We’re passionate about sharing current knowledge and literature surrounding physiotherapy, health and fitness.
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            Each session covers a topic related to injuries, conditions or patient specific case studies. During which we discuss the nature of the condition, differential diagnosis, patient management, and demonstrate treatment options.
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            Past topics have included: ACL Injury prevention, common sports injuries for females, hamstring strains, AFL preseason programs, lateral hip pain (gluteal tendinopathy) and lower back pain.
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            Mentoring is available for physiotherapy, sport science, exercise physiology, osteopath and sports management students, as well as personal trainers, sports trainers, sports coaches and strength and conditioning coaches.
                        </h4>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.blackBodyText}>
                            If you would like to join an online mentoring session, please contact MoveWell at <a>hello@movewellmelbourne.com.au</a>.
                        </h4>
                    </Grid>
                </Grid>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
