import React from "react"
import { AMZN } from "../../market-data/amazon"
import { AAPL } from "../../market-data/apple"
import { DIS } from "../../market-data/disney"
import { GOOGL } from "../../market-data/google"
import { INTC } from "../../market-data/intel"
import { MSFT } from "../../market-data/microsoft"
import { QQQ } from "../../market-data/qqq"
import { SPY } from "../../market-data/spy"
import { BAC } from "../../market-data/bac"
import { BRKA } from "../../market-data/brka"
import { HD } from "../../market-data/hd"
import { JNJ } from "../../market-data/jnj"
import { MCD } from "../../market-data/mcd"
import { PG } from "../../market-data/pg"
import { V } from "../../market-data/v"
import { WMT } from "../../market-data/wmt"
import { XOM } from "../../market-data/xom"

export default function Asset({ setAsset, setStartingDate, setAssetName }) {
    //hay que averiguar la forma de iterar este Arr con todos los assets incluidos en el futuro
    const assets = { AMZN, AAPL, DIS, GOOGL, INTC, MSFT, QQQ, SPY, BAC, BRKA, HD, JNJ, MCD, PG, V, WMT, XOM }

    const handleChange = evt => {
        setStartingDate("")
        for (let [key, value] of Object.entries(assets)) {
            if(value["Meta Data"]["2. Symbol"] === evt.target.value){
            setAsset(value["Monthly Adjusted Time Series"])  
            setAssetName(key)
            } 
        }    
    }

    return (
        <React.Fragment>
            <section className="info-container">
            <label className="info-title">Asset:</label>
            <select
            className="info-input"
            onChange={handleChange}>
            <option value="QQQ">NASDAQ</option>
            <option value="SPY">SP500</option>
            <option value="MSFT">Microsoft</option>
            <option value="AAPL">Apple</option>
            <option value="AMZN">Amazon</option>
            <option value="DIS">Disney</option>
            <option value="GOOGL">Google</option>
            <option value="intc">Intel</option>
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