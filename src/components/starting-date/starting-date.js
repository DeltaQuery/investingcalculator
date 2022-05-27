import React from "react"

export default function StartingDate({ startingDate, setStartingDate, minDate, maxDate, dateInputDisabled, inputGlow, setInputGlow }) {

    const handleChange = evt => {
        setStartingDate(evt.target.value)
        setInputGlow(2)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Starting Date:</label>
            <input
                className={ `date-input ${inputGlow === 1 && 'input-glow'}`}
                type="month"
                min={minDate}
                max={maxDate}
                disabled={dateInputDisabled}
                value={startingDate}
                onChange={handleChange} 
            ></input>
            </section>
        </React.Fragment>
    );
}