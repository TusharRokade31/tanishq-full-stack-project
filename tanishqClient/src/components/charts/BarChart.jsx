import React from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

import { BarChartData, LineChartData } from "./ChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

const BarChart = () => {
    const opt = {}
  return (
   <Bar options={opt} data={BarChartData} />
  )
}

export default BarChart