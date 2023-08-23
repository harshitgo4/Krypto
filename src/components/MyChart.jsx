import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MChart = ({ arr = [], currency, days }) => {
  const date = [];
  const prices = [];
 for (let i = 0; i < arr.length; i++) {
  if(days==='24h')
  date[i]=(new Date(arr[i][0]).toLocaleTimeString());
  else
  date[i]=(new Date(arr[i][0]).toLocaleDateString());
  prices[i]=arr[i][1];
 }
 console.log(date);
 //console.log(prices);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Price in ${currency}`,
        font: {
          size: 16, // Adjust the font size for the title
        },
      },
      tooltip: {
        bodyFont: {
          size: 14, // Adjust the font size for the tooltip text
        },
      },
      legend: {
        labels: {
          font: {
            size: 14, // Adjust the font size for the legend labels
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14, // Adjust the font size for the x-axis ticks
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14, // Adjust the font size for the y-axis ticks
          },
        },
      },
    },
  };

  return (
    <>
      <Line
        options={options}
        data={{
          labels: date,
          datasets: [
            {
              label: `price in ${currency}`,
              data: prices,
              borderColor: 'white',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }}
      />
    </>
  );
};

export default MChart;
