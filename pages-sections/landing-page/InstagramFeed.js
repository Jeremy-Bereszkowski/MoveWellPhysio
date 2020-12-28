import React from 'react'
import PropTypes from 'prop-types'
import InstagramEmbed from 'react-instagram-embed';

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({}))

export default function InstagramFeed(props) {
    const classes = useStyles()

    const ImageBlock = ({url}) => {
        return (
            <InstagramEmbed
                url={url}
                clientAccessToken='404339417505644|0aef5f40ac92bce3716cf3c18c99d328'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        )
    }

    return (
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"space-between"}
        >
            <Grid item>
                <ImageBlock url={'https://www.instagram.com/p/CJKN2RaDU9Z/'}/>
            </Grid>
        </Grid>
    )
}

Function.defaultProps = {}

Function.propTypes = {}
