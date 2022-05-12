import React from "react"
import setValColor from "../../hooks/setValColor"
import formatNumber from "../../hooks/formatNumber"

export default function TotalGrowth({ totalGrowth, startingAmount, totalContributions }) {

    let _totalGrowth = totalGrowth
    if(isNaN(_totalGrowth)){
        _totalGrowth = 0
    }

    return (
        <React.Fragment>
            <div className="info-title growth-title d-flex flex-row flex-wrap"><div className="growth-title-string col-sm-12">This investment would have been worth:</div><div className={ `col-sm-12 ` + setValColor(_totalGrowth, (startingAmount+totalContributions))}>{formatNumber(_totalGrowth)} USD</div></div>
          </React.Fragment> 
      );  
}