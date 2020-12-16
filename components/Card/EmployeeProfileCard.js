import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    textStyle: {
        marginLeft: "20%",
        marginRight: "20%"
    },
    card2: {
        marginTop: "0",
        marginBottom: "0",
        padding: "0",
    }
});

export default function EmployeeProfileCard(props) {
    const classes = useStyles();

    const {employeeName, employeePosition, employeeDescription, employeeImage} = props

    return (
        <Card plain className={classes.card2}>
            <CardHeader image plain>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <img
                            src={employeeImage}
                            alt={employeeName + "_headshot"}
                            style={{width: "auto", height: "45vh"}}
                        />
                    </Grid>
                </Grid>
            </CardHeader>
            <CardBody plain>
                <h4 className={classes.textStyle}>
                    {employeeName}
                </h4>
                <h6 className={classes.textStyle}>
                    {employeePosition}
                </h6>
                <p className={classes.textStyle}>
                    {employeeDescription}
                </p>
            </CardBody>
        </Card>
    )
}

EmployeeProfileCard.propTypes = {
    employeeName: PropTypes.string,
    employeePosition: PropTypes.string,
    employeeDescription: PropTypes.string,
    employeeImage: PropTypes.string,
}
