import React from "react"
import "../investment-info/investment-info.css"

export default function AddContribution({ addContribution, setAddContribution }) {

    const handleChange = evt => {
        setAddContribution(evt.target.value)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <input
            className="info-input"
            onChange={handleChange}
            type="text"
            value={addContribution}
            placeholder="Additional Contribution"/>  
            </section>
            
          </React.Fragment> 
      );  
}