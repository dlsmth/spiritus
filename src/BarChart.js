import React from "react";
import { scaleLinear, scaleBand, max } from "d3";

const BarChart = ({ width, height, data }) => {
  // console.log(data);

  const margin = 0;
  const lines = [10, 20, 30, 40, 50,];

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.sessions)])
    .range([0, width - margin]);

  const yScale = scaleBand()
    .domain(data)
    .range([0, height - 2 * margin]);

  const rectangles = data.map((d) => (
    <rect
      key={d.breath}
      x={margin}
      y={yScale(d)}
      height={yScale.bandwidth()}
      width={xScale(d.sessions)}
      fill="#1976d2"
      stroke="#fff"
    ></rect>
  ));

  const labels = data.map((d) => (
    <text
      fill="#fff"
      fontSize="11"
      textAnchor="end"
      key={d.breath}
      x={xScale(d.sessions) - 5}
      y={yScale(d) + 15}
    >
      {`${d.breath} (${d.sessions})`}
    </text>
  ));

  const gridLines = lines.map((l, i) => (
    <g key={i}>
      <line
        stroke="#fff"
        y1={0}
        y2={height - margin}
        x1={xScale(l)}
        x2={xScale(l)}
      ></line>
      <text textAnchor="middle" fontSize='12' x={xScale(l)}
        y={height - margin + 5}>
            {l}
      </text>
    </g>
  ));

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {rectangles}
      {labels}
      {/* {gridLines} */}
    </svg>
  );
};

export default BarChart;
