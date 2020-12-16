import {AboutBackground, companyName} from "../global"
const YashaHeadshot = "/physio/team/headshot_yasha.jpg";
const ChrisHeadshot = "/physio/team/headshot_chris.jpg";
const ShannonHeadshot = "/physio/team/headshot_shannon.jpg";

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
            {
                name: "Yasha Gurevitch",
                title: "Principle Physiotherapist",
                description: "Yasha completed his Bachelor of Applied Science and Masters of Physiotherapy at La Trobe Bendigo. Yasha’s clinical interest involve management of complex musculoskeletal conditions, sports physiotherapy and injury prevention. Yasha has been involved in a variety of different sports settings including soccer, basketball and is currently the head physiotherapist at AJAX football club. A passion for ongoing education and knowledge translation Yasha has delivered presentations on injury prevention to variety of different sports clubs and Lectures at La Trobe university on musculoskeletal physiotherapy. With a strong focus on being patient centred, Yasha works closely with his patients to achieve their goals.",
                image: YashaHeadshot,
            },
            {
                name: "Chris",
                title: "Personal Trainer",
                description: "Chris has been working as a group class instructor and personal trainer for over 6 years. He loves helping those who are new to training and want to learn how to exercise safely and effectively. He enjoys helping client with any goals they have and loves to do some one on one boxing classes. \n" +
                "To keep fit, Chris plays Ice Hockey, Football and does some weight training with friends.",
                image: ChrisHeadshot,
            },
            {
                name: "Shannon Petropoulos",
                title: "Personal Trainer/Class Instructor",
                description: "Shannon Description",
                image: ShannonHeadshot,
            },
        ]
    },
}

export default AboutData
