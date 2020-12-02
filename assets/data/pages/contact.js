import {ContactBackground, address1, address2, email} from "../global";

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
        address1: address1,
        address2: address2,
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
            data: email
        }
    }
}

export default ContactData
