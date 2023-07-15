import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <div className="mt-32 w-12 h-12 bg-red-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Content to animate */}
      </motion.div>
    </div>
  );
};

export default MyComponent;
