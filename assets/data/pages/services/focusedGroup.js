import {companyName, email, FocusedGroupBackground} from "../../global"

const FocusedGroupData = {
    core: {
        parallaxImage: FocusedGroupBackground,
        parallaxHeader: "Focused Group Exercise",
        parallaxBody: "Group sessions targeting specific areas of the body and function",
    },
    top: {
        header: "Developing and maintaining physical health",
        body: [
            "Focused group exercise that caters for groups of 6-10, for long term development of your physical wellness.",
            "Sessions are designed by a physiotherapist to improve full body function through joint and bone health, cardiovascular fitness, mobility and balance.",
            "We provide a workout that is challenging and refreshing, helping you build structured exercise into your lifestyle.",
        ]
    },
    middle: {
        header: "Our Classes",
        body: [
            {
                header: "Muscle Toning",
                body: "Full body circuit workout focusing on major muscle groups, core and cardio. This class will help improve your upper and lower body strength, getting you toned and improving your overall fitness."
            },
            {
                header: "Stronger Bones",
                body: "This class is ideal for people who are looking to improve their bone density, postural muscles, core strength and balance. The circuit class incorporates weight bearing exercises using dumbbells, resistance bands and cable machine along with a variety of different equipment to help improve balance."
            },
            {
                header: "Healthier Joints",
                body: "This class is ideal for people who would like to improve their strength and mobility of their major joints. Using resistance bands, TRX, light dumbbells, spin bike and core exercises ensures that the muscles around your joints get stronger."
            },
        ],
    },
    bottom: {
        header: "Booking Details",
        body: [
            {
                header: "How do I get started?",
                body: "To begin, we recommend a Physiotherapy consultation to discuss your history, needs and goals to ensure we set you on the right path."
            },
            {
                header: "How do I know which session is best for me?",
                body: "Having a consultation first allows us to assess your current strengths and weaknesses, from there we are able to identify a class that is best suited to improve your function."
            },
            {
                header: "What should I bring?",
                body: companyName + " has all the equipment required for the sessions. Just wear activewear and bring a towel. Water is available here, but we recommend bringing a water bottle too."
            },
            {
                header: "Where can I book?",
                body: "If you’re new to "+companyName+", book a consult via the 'Book Consult' button below."
            },
            {
                body: "Existing clients can book online via the 'Book Class' button below."
            },
        ]
    }
}

export default FocusedGroupData
