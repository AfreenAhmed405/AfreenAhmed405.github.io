import { motion } from "framer-motion";

const MotionLines = () => {
  const lines = Array.from({ length: 10 }); // number of lines

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {lines.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[5px] w-24 bg-pink-300 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default MotionLines;
