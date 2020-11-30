import React from "react";
import PropTypes from "prop-types"
import {Grid} from "@material-ui/core";

export default function Day(props) {
    const {dayText, hoursText} = props

    return (
        <Grid
            container
            justify={"center"}
            alignContent={"center"}
        >
            <Grid
                item
                sm={12} md={3} ld={3}
                justify={"flex-start"}
                alignContent={"center"}
                style={{paddingLeft: "5px"}}
            >
                <h4>
                    {dayText}:
                </h4>
            </Grid>
            <Grid
                item
                sm={12} md={3} ld={3}
                justify={"flex-start"}
                alignContent={"center"}
            >
                <h4>
                    {hoursText}
                </h4>
            </Grid>
        </Grid>
    )
}

Day.PropTypes = {
    dayText: PropTypes.string,
    hoursText: PropTypes.string,
}
