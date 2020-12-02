import Para1Image from "../img/physio/clients/client_11.jpg";
import Para2Image from "../img/physio/clients/client.jpg"
import image1 from "../img/physio/layout_1.jpg";
import image2 from "../img/physio/reformer.jpg";
import image3 from "../img/physio/ring_reformer.jpg";
import image4 from "../img/physio/redcord.jpg";

const LandingData = {
    carousel: [
        [
            image1,
            "MoveWell Physiotherapy",
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
        header: "About Movewell",
        body: [
            "We're experts in physiotherapy and exercise.",
            "We take care to understand you first, designing your recovery around your needs and fitness goals.",
            "MoveWell uses an active style of treatment that prioritises pain relief through improved function.",
            "Our team believes in the value of helping you develop a lifestyle that prevents pain.",
        ],
        action: "More About Movewell",
    }
}

import ParallaxImage from "../img/physio/balls_weights.jpg";

const ProfessionalMentoringData = {
    core: {
        parallaxImage: ParallaxImage,
        parallaxHeader: "Professional Mentoring",
        parallaxBody: "Education for health students and practitioners",
    },
    body: {
        header: "How physiotherapy can help",
        strings: [
            "Director of Physiotherapy, Yasha, along with the MoveWell team, run weekly mentoring sessions. We’re passionate about sharing current knowledge and literature surrounding physiotherapy, health and fitness.",
            "Each session covers a topic related to injuries, conditions or patient specific case studies. During which we discuss the nature of the condition, differential diagnosis, patient management, and demonstrate treatment options.",
            "Past topics have included: ACL Injury prevention, common sports injuries for females, hamstring strains, AFL preseason programs, lateral hip pain (gluteal tendinopathy) and lower back pain.",
            "Mentoring is available for physiotherapy, sport science, exercise physiology, osteopath and sports management students, as well as personal trainers, sports trainers, sports coaches and strength and conditioning coaches.\n",
            "If you would like to join an online mentoring session, please contact MoveWell at hello@movewellmelbourne.com.au.\n",
        ]

    }
}

import YashaHeadshot from "../img/physio/yasha_headshot.jpg";
import ChrisHeadshot from "../img/physio/chris headshot.jpg";
import AboutBackground from "../img/physio/sign.jpg";

const AboutData = {
    core: {
        parallaxImage: AboutBackground,
        parallaxHeader: "About Movewell",
        parallaxBody: "Active, goal-focused physiotherapy",
    },
    top: [
        "MoveWell are experts in physiotherapy",
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

import ContactBackground from "../img/physio/layout_2.jpg"

const ContactData = {
    core: {
        parallaxImage: ContactBackground,
        parallaxHeader: "Contact",
    },
    openingHours: {
        header: "Opening Hours",
        monday: [
            "Monday",
            "8am - 6pm"
        ],
        tuesday: [
            "Tuesday",
            "8am - 6pm"
        ],
        wednesday: [
            "Wednesday",
            "8am - 6pm"
        ],
        thursday: [
            "Thursday",
            "8am - 6pm"
        ],
        friday: [
            "Friday",
            "8am - 6pm"
        ]
    },
    address: {
        header: "Address",
        address1: "181 Bay Street",
        address2: "Brighton, VIC, 3188",
        hint: "On the corner of Bay Street and Cochrane Street"
    },
    contact: {
        header: "Contact",
        telephone: {
            header: "Telephone",
            value: "9503 8223"
        },
        email: {
            header: "Email",
            data: "hello@movewellmelbourne.com"
        }
    }
}

export {
    LandingData,


    ProfessionalMentoringData,

    AboutData,
    ContactData
}
