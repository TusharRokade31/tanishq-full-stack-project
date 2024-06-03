export const LineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  
  datasets:[
    {
        label:"Total Sales of a week",
        data:[3000,5000, 4500, 1800, 7000, 4000, 9000, 15000 ],
        borderColor: "rgb(75, 145, 192)"
    },
    {
        label:"Total Sales of a week",
        data:[2500,6500, 900, 7000, 7000, 2500, 1400 ],
        borderColor: "rgb(75, 145, 70)"
    }
  ]
};


export const BarChartData = {
  labels: [
    "Rent",
    "maintenance",
    "salaries",
    "taxes",
    "Utilittes",
    "insurance",
    "Transportation",
    "wages",
    "advertising",
    "Electricity",
  ],
  
  datasets:[
    {
        label:"Expenses",
        data:[4500,6000, 8000, 5000, 3000, 4500 ,3000, 2000, 3000, 4500, 10000 ],
        backgroundColor: [
          "rgba(245, 40, 145, 0.3)",
          "rgba(85, 40, 85, 0.3)",
          "rgba(26, 820, 70, 0.3)",
          "rgba(910, 100, 45, 0.3)",
          "rgba(85, 40, 85, 0.3)",
          "rgba(64, 71, 74, 0.3)",
          
        ],
        borderWidth: 1
    },
    
  ]
};