import {PhysioLedRehabBackground} from "../../global"
const client1 = "/physio/clients/client_9.jpg";
const client2 = "/physio/clients/client_22.jpg";
const client3 = "/physio/clients/client_20.jpg";

const PhysioLedRehabData = {
    core: {
        parallaxImage: PhysioLedRehabBackground,
        parallaxHeader: "Physio-led Rehabilitation",
        parallaxBody: "A structured, active approach to helping you overcome pain and move the way you want to",
    },
    top: {
        header: "ACTIVE, INDIVIDUALISED, GUIDED REHABILITATION",
        body: [
            "Rehabilitation classes are physiotherapist-led, ensuring quality and focus on existing musculoskeletal conditions, rehabilitation and injury prevention.",
            "Classes can be 1-on-1 or in a small group of up to 4 people. These session sizes ensure everyone is being guided through individualised and specific exercise, as well as receiving the necessary education to support your rehabilitation plan.",
            "In these sessions, we incorporate clinical reformer and mat pilates, redcord suspension training, cable machines, weights and banded exercises.",
        ],
    },
    clients: {
        header: "What our clients achieve",
        clients: [
            {
                header: "Freedom from acute pain in daily lifestyle",
                para: [
                    "When life’s normal activities are inhibited by acute pain, our goal is enabling your capacity to go about your daily movement pain-free.",
                    "Sessions utilise pilates-style exercises in a range positions that are designed to be low impact, with an intensity that matches your capabilities. We commonly focus on developing core stability and flexibility to resolve underlying causes of pain.",
                ],
                clientImage: client1,
                clientName: "Marita",
                clientAge: "45",
                clientPara: [
                    "I started seeing Yasha in March 2020 at the beginning of lockdown due to chronic neck and hip pain. Yasha suggested exercise rehabilitation. I have always exercised regularly but with Yasha it was different. What I have loved is how he has prescribed a program specific to my needs and life stage. It is not a one size fits all.",
                    "Yasha has an interest in the individual beyond any practitioner I have come across. He looks at the body as a whole and what may be impacting your concerns. As a woman in my late 40s my needs and concerns are different from a 25 year old. Yasha gets this and more importantly he has a thirst for knowledge so you can be guaranteed that he has the most up to date knowledge in his field.",
                    "Eight months in I am stronger, more confident in my body and pain free. Yasha now trains my 14 year old son who is a Rugby Union player and my 16 year old son and even my husband is a convert and that is no easy task! I can’t thank Yasha enough for changing our lives and allowing us to thrive in what has been an incredibly challenging year.",
                ]
            },
            {
                header: "Returning to optimal sports performance",
                para: [
                    "Our physiotherapists have extensive experience in injury rehabilitation, prevention and athletic performance improvement. When the focus is sport specific, we construct classes directed to the muscular function of your sport.",
                    "We use exercise prescriptions to improve performance of elite and amateur athletes, but also those striving to achieve personal fitness goals.",
                    "We also provide ongoing education to consolidate the purpose of your rehabilitation. Our plan is updated according to ongoing strength measurements and functional testing, driving both your performance and confidence.",
                    "Our team has experience in, but not limited to: AFL, netball, tennis, soccer, athletics, cycling, volleyball, dancing, triathlon and ironman races.",
                ],
                clientImage: client2,
                clientName: "Joshua",
                clientAge: "24",
                clientPara: [
                    "I came to Yash with sharp knee pain as I started training for my first Ironman Triathlon. I couldn’t run more than a few kilometres without slowing to a walk. In my consult, Yasha helped me understand why the pain in my knee was related to overtraining and muscular weaknesses.",
                    "To address this, Yasha helped me build the strength I needed to handle the demands of the sport. Yasha designed a program that allowed me gradually increase my running load. With weekly sessions I was able to increase my glute and hamstring function for cycling and running.",
                    "Along the way, Yash was unbelievably helpful and always available for advice, keeping everything focused on my greater goal of getting to the start line pain-free. Happy to have made that a reality to complete my first Ironman over in New Zealand. Can’t thank you enough for all the support, Yash.",
                ]
            },
            {
                header: "Relieving pain from persistent conditions",
                para: [
                    "We commonly assist recovery from more ongoing conditions.",
                    "When symptoms of pain present as long term frustration, there is often systemic imbalances we need to address.",
                    "With a more in-depth understanding of your history, our rehabilitation classes address more than just the location of pain. This can be either 1-to-1 or in small groups where appropriate.",
                    "Considering these broader health aspects and your existing health care team helps us better fit tailored physical exercise into the overall improvement of your wellbeing.",
                    "",
                ],
                clientImage: client3,
                clientName: "Gabriella",
                clientAge: "52",
                clientPara: [
                    "Having severe spinal degeneration and high risk of being wheelchair bound, after seeing Yash I have finally become strong, fit and functional.",
                    "As a physiotherapist myself, I highly recommend Yash’s approach to rehabilitation and movement at any age, fitness level or injury. He has been life changing, and I continue to attend regularly.",
                ]
            }
        ]
    },
}

export default PhysioLedRehabData
