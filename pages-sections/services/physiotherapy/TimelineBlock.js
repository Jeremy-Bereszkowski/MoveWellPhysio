import React from 'react'
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Grid from "@material-ui/core/Grid";

import BookConsultButton from "components/Buttons/BookConsultButton";
import BookGroupClassButton from "components/Buttons/BookGroupClassButton";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import {bodyHeaderText} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({
    border: {
        border: "solid 3px " + Colours.green,
        marginTop: "2.2rem"
    },
    headerText: {
        ...bodyHeaderText,
        color: Colours.darkGrey,
        margin: "-2.2rem 0 0 0",
        padding: "0",
        backgroundColor: grayColor[14]
    },
}))

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
                            let icon

                            switch (key) {
                                case 0:
                                    icon = <LooksOneIcon/>
                                    break
                                case 1:
                                    icon = <LooksTwoIcon/>
                                    break
                                case 2:
                                    icon = <Looks3Icon/>
                                    break
                                case 3:
                                    icon = <Looks4Icon/>
                                    break
                            }

                            return (
                                <React.Fragment key={key}>
                                    {
                                        key % 2 === 0 ?
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                contentStyle={{ backgroundColor: Colours.green, color: Colours.white }}
                                                contentArrowStyle={{ borderRight: '7px solid ' + Colours.green }}
                                                iconStyle={{ background: Colours.darkGrey, color: Colours.white }}
                                                icon={icon}
                                                key={key}
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
                                                icon={icon}
                                                key={key}
                                            >
                                                <h3 className="vertical-timeline-element-title">{ele.header}</h3>
                                                <p>
                                                    {ele.body}
                                                </p>
                                            </VerticalTimelineElement>
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </VerticalTimeline>
            </Grid>
        </Grid>
    )
}

TimelineBlock.propTypes = {
    header: PropTypes.string,
    body: PropTypes.array,
}
