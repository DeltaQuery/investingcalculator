import React from "react"

export default function StartingAmount({ startingAmount, setStartingAmount }) {

    const handleChange = evt => {
        setStartingAmount(Number(evt.target.value))
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Starting Amount:</label>
            <input
            className="info-input"
            onChange={handleChange}
            type="text"
            value={startingAmount}
            placeholder="Starting amount"/>
            </section>
          </React.Fragment> 
      );  
}