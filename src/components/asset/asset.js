import React from "react"
import getAssetBySymbol from "../../hooks/getAssetBySymbol"

export default function Asset({ asset, setAsset, setStartingDate, setAssetName, inputGlow, setInputGlow }) {
    const handleChange = evt => {
        if(inputGlow === 0){
            setInputGlow(1)
        }
        setStartingDate("")
        getAssetBySymbol(evt.target.value, setAsset, setAssetName)
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Asset:</label>
            <select
            className={ `info-input ${inputGlow === 0 && 'input-glow'}`}
            onChange={handleChange}>
            <option value="" disabled selected hidden>Pick an asset!</option>
            <option value="QQQ">NASDAQ</option>
            <option value="SPY">SP500</option>
            <option value="MSFT">Microsoft</option>
            <option value="AAPL">Apple</option>
            <option value="AMZN">Amazon</option>
            <option value="DIS">Disney</option>
            <option value="GOOGL">Google</option>
            <option value="intc">Intel</option>
            <option value="IBM">IBM</option>
            <option value="AMD">AMD</option>
            <option value="BAC">Bank of America</option>
            <option value="BRK-A">Berkshire Hathaway</option>
            <option value="HD">Home Depot</option>
            <option value="JNJ">J & J</option>
            <option value="MCD">McDonald's</option>
            <option value="PG">Procter & Gamble</option>
            <option value="V">Visa</option>
            <option value="WMT">Walmart</option>
            <option value="XOM">Exxon</option>
            </select>
            </section>
          </React.Fragment> 
      );  
}