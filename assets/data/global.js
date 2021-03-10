/* Global variables */
import URL from "../strings/urls";


/*Company Information*/
const companyName = "MoveWell"

const headerString = companyName + " Physiotherapy"

const address1 = "181 Bay Street"
const address2 = "Brighton, VIC, 3186"

const phone = "+61490842380"
const phone_string = "(+61) 0490 842 380"
const email = "hello@movewellmelbourne.com"



/* Landing Carousel Backgrounds */
const image1 = "/physio/layout_1.jpg";
const image2 = "/physio/clients/client.jpg";
const image3 = "/physio/clients/client_18.jpg";
const image4 = "/physio/clients/client_29.jpg";

/* Main Page Backgrounds */
const AboutBackground = "/physio/sign.jpg";
const TestimonialBackground = "/physio/layout_1.jpg";
const ContactBackground = "/physio/reception.jpg";
const EmployeeProfileBackground = "/physio/sign.jpg";

/* Services Page Backgrounds */
const PhysiotherapyBackground = "/physio/clients/client_26.jpg";
const PhysioLedRehabBackground = "/physio/clients/client_3.jpg";
const FocusedGroupBackground = "/physio/clients/client_39.jpg";

/* 404 Background */
const m404Background = "/physio/bikes_weights.jpg";



/*Employee Data*/
const YashaId = "yasha"
const ChrisId = "chris"
const ShannonId = "shannon"

const YashaHeadshot = "/physio/team/headshot_yasha.jpg";
const ChrisHeadshot = "/physio/team/headshot_chris.jpg";
const ShannonHeadshot = "/physio/team/headshot_shannon.jpg";

const Employees = [
    {
        id: YashaId,
        name: "Yasha Gurevich",
        title: "Principal Physiotherapist",
        description: "Yasha completed his Bachelor of Applied Science and Masters of Physiotherapy at La Trobe Bendigo. " +
            "Yasha’s clinical interest involve management of complex musculoskeletal conditions, sports physiotherapy and injury prevention. " +
            "Yasha has been involved in a variety of different sports settings including soccer, basketball and is currently the head physiotherapist at AJAX football club. " +
            "A passion for ongoing education and knowledge translation Yasha has delivered presentations on injury prevention to variety of different sports clubs and Lectures at La Trobe university on musculoskeletal physiotherapy. " +
            "With a strong focus on being patient centred, Yasha works closely with his patients to achieve their goals.",
        image: YashaHeadshot,
        link: URL.PROFILE_YASHA,
    },
    {
        id: ChrisId,
        name: "Chris Knight",
        title: "Personal Trainer/Class Instructor",
        description: "Chris has been working as a group class instructor and personal trainer for over 6 years. " +
            "He loves helping those who are new to training and want to learn how to exercise safely and effectively. " +
            "He enjoys helping client with any goals they have and loves to do some one on one boxing classes. \n" +
            "To keep fit, Chris plays Ice Hockey, Football and does some weight training with friends.",
        image: ChrisHeadshot,
        link: URL.PROFILE_CHRIS,
    },
    {
        id: ShannonId,
        name: "Shannon Petropoulos",
        title: "Personal Trainer/Class Instructor",
        description: "Fitness has been a priority in my life since I can remember. That then grew into a passion to share “My Passion” with others. " +
            "I have been a PT and fitness instructor since 2002. Training people on the hills of Bondi Beach to the parks and gyms around my hometown of Melbourne. " +
            "I train most days, I love seafood and I love a glass of wine. I’m also a mum to 3 1/2 year old. " +
            "I am realistic. I exercise with both weights and cardio each day, to feel fit and stay strong and therefore I encourage my clients to do this this also. " +
            "I am really looking forward to this next adventure with Yasha at "+companyName+" Melbourne, moving closer to our physical goals and enjoying the ride along the way.",
        image: ShannonHeadshot,
        link: URL.PROFILE_SHANNON,
    },
]

export {
    headerString,

    companyName,
    address1,
    address2,
    phone,
    phone_string,
    email,

    image1,
    image2,
    image3,
    image4,

    AboutBackground,
    TestimonialBackground,
    ContactBackground,
    EmployeeProfileBackground,

    PhysiotherapyBackground,
    PhysioLedRehabBackground,
    FocusedGroupBackground,

    m404Background,

    YashaId,
    ChrisId,
    ShannonId,
    Employees,
}
