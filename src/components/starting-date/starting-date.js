import React from "react"

export default function StartingDate({ startingDate, setStartingDate, minDate, maxDate, dateInputDisabled }) {

    const handleChange = evt => {
        setStartingDate(evt.target.value)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Starting Date:</label>
            <input
                className="date-input"
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