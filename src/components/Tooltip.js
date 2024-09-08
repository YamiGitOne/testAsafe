import { motion } from 'framer-motion'

export default function Tooltip({ content, position }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }} 
      className="absolute bg-gray-800 text-white p-2 rounded"
      style={{ top: position.y, left: position.x }}
    >
      {content}
    </motion.div>
  )
}
