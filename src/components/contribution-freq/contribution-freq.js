import React from "react"

export default function ContributionFreq({ contributionFreq, setContributionFreq }) {

    const handleChange = evt => {
        setContributionFreq(evt.target.value)
        //console.log(contributionFreq)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <select
            className="freq-input"
            value={contributionFreq}
            onChange={handleChange}>
            <option value="1">Monthly</option>
            <option value="12">Annually</option>
            </select>
            </section>
          </React.Fragment> 
      );  
}