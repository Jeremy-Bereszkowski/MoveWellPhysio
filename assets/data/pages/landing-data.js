import {comanyName, image1, image2, image3, image4} from "../global"

import Para1Image from "../../img/physio/clients/client_11.jpg";
import Para2Image from "../../img/physio/clients/client.jpg"

const LandingData = {
    carousel: [
        [
            image1,
            comanyName + " Physiotherapy",
            "Active, goal-focused physiotherapy",
            "Book Online",
        ],
        [
            image2,
            "Freedom from acute pain",
            0,
            "LEARN HOW",
        ],
        [
            image3,
            "Return to optimal sports performance",
            0,
            "LEARN HOW",
        ],
        [
            image4,
            "Improve strength and conditioning",
            0,
            "LEARN HOW",
        ],
    ],
    para1: {
        image: Para1Image,
        header: "What it means to move well",
        body: [
            "You want to exercise throughout your life. Exercise is a modality for a healthy and happy life.",
            "Your treatment is improving your capacity to do the exercise and movement that's important to you.",
            "Your recovery means being able to run that 10km, go for that walk, perform in your sport.",
            "We help you take the next step towards living an active lifestyle with pain-free movement and exercise.",
        ],
        action: "Our Physiotherapy Approach",
    },
    para2: {
        image: Para2Image,
        header: "About " + comanyName,
        body: [
            "We're experts in physiotherapy and exercise.",
            "We take care to understand you first, designing your recovery around your needs and fitness goals.",
            comanyName + " uses an active style of treatment that prioritises pain relief through improved function.",
            "Our team believes in the value of helping you develop a lifestyle that prevents pain.",
        ],
        action: "More About " + comanyName,
    }
}

export default LandingData
