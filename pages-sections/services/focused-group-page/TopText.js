import React from "react";

import FocusedGroupData from "../../../assets/data/pages/services/focusedGroup";
import GreenGeaderBlackBody from "../../../components/TextBlocks/GreenHeaderBlackBody";

export default function TopText(props) {
    return (
        <GreenGeaderBlackBody header={FocusedGroupData.top.header} body={FocusedGroupData.top.body}/>
    )
}
