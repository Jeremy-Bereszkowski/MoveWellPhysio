import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import Instagram from "util/InstagramFeed"

import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme => ({
    progress: {
        color: Colours.green,
        width: "6rem !important",
        height: "6rem !important"
    },
}))

export default function InstagramFeed(props) {
    const classes = useStyles()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (loading) {
            new Instagram({
                'username': 'movewellmelbourne',
                'container': document.getElementById("instagram-feed"),
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': false,
                'callback': (ret) => {
                    console.log(ret)
                    setLoading(false)
                },
                'styling': true,
                'items': 9,
                'items_per_row': 3,
                'margin': 1,
                'lazy_load': true
            })
        }
    })

    return (
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
        >
            {
                !loading ? null : <Grid item><CircularProgress className={classes.progress}/></Grid>
            }
            <Grid item>
                <div id={"instagram-feed"}/>
            </Grid>
        </Grid>
    )
}

Function.defaultProps = {}

Function.propTypes = {}
