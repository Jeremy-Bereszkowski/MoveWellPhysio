import {ContactBackground, address1, address2, email, phone_string} from "../global";

const ContactData = {
    core: {
        parallaxImage: ContactBackground,
        parallaxHeader: "Contact",
    },
    openingHours: {
        header: "Opening Hours",
        monday: [
            "Monday",
            "7:30am",
            "7:30pm"
        ],
        tuesday: [
            "Tuesday",
            "7:30am",
            "7:30pm"
        ],
        wednesday: [
            "Wednesday",
            "7:30am",
            "7:30pm"
        ],
        thursday: [
            "Thursday",
            "7:30am",
            "6:30pm"
        ],
        friday: [
            "Friday",
            "7:30am",
            "6:30pm"
        ],
        saturday: [
            "Saturday",
            "7:30am",
            "12:00pm"
        ]
    },
    address: {
        header: "Address",
        address1: address1,
        address2: address2,
        hint: "On the corner of Bay Street and Cochrane Street"
    },
    contact: {
        header: "Contact",
        telephone: {
            header: "Phone",
            value: phone_string
        },
        email: {
            header: "Email",
            data: email
        }
    }
}

export default ContactData
