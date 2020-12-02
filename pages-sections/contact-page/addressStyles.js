import {bodyHeaderText, bodyParaText} from "../../assets/jss/coreStyles";

const styles = {
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
    },
    blackBodyText: {
        fontWeight: "200",
        lineHeight: "3vh",
        fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))",
        margin: "0",
        padding: "0",
        textAlign: "center"
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
