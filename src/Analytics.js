import { useEffect, useRef, useState } from "react";
import BarChart from "./BarChart";
import sunshine from "./sunshine.json";
import ClockPlot from "./ClockPlot";

const breathLabels = ["Stimulating", "Relaxing", "Counting", "Square"];

const options = [
  { value: "JUN", label: "June" },
  { value: "JUL", label: "July" },
  { value: "AUG", label: "August" },
  { value: "OCT", label: "October" },
];

const breathTypeData = [
  {
    BREATH: "STIMULATING",
    SESSIONS: 78,
  },
  {
    BREATH: "RELAXING",
    SESSIONS: 36,
  },
  {
    BREATH: "COUNTING",
    SESSIONS: 4,
  },
  {
    BREATH: "SQUARE",
    SESSIONS: 1,
  },
  
];

const Analytics = (props) => {
  const data = breathTypeData.map((d) => {
    return { breath: d.BREATH, sessions: d.SESSIONS };
  });
  const [divWidth, setDivWidth] = useState();
  const ac = useRef();

  const dWidth = document.querySelector(".analyticsContainer") ? document.querySelector(".analyticsContainer").offsetWidth : 300;

  useEffect(() => {
    setDivWidth(dWidth);
    console.log('divWidth', dWidth);
  }, [dWidth]);

  return (
    <div className="sectionContainer">
      <h2>Analytics</h2>
      <div className="analyticsContainer" ref={ac}>
        <ClockPlot divWidth={divWidth} width={divWidth} height={divWidth} />
        <h3>Frequency</h3>
        <p>Line Chart or Area Chart, over time, showing total sessions.</p>
        <div className="frequencyContainer"></div>
      </div>
      <div className="analyticsContainer">
        <h3>Types</h3>
        <p>Bar Chart or Pie Chart, showing distribution.</p>
        <div className="typesContainer">
          <BarChart height={80} divWidth={divWidth} data={data} />
        </div>
      </div>
      <div className="analyticsContainer">
        <h3>Time of Day</h3>
        <p>Scatterplot on circle, as clock.</p>
        <ul>
          <li>AM is orange dots.</li>
          <li>PM is dark blue dots.</li>
        </ul>
        <div className="timeContainer"></div>
      </div>
      <div className="analyticsContainer">
        <h3>Raw Data</h3>
        <div className="rawContainer"></div>
        <ul>
          {props.sessions &&
            props.sessions.map((s) => (
              <li key={s.breath + s.date}>{`${
                breathLabels[s.breath]
              }: ${new Date(s.date).toDateString()}, ${new Date(
                s.date
              ).toLocaleTimeString()}`}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
