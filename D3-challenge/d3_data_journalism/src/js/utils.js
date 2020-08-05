// @ts-nocheck
import * as d3 from 'd3';
import tip from 'd3-tip';
import { axisLabels } from './constants';

// Function used for updating x-scale variable when clicking on the x-axis label.
export const xScale = (data, chosenXAxis, chartWidth) => {
  // create scales
  const xLinearScale = d3.scaleLinear()
      .domain([d3.min(data, d => d[chosenXAxis]) * 0.8, d3.max(data, d => d[chosenXAxis]) * 1.2])
      .range([0, chartWidth]);

  return xLinearScale;
}

// Function used for updating y-scale variable when clicking on the y-axis label.
export const yScale = (data, chosenYAxis, chartHeight) => {
  // create scales
  const yLinearScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d[chosenYAxis]))
      .range([chartHeight, 0]);

  return yLinearScale;
}


// Function used for updating x-axis when clicking on the x-axis label.
export const renderXAxis = (newXScale, xAxis) => {
  const bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// Function used for updating y-axis when clicking on the y-axis label.
export const renderYAxis = (newYScale, yAxis) => {
  const leftAxis = d3.axisLeft(newYScale);

  yAxis.transition()
    .duration(1000)
    .call(leftAxis);

  return yAxis;
}


// Function used for updating circles group with a transition to new circles.
export const renderCircles = (circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) => {

  circlesGroup.transition()
    .duration(2000)
    .attr("cx", d => newXScale(d[chosenXAxis]))
    .attr("cy", d => newYScale(d[chosenYAxis]))

  return circlesGroup;
}

// Function used for updating circles group with new tooltip.
export const updateToolTip = (chosenXAxis, chosenYAxis, circlesGroup) => {

  const xLabel = chooseXLabel(chosenXAxis);

  const yLabel = chooseYLabel(chosenYAxis);

  const toolTip = tip()
    .attr("class", "d3-tip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.state}<br>${xLabel} ${d[chosenXAxis]}<br>${yLabel} ${d[chosenYAxis]}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(d) { 
    // d3.select(this)
    //   .transition()
    //   .duration(1000)
    //   .attr("r", 20)
    //   .attr("fill", "lightblue");
    toolTip.show(d, this);
  })
    .on("mouseout", function(data, index) {
      // d3.select(this)
      //   .transition()
      //   .duration(1000)
      //   .attr("r", 10)
      //   .attr("fill", "blue");
      toolTip.hide(data);
    });

  return circlesGroup;
}

// Function used to determine which x-axis label to display inside the tooltip.
export const chooseXLabel = (chosenXAxis) => {
  switch(chosenXAxis) {
    case axisLabels.income:
      return "Household Income:";
    case axisLabels.poverty:
      return "Poverty:";
    case axisLabels.age:
      return"Age:";
    default:
      return "Poverty:";
  }
}

// Function used to determine which y-axis label to display inside the tooltip.
export const chooseYLabel = (chosenYAxis) => {
  switch(chosenYAxis) {
    case axisLabels.healthcare:
      return "Healthcare:";
    case axisLabels.obesity:
      return "Obese:";
    case axisLabels.smokes:
      return "Smokes:";
    default:
      return "Healthcare:";
  }
}

// Function used to create x-axis label.
export const createXAxisLabel = (xaxisLabelsGroup, y, value, activeClass, active, text) => {
  const label = xaxisLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", y)
    .attr("value", value)
    .classed(activeClass, active)
    .text(text);
  
  return label;
}

// Function used to create y-axis label.
export const createYAxisLabel = (yaxisLabelsGroup, margin, y, chartHeight, value, activeClass, active, text) => {
  const label = yaxisLabelsGroup.append("text")
    .attr("y", 0 - margin.left + y)
    .attr("x", 0 - (chartHeight / 2))
    .attr("dy", "1em")
    .attr("value", value)
    .classed(activeClass, active)
    .text(text);

  return label;
}

// Function used to render/update the states circle text.
export const renderCirclesText = (circlesText, newXScale, newYScale, chosenXAxis, chosenYAxis) => {
  circlesText
      .transition()
      .duration(3000)
      .attr("x", d => newXScale(d[chosenXAxis]))
      .attr("y", d => newYScale(d[chosenYAxis]))

  return circlesText;
}
