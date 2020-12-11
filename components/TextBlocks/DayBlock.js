import React from "react";
import PropTypes from "prop-types"

import HalfHorizontalTexts from "./HalfHorizontalTexts";

export default function DayBlock(props) {
    const {dayText, openTime, closeTime} = props

    const leftText = dayText + ":"
    const rightText = openTime + "  -  " + closeTime

    return (
        <HalfHorizontalTexts leftText={leftText} rightText={rightText}/>
    )
}

DayBlock.propTypes = {
    dayText: PropTypes.string,
    openTime: PropTypes.string,
    closeTime: PropTypes.string,
}
