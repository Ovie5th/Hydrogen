import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales:
     { y: 
      { ticks: 
        { stepSize: 5 }, min: 5, max: 25 } 
      },
  plugins: {
    legend: {
        display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
      backgroundColor: "#A4A1FB",
    },
    {
      label: "Dataset 2",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: "#A4A1FB",
    },
    {
      label: "Dataset 3",
      data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
      backgroundColor: "#A4A1FB",
    },
    {
      label: "Dataset 4",
      data: [9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.5],
      backgroundColor: "#ACA4D6",
    },
    {
      label: "Dataset 5",
      data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
      backgroundColor: "#6554C0",
    },
  ],
};

export function Chart () {
  return <Bar style={{maxHeight:'300px'}}  options={options}  data={data} />;
}
