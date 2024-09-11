'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const LineChart = ({ data }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const width = 800
    const height = 250
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }

    const svg = d3.select(chartRef.current)
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)
                  .append('g')
                  .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleLinear()
                .domain([0, data.length - 1])
                .range([0, width]);

    const y = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .nice()
                .range([height, 0])

    const line = d3.line()
                   .x((d, i) => x(i))
                   .y(d => y(d))

    svg.append('path')
       .data([data])
       .attr('class', 'line')
       .attr('d', line)
       .attr('fill', 'none')
       .attr('stroke', 'steelblue')
       .attr('stroke-width', 2)

    svg.append('g')
       .attr('class', 'x-axis')
       .attr('transform', `translate(0,${height})`)
       .call(d3.axisBottom(x).ticks(data.length).tickFormat(i => i + 1))

    svg.append('g')
       .attr('class', 'y-axis')
       .call(d3.axisLeft(y))
  }, [data])

  return <svg ref={chartRef}></svg>
};

export default LineChart
