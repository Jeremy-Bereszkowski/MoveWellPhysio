import {AboutBackground, companyName} from "../global"
import YashaHeadshot from "../../img/physio/yasha_headshot.jpg";
import ChrisHeadshot from "../../img/physio/chris headshot.jpg";

const AboutData = {
    core: {
        parallaxImage: AboutBackground,
        parallaxHeader: "About " + companyName,
        parallaxBody: "Active, goal-focused physiotherapy",
    },
    top: [
        companyName + " are experts in physiotherapy",
        "To help you overcome your pain, we take considerable care to understand your history, capabilities and goals first. We design rehabilitation plans that are realistic for you and are supported by the appropriate education.",
        "We offer a range of services to rehabilitate injury and pain, develop physical wellness and performance. Our team believes in the value of helping you develop a lifestyle that prevents pain",
        "Our recovery plans place ultimate importance on the achievement of your goals.",
    ],
    employee: {
        header: "Our Team",
        employees: [
            [
                "Yasha Gurevitch",
                "Principle Physiotherapist",
                "YASHAS DESCRIPTION HERE",
                YashaHeadshot,
            ],
            [
                "Chris",
                "Personal Trainer",
                "CHRIS DESCRIPTION HERE",
                ChrisHeadshot,
            ],
        ]
    },
}

export default AboutData
