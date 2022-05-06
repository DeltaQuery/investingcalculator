import React from "react"

export default function TotalGrowth({ totalGrowth }) {

    return (
        <React.Fragment>
            <label className="info-title growth-title"><span className="growth-title-string">This investment would have been worth: </span> <span className="total-growth"> ${ totalGrowth }</span></label>
          </React.Fragment> 
      );  
}