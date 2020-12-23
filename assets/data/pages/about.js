import {AboutBackground, companyName, Employees} from "../global"

const AboutData = {
    core: {
        parallaxImage: AboutBackground,
        parallaxHeader: "About " + companyName,
        parallaxBody: "Active, goal-focused physiotherapy",
    },
    top: [
        companyName + " are experts in physiotherapy, exercise and holistic care.",
        "To help you overcome your pain, we first take considerable care to understand your history, capabilities and goals. We design rehabilitation plans that are realistic for you and are supported by the appropriate education.",
        "We offer a range of services to rehabilitate injury and pain, develop physical wellness and performance. Our team believes in the value of helping you develop a lifestyle that prevents pain.",
        "Our recovery plans place ultimate importance on the achievement of your goals.",
    ],
    employee: {
        header: "Our Team",
        employees: Employees
    },
}

export default AboutData
