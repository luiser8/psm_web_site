import {motion} from "framer-motion";

export default function ScrollAnimationWrapper({children, className, ...props}) {
  return (
    <motion.div
      initial="onscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}