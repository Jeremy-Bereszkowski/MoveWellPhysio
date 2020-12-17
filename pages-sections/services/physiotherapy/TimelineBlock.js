import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Colours from "../../../assets/strings/colours";
const useStyles = makeStyles(theme => ({}))

export default function TimelineBlock(props) {
    const classes = useStyles()

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: Colours.green, color: Colours.white }}
                contentArrowStyle={{ borderRight: '7px solid ' + Colours.green }}
                iconStyle={{ background: Colours.green, color: Colours.white }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">1. Comprehensive assessment</h3>
                <p>
                    Your physiotherapist will listen to your history and concern, examine your pain and understand your intention for seeking help.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: Colours.darkGrey, color: Colours.green }}
                contentArrowStyle={{ borderRight: '7px solid ' + Colours.darkGrey }}
                iconStyle={{ background: Colours.darkGrey, color: Colours.white }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">2. Diagnosis</h3>
                <p>
                    Matching your story to the presentation of your symptoms, we will help you understand the cause of your pain.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: Colours.green, color: Colours.white }}
                contentArrowStyle={{ borderRight: '7px solid ' + Colours.green }}
                iconStyle={{ background: Colours.green, color: Colours.white }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">3. Recovery time</h3>
                <p>
                    Informed by your diagnosis, we will discuss the time required to relieve pain and achieve your identified goal.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: Colours.darkGrey, color: Colours.green }}
                contentArrowStyle={{ borderRight: '7px solid ' + Colours.darkGrey }}
                iconStyle={{ background: Colours.darkGrey, color: Colours.white }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">4. Action Plan</h3>
                <p>
                    We create a tailored plan to improve the function that will relieve your pain, Including implementation, education and any need for ongoing support.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: Colours.green, color: Colours.white }}
                iconStyle={{ background: Colours.green, color: Colours.white }}
                icon={<StarIcon />}
            >
                <h3 className="vertical-timeline-element-title">5. Book</h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}
