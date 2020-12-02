import {bodyHeaderText, bodyParaText} from "../../assets/jss/coreStyles";

const styles = {
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
