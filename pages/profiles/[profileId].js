import React from 'react'
import { useRouter } from 'next/router'

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

import ProfileData from "assets/data/pages/profiles/[profileId]";

const useStyles = makeStyles(theme => ({
    textStyle: {
        textAlign: "left",
        maxWidth: "50%"
    },
    card2: {
        marginTop: "0",
        marginBottom: "0",
        padding: "0",
    },
    image: {
        marginLeft: "40px"
    }
}))

export default function Profile(props) {
    const router = useRouter()
    const classes = useStyles()

    function GetProfileData(profileId){
        return ProfileData.employees.find(function(employee) {
            if (employee.id === profileId) {
                return employee
            }
        })
    }

    const ProfileCard = ({profile}) => {
        return (
            <Card plain className={classes.card2}>
                <CardBody plain>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"flex-start"}
                    >
                        <Grid item>
                            <img
                                src={profile.image}
                                alt={profile.name + "_headshot"}
                                style={{width: "auto", height: "75vh"}}
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item>
                            <h2>
                                {profile.name}
                            </h2>
                        </Grid>
                        <Grid item>
                            <h4 className={classes.textStyle}>
                                {profile.position}
                            </h4>
                        </Grid>
                        <Grid item>
                            <p className={classes.textStyle}>
                                {profile.description}
                            </p>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        )
    }

    return (
        <ParallaxLayout parallaxImage={ProfileData.core.parallaxImage} parallaxHeader={ProfileData.core.parallaxHeader} parallaxBody={ProfileData.core.parallaxBody}>
            <MainContainerLayout>
                <ColumnLayout>
                    <ProfileCard profile={GetProfileData(router.query.profileId)}/>
                </ColumnLayout>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
