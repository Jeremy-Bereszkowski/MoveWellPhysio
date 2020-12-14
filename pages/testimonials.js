import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";
import ColumnLayout from "layouts/ColumnLayout";

import NavPills from "components/NavPills/NavPills";
import PhysioLedRehabBlock from "components/TextBlocks/PhysioLedRehabBlock";

import TestimonialData from "assets/data/pages/testimonials";
import PhysioLedRehabData from "assets/data/pages/services/physioLedRehab";

const useStyles = makeStyles(theme => ({}))

export default function Function(props) {
    const classes = useStyles()

    const smContainer = 3, lgContainer = 9

    return (
        <ParallaxLayout parallaxImage={TestimonialData.core.parallaxImage} parallaxHeader={TestimonialData.core.parallaxHeader} parallaxBody={TestimonialData.core.parallaxBody}>
            <MainContainerLayout>
                <ColumnLayout>
                    <NavPills
                        horizontal={{
                            tabsGrid: { xs: 12, sm: smContainer, md: smContainer },
                            contentGrid: { xs: 12, sm: lgContainer, md: lgContainer }
                        }}
                        tabs={[
                            {
                                tabButton: PhysioLedRehabData.clients.clients[0].buttonHeader,
                                tabContent:<PhysioLedRehabBlock
                                    right
                                    header={PhysioLedRehabData.clients.clients[0].buttonContent.header}
                                    para={PhysioLedRehabData.clients.clients[0].buttonContent.para}
                                    clientImage={PhysioLedRehabData.clients.clients[0].buttonContent.clientImage}
                                    clientName={PhysioLedRehabData.clients.clients[0].buttonContent.clientName}
                                    clientAge={PhysioLedRehabData.clients.clients[0].buttonContent.clientAge}
                                    clientPara={PhysioLedRehabData.clients.clients[0].buttonContent.clientPara}
                                />
                            },
                            {
                                tabButton: PhysioLedRehabData.clients.clients[1].buttonHeader,
                                tabContent:<PhysioLedRehabBlock
                                    right
                                    header={PhysioLedRehabData.clients.clients[1].buttonContent.header}
                                    para={PhysioLedRehabData.clients.clients[1].buttonContent.para}
                                    clientImage={PhysioLedRehabData.clients.clients[1].buttonContent.clientImage}
                                    clientName={PhysioLedRehabData.clients.clients[1].buttonContent.clientName}
                                    clientAge={PhysioLedRehabData.clients.clients[1].buttonContent.clientAge}
                                    clientPara={PhysioLedRehabData.clients.clients[1].buttonContent.clientPara}
                                />
                            },
                            {
                                tabButton: PhysioLedRehabData.clients.clients[2].buttonHeader,
                                tabContent:<PhysioLedRehabBlock
                                    right
                                    header={PhysioLedRehabData.clients.clients[2].buttonContent.header}
                                    para={PhysioLedRehabData.clients.clients[2].buttonContent.para}
                                    clientImage={PhysioLedRehabData.clients.clients[2].buttonContent.clientImage}
                                    clientName={PhysioLedRehabData.clients.clients[2].buttonContent.clientName}
                                    clientAge={PhysioLedRehabData.clients.clients[2].buttonContent.clientAge}
                                    clientPara={PhysioLedRehabData.clients.clients[2].buttonContent.clientPara}
                                />
                            }
                        ]}
                    />
                </ColumnLayout>
            </MainContainerLayout>
        </ParallaxLayout>
    )
}
