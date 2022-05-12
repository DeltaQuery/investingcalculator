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
import FactsBox from "../facts-box/facts-box"
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
        setReturnResults(calculateReturns({ setTotalContributions, totalContributions, setMinDate, setMaxDate, setDateInputDisabled, asset, startingDate, endingDate, contributionFreq, setContributionFreq, startingAmount, addContribution, totalGrowth, setTotalGrowth }))
    }, [asset, startingDate, endingDate, contributionFreq, startingAmount, addContribution])

    return (
        <React.Fragment>
            <h2 className="mt-2 mb-2">Investment Calculator</h2>
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
                    startingAmount={startingAmount}
                    totalContributions={totalContributions}
                />
            </section>




            <div className="charts-container d-flex flex-lg-row flex-column flex-wrap">
                <section className="d-lg-block d-sm-flex col-lg-8 col-sm-12 justify-content-center mb-4">
                    <GrowthChart
                        returnResults={returnResults}
                        startingAmount={startingAmount}
                    />
                </section>

                <section className="d-flex col-lg-4 col-12 justify-content-center mb-4">
                    <PieChart
                        totalContributions={totalContributions}
                        totalGrowth={totalGrowth}
                        startingAmount={startingAmount}
                        assetName={assetName}
                        returnResults={returnResults}
                    />
                </section>

                <section className="order-lg-1 order-2 line-container d-lg-block d-sm-flex col-lg-8 col-sm-12 justify-content-center mb-4">
                    <AssetChart
                        returnResults={returnResults}
                        assetName={assetName}
                    />
                </section>

                <section className="order-lg-2 order-1 d-flex col-lg-4 col-12 justify-content-center mb-4">
                    <FactsBox
                    startingAmount={startingAmount}
                    totalContributions={totalContributions}
                    totalGrowth={totalGrowth}
                    returnResults={returnResults}
                    endingDate={endingDate}
                    contributionFreq={contributionFreq}
                    />
                </section>
            </div>
        </React.Fragment>
    );
}