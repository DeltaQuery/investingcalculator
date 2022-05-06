import React from "react"

export default function ReturnRate({ returnRate, setReturnRate }) {

    const handleChange = evt => {
        setReturnRate(evt.target.value)
    }

    return (
        <React.Fragment>
            <label className="info-title">Rate of Return:</label>
            <input
            className="info-input"
            onChange={handleChange}
            type="text"
            value={returnRate}
            placeholder="Rate of Return"/>
          </React.Fragment> 
      );  
}