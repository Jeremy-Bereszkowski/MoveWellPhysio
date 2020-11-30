import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import ParallaxImage from "../assets/img/physio/layout_2.jpg"
import ServicesLayout from "../components/Layout/ServicesLayout";
import Day from "../components/OpenHours/Day";

import styles from "../assets/jss/pages/about";
import MapContainer from "../util/google";
const useStyles = makeStyles(styles);

export default function Physiotherapy({...rest}) {
    const classes = useStyles();

    const parallaxHeader = "Contact"

    return (
        <ServicesLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} maxWidth={"lg"}>
            <Grid
                container
                spacing={3}
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
            >
                <Grid
                    item
                    sm={12} md={4}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <h2 className={classes.greenHeaderText}>
                        Opening Hours
                    </h2>
                    <Day dayText={"Monday"} hoursText={"8am - 6pm"} />
                    <Day dayText={"Tuesday"} hoursText={"8am - 6pm"} />
                    <Day dayText={"Wednesday"} hoursText={"8am - 6pm"} />
                    <Day dayText={"Thursday"} hoursText={"8am - 6pm"} />
                    <Day dayText={"Friday"} hoursText={"8am - 6pm"} />
                </Grid>
                <Grid
                    item
                    sm={12} md={4}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <h2 className={classes.greenHeaderText}>
                        Address
                    </h2>
                    <h5 className={classes.addressText}>
                        181 Bay Street
                    </h5>
                    <h5 className={classes.addressText}>
                        Brighton, VIC, 3188
                    </h5>
                    <h5 className={classes.addressText} style={{marginTop: "40px"}}>
                        On the corner of Bay Street and Cochrane Street
                    </h5>
                    <MapContainer />
                </Grid>
                <Grid
                    item
                    sm={12} md={4}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <h2 className={classes.greenHeaderText}>
                        Contact
                    </h2>
                    <Day dayText={"Telephone"} hoursText={"9503 8223"} />
                    <Day dayText={"Email"} hoursText={"hello@movewellmelbourne.com"} />
                </Grid>
            </Grid>
        </ServicesLayout>
    )
}
