import URL from "../../strings/urls";

const HeaderData = {
    bannerText: "Phone: ",
    links: [
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
                key: "Book",
                link: "",
            },
            sub: [
                {
                    core: {
                        key: "Consults",
                        href: URL.CLINIKO,
                    },
                },
                {
                    core: {
                        key: "Group Sessions",
                        href: URL.CLINIKO,
                    },
                },
            ],
        },
        {
            core: {
                key: "Contact",
                link: URL.CONTACT,
            },
        },
    ]
}

export default HeaderData
