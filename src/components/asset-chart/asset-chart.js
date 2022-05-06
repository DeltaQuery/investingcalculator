import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');

export function AssetChart( {returnResults, assetName} ) {

  let assetArr = []
  try {
    const formatAsset = (asset) => {
      let newAsset = []
      let i = 0
      for (let [key, value] of Object.entries(asset)) {
        newAsset[i] = []
          let assetPrice = asset[key]["assetPrice"]
          newAsset[i].push(key)
          newAsset[i].push(assetPrice)
          i++
      }
      return newAsset
  }
  assetArr = formatAsset(returnResults.investmentArr).reverse()
  } catch (error) {
    console.log("Carga la data de la inversión.")
  }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Asset price evolution",
          },
        },
      };
      
      const labels = assetArr.map( data => data[0]);
      
      const data = {
        labels,
        datasets: [
          {
            label: assetName,
            fill: false,
            data: assetArr.map( data => data[1]),
            borderColor: "rgb(32, 167, 226)",
            backgroundColor: "rgb(32, 167, 226)",
          }
        ],
      };

  return <div className="line-chart-container">
    <Line options={options} data={data} />
    </div>
}
