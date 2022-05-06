import React from "react"
import { AMZN } from "../../market-data/amazon"
import { AAPL } from "../../market-data/apple"
import { DIS } from "../../market-data/disney"
import { GOOGL } from "../../market-data/google"
import { INTC } from "../../market-data/intel"
import { MSFT } from "../../market-data/microsoft"
import { QQQ } from "../../market-data/qqq"
import { SPY } from "../../market-data/spy"

export default function Asset({ asset, setAsset, setStartingDate, setAssetName }) {
    //hay que averiguar la forma de iterar este Arr con todos los assets incluidos en el futuro
    const assets = { AMZN, AAPL, DIS, GOOGL, INTC, MSFT, QQQ, SPY }

    const handleChange = evt => {
        setStartingDate("")
        for (let [key, value] of Object.entries(assets)) {
            if(value["Meta Data"]["2. Symbol"] === evt.target.value){
            setAsset(value["Monthly Adjusted Time Series"])  
            setAssetName(key)
            } 
        }    
        console.log(evt.target.value)
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
            </select>
            </section>
          </React.Fragment> 
      );  
}