/*
* Header Links
* Returns list of buttons and sub-buttons for header component
* Can return list either vertically or horizontally
* */

import React from "react";
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeaderLink from "./HeaderLink";

import {mlAuto} from "assets/jss/nextjs-material-kit-pro";
import HeaderLinkData from "assets/data/components/header";

const useStyles = makeStyles(theme => ({
  mlAuto,
}));

export default function HeaderLinks(props) {
  const {onClick, vertical} = props

  const classes = useStyles();
  return (
      <>
        {
          vertical === true ?
              <Grid
                  container
                  direction={"column"}
                  alignContent={"stretch"}
                  alignItems={"stretch"}
                  justify={"center"}
              >
                {
                  HeaderLinkData.map((element, key) => {
                    return (
                        <Grid item key={key}>
                          <HeaderLink vertical element={element} onClick={onClick}/>
                        </Grid>
                    )
                  })
                }
              </Grid>
              :
              <div className={classes.mlAuto}>
                {
                  HeaderLinkData.map((element, key) => {
                    return (
                        <HeaderLink element={element} onClick={onClick} key={key}/>
                    )
                  })
                }
              </div>
        }
      </>
  );
}

HeaderLinks.defaultProp = {
  vertical: false,
}

HeaderLinks.propTypes = {
  onClick: PropTypes.func,
  vertical: PropTypes.bool,
}
