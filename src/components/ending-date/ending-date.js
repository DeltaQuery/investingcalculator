import React from "react"

export default function EndingDate({ endingDate, setEndingDate }) {
    const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const handleChange = evt => {
        setEndingDate(evt.target.value)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Years:</label>
            <select
            className="info-input"
            onChange={handleChange} 
            value={endingDate}
            >
            {years.map(year => <option key={year} value={year}>{year + " year(s)"}</option>)}
            </select>
            </section>
          </React.Fragment> 
      );  
}