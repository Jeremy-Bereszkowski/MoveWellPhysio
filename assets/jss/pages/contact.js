import {bodyHeaderText, bodyParaText} from "../coreStyles";

const styles = {
    hr: {
        marginTop: "5vh",
        marginBottom: "5vh",
        borderTop: "2px solid black"
    },
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
    },
    blackBodyText: {
        ...bodyParaText,
        marginTop: "0",
        marginBottom: "0",
        textAlign: "center",
    },
    addressNoteText: {
        marginTop: "40px",
        marginBottom: "20px",
    },
    mapContainer: {
        position: "relative",
        height: "25vh",
        width: "100%"
    }
}

export default styles
