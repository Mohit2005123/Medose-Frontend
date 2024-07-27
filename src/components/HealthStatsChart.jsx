import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
  Filler // Import the Filler plugin
} from "chart.js";
import 'chartjs-adapter-date-fns'; // Import the date adapter

// Register the necessary components and plugins
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
  Filler // Register the Filler plugin
);

const colors = [
  "rgba(75, 192, 192, 1)", // Teal
  "rgba(255, 99, 132, 1)", // Red
  "rgba(255, 159, 64, 1)", // Orange
  "rgba(54, 162, 235, 1)", // Blue
  "rgba(153, 102, 255, 1)", // Purple
  "rgba(255, 205, 86, 1)", // Yellow
  "rgba(201, 203, 207, 1)"  // Gray
];

const HealthStatsChart = ({ data }) => {
  const generateChartData = (paramData, index) => {
    const color = colors[index % colors.length];
    const times = paramData.map((entry) => new Date(entry.time)); // Convert to Date object
    const values = paramData.map((entry) => entry.value);

    return {
      labels: times,
      datasets: [
        {
          label: paramData[0].label,
          data: values,
          borderColor: color,
          backgroundColor: color.replace('1)', '0.3)'),
          fill: true, // Enable the fill option
          borderWidth: 2,
          tension: 0.3, // Adjust this value for more pronounced curves
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            // Display the exact time of the hovered point
            const date = context[0]?.label;
            return date ? `Date: ${date}` : 'No Date';
          },
          label: (context) => {
            // Display value and unit
            const value = context.parsed.y;
            const label = context.dataset.label;
            const date = new Date(context.label).toLocaleString(); // Convert the time to a readable format
            const unit = label === "Blood Pressure" ? "mmHg" : label === "Blood Sugar" ? "mg/dL" : "°F";
            return `${label}: ${value} ${unit} (Recorded at: ${date})`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'MM/dd/yyyy HH:mm', // Display date and time in tooltip
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: false,
        suggestedMin: (context) => {
          const values = context.chart.data.datasets[0].data.map(d => d.y);
          const min = Math.min(...values);
          return min - (min * 0.05); // Slightly lower than the minimum value
        },
        suggestedMax: (context) => {
          const values = context.chart.data.datasets[0].data.map(d => d.y);
          const max = Math.max(...values);
          return max + (max * 0.05); // Slightly higher than the maximum value
        },
      },
    },
  };

  return (
    <div className="container mx-auto py-8">
      {data.map((paramData, index) => {
        const chartData = generateChartData(paramData, index);
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{paramData[0].label}</h2>
            <div className="chart-container" style={{ height: "300px", width: "100%" }}>
              <Line data={chartData} options={options} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatsChart;
