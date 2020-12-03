import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import styles from "./physioLedRehabBlockStyles";
const useStyles = makeStyles(styles);

export default function PhysioLedRehabBlock(props) {
    const classes = useStyles();
    const {left, header, para, clientImage, clientName, clientAge, clientPara} = props

    const ImageBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <div className={classNames(classes.image, classes.darkColor)}>
                    <img src={clientImage} className={classNames(classes.image)}/>
                </div>
            </Grid>
        )
    }

    const TextBlock = () => {
        return (
            <Grid item xs={12} sm={12} md={6}>
                <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    alignContent={"center"}
                    justify={"center"}
                >
                    <Grid item>
                        <h2 className={classNames(classes.title, classes.bodyHeaderText)}>
                            {header}
                        </h2>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            {para.map(bodyString => {
                                return (
                                    <Grid item>
                                        <h5 className={classes.bodyParaText} key={bodyString}>
                                            {bodyString}
                                        </h5>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h6 className={classes.clientText}>
                            {clientName + " (" + clientAge + ")"}
                        </h6>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            justify={"center"}
                        >
                            {clientPara.map(bodyString => {
                                return (
                                    <Grid item>
                                        <h5 className={classes.clientParaText} key={bodyString}>
                                            <b>{bodyString}</b>
                                        </h5>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.divPadding}
        >
            {left === true ?
                <>
                    <ImageBlock/>
                    <TextBlock/>
                </>
                :
                <>
                    <TextBlock/>
                    <ImageBlock/>
                </>
            }
        </Grid>
    )
}

PhysioLedRehabBlock.propTypes = {
    header: PropTypes.string,
    para: PropTypes.array,
    clientImage: PropTypes.string,
    clientName: PropTypes.string,
    clientAge: PropTypes.string,
    clientPara: PropTypes.array,
    left: PropTypes.bool,
}
