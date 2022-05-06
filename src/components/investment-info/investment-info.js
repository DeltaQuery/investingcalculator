import React from "react"
import StartingAmount from "../starting-amount/starting-amount"
import AddContribution from "../add-contribution/add-contribution"
import ContributionFreq from "../contribution-freq/contribution-freq"
import Asset from "../asset/asset"
import TotalGrowth from "../total-growth/total-growth"
import StartingDate from "../starting-date/starting-date"
import EndingDate from "../ending-date/ending-date"
import calculateReturns from "../../hooks/calculateReturns"
import GrowthChart from "../growth-chart/growth-chart"
import { PieChart } from "../pie-chart/pie-chart"
import { AssetChart } from "../asset-chart/asset-chart"
import "./investment-info.css"

export default function InvestmentInfo() {
    const [startingAmount, setStartingAmount] = React.useState(5000)
    const [addContribution, setAddContribution] = React.useState(200)
    const [contributionFreq, setContributionFreq] = React.useState("1")
    const [startingDate, setStartingDate] = React.useState("")
    const [endingDate, setEndingDate] = React.useState(10)
    const [asset, setAsset] = React.useState("")
    const [assetName, setAssetName] = React.useState("")
    const [totalGrowth, setTotalGrowth] = React.useState(0)
    const [totalContributions, setTotalContributions] = React.useState(0)
    const [returnResults, setReturnResults] = React.useState()
    const [minDate, setMinDate] = React.useState("2000-01")
    const [maxDate, setMaxDate] = React.useState("2022-01")
    const [dateInputDisabled, setDateInputDisabled] = React.useState(true)

    React.useEffect(() => {
        setReturnResults(calculateReturns({ setTotalContributions, setMinDate, setMaxDate, setDateInputDisabled, asset, startingDate, endingDate, contributionFreq, setContributionFreq, startingAmount, addContribution, setTotalGrowth }))
    }, [asset, startingDate, endingDate, contributionFreq, startingAmount, addContribution])

    return (
        <React.Fragment>
            <h4>Investment Calculator:</h4>
            <section className="info-components-container">
                <StartingAmount
                    startingAmount={startingAmount}
                    setStartingAmount={setStartingAmount}
                />

                <div className="contributions-section">
                    <div className="contributions-title-container">
                        <label className="info-title">Additional Contribution:</label>
                    </div>
                    <div className="contributions-components">
                        <AddContribution
                            addContribution={addContribution}
                            setAddContribution={setAddContribution}
                        />

                        <ContributionFreq
                            contributionFreq={contributionFreq}
                            setContributionFreq={setContributionFreq}
                        />
                    </div>
                </div>

                <Asset
                    asset={asset}
                    setAsset={setAsset}
                    setStartingDate={setStartingDate}
                    setAssetName={setAssetName}
                />

                <StartingDate
                    startingDate={startingDate}
                    setStartingDate={setStartingDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateInputDisabled={dateInputDisabled}
                />

                <EndingDate
                    endingDate={endingDate}
                    setEndingDate={setEndingDate}
                />
            </section>

            <section className="total-growth-section">
            <TotalGrowth
                totalGrowth={totalGrowth}
            />    
            </section>

            <div className="charts-container">
                <GrowthChart
                    returnResults={returnResults}
                    startingAmount={startingAmount}
                />

                <PieChart
                    totalContributions={totalContributions}
                    totalGrowth={totalGrowth}
                    startingAmount={startingAmount}
                    assetName={assetName}
                />
            </div>

            <div className="line-container">
                <AssetChart
                    returnResults={returnResults}
                    assetName={assetName}
                />
            </div>
        </React.Fragment>
    );
}