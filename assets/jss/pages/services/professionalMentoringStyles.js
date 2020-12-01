import {bodyHeaderText, bodyParaText} from "../../coreStyles";

const styles = {
    hr: {
        marginTop: "5vh",
        borderTop: "1px solid black"
    },
    greenHeaderText: {
        ...bodyHeaderText,
        textAlign: "center",
    },
    blackBodyText: {
        ...bodyParaText,
        marginLeft: "7vw",
        marginRight: "7vw",
        marginTop: "1vh",
        marginBottom: "1vh",
        textAlign: "left",
    },
}

export default styles
