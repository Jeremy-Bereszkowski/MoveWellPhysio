import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";

import Clients from "pages-sections/services/physio-led-rehab-page/Clients";

import TestimonialData from "assets/data/pages/testimonials";
import ColumnLayout from "../layouts/ColumnLayout";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const useStyles = makeStyles(theme => ({}))

export default function Function(props) {
    const classes = useStyles()

    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={TestimonialData.core.parallaxImage} parallaxHeader={TestimonialData.core.parallaxHeader}>
                <MainContainerLayout>
                    <ColumnLayout>
                        <Clients/>
                    </ColumnLayout>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
