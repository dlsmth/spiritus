import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import { getData } from "./util";
import "./ClockPlot.css";

let colors = ["#2176ae", "#57b8ff", "#b66d0d", "#fbb13c", "#fe6847"];

// const data = [];

const tempData = [
  {
    x: -100,
    y: 100,
    r: 23,
    color: 0,
  },
  {
    x: -200,
    y: 75,
    r: 23,
    color: 0,
  },
  {
    x: -300,
    y: -100,
    r: 69,
    color: 0,
  },
  {
    x: -100,
    y: -300,
    r: 80,
    color: 1,
  },
  {
    x: 100,
    y: -100,
    r: 28,
    color: 2,
  },
  {
    x: 50,
    y: 50,
    r: 46,
    color: 2,
  },
  {
    x: -250,
    y: 50,
    r: 15,
    color: 3,
  },
];

const ClockPlot = (props) => {
  const [data, setData] = useState(tempData);
  const svgRef = useRef();

  useEffect(() => {
    console.log(data);
    var radians = 0.0174532925,
      clockRadius = 150,
      margin = 0,
      width = (clockRadius + margin) * 2,
      height = (clockRadius + margin) * 2,
      hourHandLength = (2 * clockRadius) / 3,
      minuteHandLength = clockRadius,
      secondHandLength = clockRadius - 12,
      secondHandBalance = 30,
      secondTickStart = clockRadius,
      secondTickLength = -10,
      hourTickStart = clockRadius,
      hourTickLength = -18,
      secondLabelRadius = clockRadius + 16,
      secondLabelYOffset = 5,
      hourLabelRadius = clockRadius - 40,
      hourLabelYOffset = 7;

    var hourScale = d3.scaleLinear().range([0, 330]).domain([0, 11]);

    var minuteScale,
      secondScale = d3.scaleLinear().range([0, 354]).domain([0, 59]);

    var handData = [
      {
        type: "hour",
        value: 0,
        length: -hourHandLength,
        scale: hourScale,
      },
      {
        type: "minute",
        value: 0,
        length: -minuteHandLength,
        scale: minuteScale,
      },
      {
        type: "second",
        value: 0,
        length: -secondHandLength,
        scale: secondScale,
        balance: secondHandBalance,
      },
    ];

    function drawClock() {
      //create all the clock elements
      updateData(); //draw them in the correct starting position
      var svg = d3
        .select(svgRef.current)
        .attr("width", props.divWidth)
        .attr("height", props.divWidth);

      var face = svg
        .append("g")
        .attr("id", "clock-face")
        .attr(
          "transform",
          "translate(" +
            (clockRadius + margin) +
            "," +
            (clockRadius + margin) +
            ")"
        );

      //add marks for seconds
      face
        .selectAll(".second-tick")
        .data(d3.range(0, 60))
        .enter()
        .append("line")
        .attr("class", "second-tick")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", secondTickStart)
        .attr("y2", secondTickStart + secondTickLength)
        .attr("transform", function (d) {
          return "rotate(" + secondScale(d) + ")";
        });
      //and labels

    //   face
    //     .selectAll(".second-label")
    //     .data(d3.range(5, 61, 5))
    //     .enter()
    //     .append("text")
    //     .attr("class", "second-label")
    //     .attr("text-anchor", "middle")
    //     .attr("x", function (d) {
    //       return secondLabelRadius * Math.sin(secondScale(d) * radians);
    //     })
    //     .attr("y", function (d) {
    //       return (
    //         -secondLabelRadius * Math.cos(secondScale(d) * radians) +
    //         secondLabelYOffset
    //       );
    //     })
    //     .text(function (d) {
    //       return d;
    //     });

      //... and hours
      face
        .selectAll(".hour-tick")
        .data(d3.range(0, 12))
        .enter()
        .append("line")
        .attr("class", "hour-tick")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", hourTickStart)
        .attr("y2", hourTickStart + hourTickLength)
        .attr("transform", function (d) {
          return "rotate(" + hourScale(d) + ")";
        });

      face
        .selectAll(".hour-label")
        .data(d3.range(1, 13, 1))
        .enter()
        .append("text")
        .attr("class", "hour-label")
        .attr("text-anchor", "middle")
        .attr("x", function (d) {
          return hourLabelRadius * Math.sin(hourScale(d) * radians);
        })
        .attr("y", function (d) {
          return (
            -hourLabelRadius * Math.cos(hourScale(d) * radians) +
            hourLabelYOffset
          );
        })
        .text(function (d) {
          return d;
        });

      var hands = face.append("g").attr("id", "clock-hands");

    //   face
    //     .append("g")
    //     .attr("id", "face-overlay")
    //     .append("circle")
    //     .attr("class", "hands-cover")
    //     .attr("x", 0)
    //     .attr("y", 0)
    //     .attr("r", clockRadius / 20);

      //   hands.selectAll('line')
      //   	.data(handData)
      //   		.enter()
      //   		.append('line')
      //   		.attr('class', function(d){
      //   			return d.type + '-hand';
      //   		})
      //   		.attr('x1',0)
      //   		.attr('y1',function(d){
      //   			return d.balance ? d.balance : 0;
      //   		})
      //   		.attr('x2',0)
      //   		.attr('y2',function(d){
      //   			return d.length;
      //   		})
      //   .attr('transform',function(d){
      //   	return 'rotate('+ d.scale(d.value) +')';
      //   });
    }

    function moveHands() {
      d3.select("#clock-hands")
        .selectAll("line")
        .data(handData)
        .transition()
        .attr("transform", function (d) {
          return "rotate(" + d.scale(d.value) + ")";
        });
    }

    function updateData() {
      var t = new Date();
      handData[0].value = (t.getHours() % 12) + t.getMinutes() / 60;
      handData[1].value = t.getMinutes();
      handData[2].value = t.getSeconds();
    }

    drawClock();

    setInterval(function () {
      updateData();
      // moveHands();
    }, 1000);

    const maxRadius = 50;

    // .data(d3.range(0,60)).enter()
    // .append('line')
    // .attr('class', 'second-tick')
    // .attr('x1',0)
    // .attr('x2',0)
    // .attr('y1',secondTickStart)
    // .attr('y2',secondTickStart + secondTickLength)

    const xScale = d3.scaleLinear().domain([0, 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    const timeTickStart = clockRadius;
    const timeTickLength = -10;

    // const rScale = d3.scaleLinear().domain([0, 1]).range([0, 10]);
    // d3.select(svgRef.current)
    //   .selectAll("circle")
    // //   .attr("class", "circle-tick")
    //   .data(data)
    //   // .transition()
    //   // .duration(10000)
    //   .attr('x1', 0)
    //   .attr("x2", 100)
    //   .attr("y1", timeTickStart)
    //   .attr("y2", timeTickStart + timeTickLength)
    //   .attr("transform", function (d) {
    //     return "rotate(" + secondScale(d) + ")";
    //   })
    // //   .attr("cx", (d) => xScale(d.x))
    // //   .attr("cy", (d) => yScale(d.y))
    //   .attr("r", 5)
    //   .attr("fill", (d) => colors[d.color])
    //   .attr("opacity", 0.8);

    var uAssets = 17;
    var uAssetsCom = 3;

    var svgContainer = d3
      .select(svgRef.current)
      .attr("width", 300)
      .attr("height", 300)
      .attr("id", "circleContainer")
      .append("g")
      .attr("transform", `translate(${150}, ${150})`);

    var scale = d3.scaleLinear().domain([0, uAssets]).range([0, 100]);

    var jsonCircles = [
      {
        radius: data.length,
        color: "purple",
        id: "uAssetComCircle",
      },
    ];

    var circles = svgContainer
      .selectAll("circle")
      .data(data)
      .attr("cx", (d) => {
        return scale(d.x) * Math.cos(45 * (Math.PI / 180));
      })
      .attr("cy", (d) => {
        return scale(d.y) * Math.sin(45 * (Math.PI / 180));
      })
      .enter()
      .append("circle");

    var circleAttributes = circles
      .attr("r", function (d) {
        return scale(d.radius);
      })
      .attr("id", function (d) {
        return d.id;
      })
      .style("fill", function (d) {
        return d.color;
      });

    d3.select("#uAssetComCircle")
      .attr("cx", function (d) {
        return scale(uAssets) * Math.cos(45 * (Math.PI / 180));
      })
      .attr("cy", function (d) {
        return scale(uAssets) * Math.sin(45 * (Math.PI / 180));
      });

    // const maxRadius = 10;
    // const xScale2 = d3.scaleLinear().domain([0, 300]).range([0, 300]);
    // const yScale2 = d3.scaleLinear().domain([0, 300]).range([300, 0]);
    // const rScale2 = d3.scaleLinear().domain([0, 1]).range([0, maxRadius]);
    // d3.select(svgRef.current)
    //   .selectAll("circle")
    //   .data(data)
    //   .attr("cx", (d) => {
    //     return xScale2(d.x) * Math.cos(45 * (Math.PI / 180));
    //   })
    //   .attr("cy", (d) => {
    //     return yScale2(d.y) * Math.sin(45 * (Math.PI / 180));
    //   })
    //   // .attr('cx', d => xScale(d.x))
    //   // .attr('cy', d => yScale(d.y))
    //   .attr("r", (d) => rScale2(d.r))
    //   .attr("fill", (d) => colors[d.color])
    //   .attr("opacity", 0.8);

    var newScale = d3.scaleLinear().domain([0, 300]).range([0, 300]);
    const rScale = d3.scaleLinear().domain([0, 100]).range([0, maxRadius]);
    d3.select(svgRef.current)
      .selectAll("circle")
      .data(data)
      .attr("cx", d => Math.sqrt(Math.pow(100 - newScale(d.x - 12), 2) / 2))
      .attr("cy", d => Math.sqrt(Math.pow(100 - newScale(d.y - 12), 2) / 2))
      .attr('r', d => rScale(d.r))
            .attr("fill", (d) => colors[d.color])
    console.log("good divWidth", props.divWidth);
  }, [props.divWidth, data]);

  return (
    <svg
      ref={svgRef}
      data={data}
      viewBox={`0 0 ${300} ${300}`}
    >
      {/* {rectangles}
      {labels} */}
      {/* {gridLines} */}
      {data.map((d) => (
        <circle fill="#fff"></circle>
      ))}
    </svg>
  );
};

export default ClockPlot;
