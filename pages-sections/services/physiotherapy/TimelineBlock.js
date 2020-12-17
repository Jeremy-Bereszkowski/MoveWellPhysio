import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Grid from "@material-ui/core/Grid";

import BookConsultButton from "components/Buttons/BookConsultButton";
import BookGroupClassButton from "components/Buttons/BookGroupClassButton";

import {bodyHeaderText} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

import 'react-vertical-timeline-component/style.min.css';
import PropTypes from "prop-types";
import CommonInjuriesBlock from "./CommonInjuriesBlock";

const useStyles = makeStyles(theme => ({
    border: {
        border: "solid 3px " + Colours.green,

    },
    headerText: {
        ...bodyHeaderText,
        color: Colours.darkGrey,
    },
}))

const data = [
    {
        header: "1. Comprehensive assessment",
        body: "Your physiotherapist will listen to your history and concern, examine your pain and understand your intention for seeking help.",
    },
    {
        header: "2. Diagnosis",
        body: "Matching your story to the presentation of your symptoms, we will help you understand the cause of your pain.",
    },
    {
        header: "3. Recovery time",
        body: "Informed by your diagnosis, we will discuss the time required to relieve pain and achieve your identified goal.",
    },
    {
        header: "4. Action Plan",
        body: "We create a tailored plan to improve the function that will relieve your pain, Including implementation, education and any need for ongoing support.",
    },
    {
        header: "5. Book",
        body: "",
    }
]

export default function TimelineBlock(props) {
    const classes = useStyles()

    const {header, body} = props

    return (
        <Grid
            container
            spacing={2}
            direction={"column"}
            justify={"center"}
            alignContent={"center"}
            alignItems={"center"}
            className={classes.border}
        >
            <Grid item>
                <h2 className={classes.headerText}>
                    {header}
                </h2>
            </Grid>
            <Grid item>
                <VerticalTimeline>
                    {
                        body.map((ele, key) => {
                            return (
                                <>
                                    {
                                        key%2==0?
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ backgroundColor: Colours.green, color: Colours.white }}
                                                contentArrowStyle={{ borderRight: '7px solid ' + Colours.green }}
                                                iconStyle={{ background: Colours.darkGrey, color: Colours.white }}
                                                icon={<WorkIcon />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{ele.header}</h3>
                                                <p>
                                                    {ele.body}
                                                </p>
                                            </VerticalTimelineElement>
                                            :
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ backgroundColor: Colours.darkGrey, color: Colours.white }}
                                                contentArrowStyle={{ borderRight: '7px solid ' + Colours.darkGrey }}
                                                iconStyle={{ background: Colours.green, color: Colours.white }}
                                                icon={<SchoolIcon />}
                                            >
                                                <h3 className="vertical-timeline-element-title">{ele.header}</h3>
                                                <p>
                                                    {ele.body}
                                                </p>
                                            </VerticalTimelineElement>
                                    }
                                </>
                            )
                        })
                    }
                </VerticalTimeline>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    justify={"center"}
                    alignContent={"center"}
                >
                    <Grid item>
                        <BookConsultButton />
                    </Grid>
                    <Grid item>
                        <BookGroupClassButton />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

TimelineBlock.propTypes = {
    header: PropTypes.string,
    body: PropTypes.array,
}
