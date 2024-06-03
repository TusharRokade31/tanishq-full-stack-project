import React from "react";
import { Line } from "react-chartjs-2";
import BarChart from "./BarChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

import { LineChartData } from "./ChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);
const LineChart = () => {
  const opt = {};

  return (
    <div className="row row-cols-2 g-0">
      <div className="col">
        <div>
          <Line options={opt} data={LineChartData}></Line>
        </div>
      </div>
      <div className="col">
        <div>
          <BarChart/>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
