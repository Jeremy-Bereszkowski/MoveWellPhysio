import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import EmployeeProfileCard from "components/Card/EmployeeProfileCard";

import {bodyHeaderText} from "assets/jss/coreStyles";
import AboutData from "assets/data/pages/about";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        marginTop: "-2vh",
    },
    flexBox: {
        display: "flex"
    }
});

export default function BottomProfiles(props) {
    const classes = useStyles();

    return(
        <Grid
            container
            spacing={2}
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
        >
            <Grid item>
                <h2 className={classes.greenHeaderText}>
                    {AboutData.employee.header}
                </h2>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justify={"center"}
                    alignContent={"center"}
                >
                    {
                        AboutData.employee.employees.map(element => {
                            return (
                                <Grid
                                    item
                                    md={4} xl={4}
                                    className={classes.flexBox}
                                    key={element}
                                >
                                    <EmployeeProfileCard employeeName={element.name} employeePosition={element.title} employeeDescription={element.description} employeeImage={element.image}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
