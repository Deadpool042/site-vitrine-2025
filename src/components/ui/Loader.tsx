import { motion } from "framer-motion";

export default Loader;

function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/80"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="w-16 h-16 border-4 border-solid rounded-full border-[#D0B444] border-t-transparent animate-spin"></div>
    </motion.div>
  );
}
