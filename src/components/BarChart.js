'use client';

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import Tooltip from './Tooltip'

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const [tooltip, setTooltip] = useState({ content: '', position: { x: 0, y: 0 }, visible: false });

  useEffect(() => {
    const width = 600;
    const height = 250;
    d3.select(chartRef.current).selectAll('*').remove();

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleBand()
      .domain(data.map((_, i) => i))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'steelblue')
      .on('mouseover', (event, d) => {
        const [x, y] = d3.pointer(event);
        setTooltip({
          content: `Edad: ${d}`,
          position: { x: x + 10, y: y - 10 },
          visible: true
        });
      })
      .on('mousemove', (event) => {
        const [x, y] = d3.pointer(event);
        setTooltip((prev) => ({
          ...prev,
          position: { x: x + 10, y: y - 10 }
        }));
      })
      .on('mouseout', () => {
        setTooltip((prev) => ({
          ...prev,
          visible: false
        }));
      });

    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', (d, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d)
      .style('fill', 'black')
      .style('font-size', '12px');

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickFormat(i => i + 1));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <div className="relative">
      <svg ref={chartRef}></svg>
      {tooltip.visible && (
        <Tooltip content={tooltip.content} position={tooltip.position} />
      )}
    </div>
  )
}

export default BarChart
