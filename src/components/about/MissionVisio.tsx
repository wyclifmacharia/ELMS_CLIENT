import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Mission & Vision
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          className="p-6 bg-blue-50 rounded-xl shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700 text-base">
            To streamline employee leave processes by providing an efficient,
            transparent, and reliable management platform that boosts workplace
            productivity.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-amber-50 rounded-xl shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-amber-600 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700 text-base">
            To become a trusted solution that empowers organizations with smart
            leave automation, ensuring work-life balance and operational
            harmony.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
