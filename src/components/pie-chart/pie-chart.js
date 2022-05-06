import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./pie-chart.css"

export function PieChart({totalContributions, totalGrowth, startingAmount}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const netInterest = ((totalGrowth - totalContributions - startingAmount))

    let netInterestBackgroundColor = 'rgb(249, 183, 25)'
    if(netInterest <= 0){
        netInterestBackgroundColor = "#F7464A"
    } else {
        netInterestBackgroundColor = 'rgb(249, 183, 25)'
    }

    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Investment Balance',
          },
          legend: {
            display: true,
            labels: {
                generateLabels: (chart) => {
                    const datasets = chart.data.datasets;
                    return datasets[0].data.map((data, i) => ({
                      text: `${chart.data.labels[i]} ${data} USD`,
                      fillStyle: datasets[0].backgroundColor[i],
                    }))
                  }
            }
        },
        },
        responsive: true
      };

    const data = {
        labels: ['Total Contributions', 'Total Interest Earned', 'Starting Amount'],
        datasets: [
            {
                data: [totalContributions, netInterest, startingAmount],
                backgroundColor: [
                    'rgb(84,186,108)',
                    netInterestBackgroundColor,
                    'rgb(32, 167, 226)'
                ],
                borderColor: [
                    'rgb(84,186,108)',
                    'rgb(249, 183, 25)',
                    'rgb(32, 167, 226)'
                ],
                borderWidth: 0,
            },
        ],
    };

    return <div className="pie-chart-container">
        <div className="pie-centered-container">
           <Pie 
        data={data}
        options={options}
        /> 
        </div>
        
    </div>;
}
