import { motion } from 'framer-motion'
import * as d3 from 'd3'

function Bar({ value, x, y, width, height }) {
  return (
    <motion.rect
      x={x}
      y={y}
      width={width}
      height={height}
      initial={{ height: 0 }}
      animate={{ height: value }}
      transition={{ duration: 0.5 }}
      fill="teal"
    />
  );
}

export default function AnimatedBarChart({ data }) {

}
