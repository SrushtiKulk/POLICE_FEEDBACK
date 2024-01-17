import React from "react";

const ChartComponent = () => {
  const embedChartURL =
    "https://charts.mongodb.com/charts-feedback_responses-bmwbq/public/dashboards/2af7f572-700e-4027-8356-59596f0f7e43 ";

  return (
    <div>
      <h5>Graphical Feedback Analysis</h5>
      <iframe
        title="MongoDB Atlas Chart"
        width="1000"
        height="500"
        margin-left = "100"
        src={embedChartURL}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ChartComponent;