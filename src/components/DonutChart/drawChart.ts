import { select, arc, interpolate, pie } from "d3";
import { totalDonutValue, calculatePercentage } from "util/helper";
import { TGenericDataType, GenericTableData } from "types";
import { colors } from "util/constants";
import { DType, DataType } from "./types";

const drawChart = (element: string, data: GenericTableData[]) => {
  const total = totalDonutValue(data);
  const boxSize = 500;

  select(element).select("svg").remove();
  const svg = select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator: TGenericDataType = arc()
    .padAngle(0.02)
    .innerRadius(100)
    .outerRadius(250);

  const pieGenerator = pie()
    .startAngle(-0.75 * Math.PI)
    .value((d: TGenericDataType) => d.value);

  const arcs = svg
    .selectAll()
    .data(pieGenerator(data as unknown as DataType))
    .enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length])
    .transition()
    .duration(700)
    .attrTween("d", function (d: DType) {
      const i = interpolate(d.startAngle, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arcGenerator(d);
      };
    });

  arcs
    .append("text")
    .attr("text-anchor", "middle")
    .text(
      (d: TGenericDataType) => `${calculatePercentage(total, d.data.value)}%`
    ) // label text
    .style("fill", "#fff") // label color
    .style("font-size", "30px") // label size
    .attr("transform", (d) => {
      const [x, y] = arcGenerator.centroid(d);
      return `translate(${x}, ${y})`;
    })
    .style("font-size", 0)
    .transition()
    .duration(700)
    .style("font-size", "26px");

  // Add inner border
  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 100) // should be same as innerRadius value
    .attr("fill", "transparent")
    .transition()
    .duration(700)
    .attr("stroke-width", 8);
};

export default drawChart;
