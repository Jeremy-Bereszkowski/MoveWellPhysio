import URL from "../../strings/urls";

const HeaderLinkData = [
    {
        core: {
            key: "Home",
            link: URL.LANDING_PAGE,
            as: URL.ROOT,
        },
    },
    {
        core: {
            key: "Services",
            link: "",
        },
        sub: [
            {
                core: {
                    key: "PHYSIOTHERAPY",
                    link: URL.PHYSIOTHERAPY,
                },
            },
            {
                core: {
                    key: "PHYSIO-LED REHABILITATION CLASSES",
                    link: URL.PHYSIO_LEAD_REHAB,
                },
            },
            {
                core: {
                    key: "FOCUSED GROUP EXERCISE",
                    link: URL.FOCUSED_GROUP_EXERCISE,
                },
            },
            {
                core: {
                    key: "PROFESSIONAL MENTORING",
                    link: URL.PROFESSIONAL_MENTORING,
                },
            }
        ]
    },
    {
        core: {
            key: "About",
            link: URL.ABOUT,
        },
    },
    {
        core: {
            key: "Book Online",
            href: "https://movewell-physiotherapy-melbourne.au2.cliniko.com/bookings"
        },
    },
    {
        core: {
            key: "Contact",
            link: URL.CONTACT,
        },
    },
]

export default HeaderLinkData
