import React from 'react';
import "./growth-chart.css"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function GrowthChart({ returnResults, startingAmount }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Investment Growth Over Time',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  };

  let labels = ["2017", "2018", "2019", "2020", "2021"]
  let earnedInterest = []
  let contributions = []
  let netInterest = []

  try {
    labels = returnResults.newDatesArr
    earnedInterest = returnResults.arrWithInterest
    contributions = returnResults.arrWithContributions
    for (let i = 0; i < earnedInterest.length; i++) {
      netInterest[i] = earnedInterest[i] - contributions[i] - startingAmount
    }
  } catch (error) {
    console.log("Carga la data de la inversión.")
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Starting Amount',
        data: labels.map(() => startingAmount),
        backgroundColor: "rgb(32, 167, 226)",
      },
      {
        label: 'Total Contributions',
        data: contributions.map((data) => data),
        backgroundColor: "rgb(84,186,108)",
      },
      {
        label: 'Total Interest Earned',
        data: netInterest.map((data) => data),
        backgroundColor: function(context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value < 0 ? "#F7464A" :  'rgb(249, 183, 25)'
        },
      },
    ],
    maintainAspectRatio: false,
  };

  return <div className="growth-bar-container">
    <Bar
      options={options}
      data={data}
    />
  </div>


}