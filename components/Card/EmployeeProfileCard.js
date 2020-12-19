import React from "react";
import Link from "next/link";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ThinButton from "components/Buttons/ThinButton";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Card from "./Card";

const useStyles = makeStyles({
    textStyle: {
        textAlign: "left",
    },
    card2: {
        marginTop: "0",
        marginBottom: "0",
        padding: "0",
    }
});

const EmployeeProfileCard = React.forwardRef((props, ref) => {
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
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid item>
                        <h4 className={classes.textStyle}>
                            {employeeName}
                        </h4>
                        <h6 className={classes.textStyle}>
                            {employeePosition}
                        </h6>
                        <Link href={ref} passHref>
                            <ThinButton color={"dark"}>
                                <p style={{margin: 0, padding: 0}}>
                                    + View
                                </p>
                            </ThinButton>
                        </Link>
                        {/*<p className={classes.textStyle}>
                            {employeeDescription}
                        </p>*/}
                    </Grid>
                </Grid>
            </CardBody>
        </Card>
    )
})

EmployeeProfileCard.propTypes = {
    employeeName: PropTypes.string,
    employeePosition: PropTypes.string,
    employeeDescription: PropTypes.string,
    employeeImage: PropTypes.string,
}

export default EmployeeProfileCard
