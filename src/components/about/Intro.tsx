import { motion } from "framer-motion";
import approveReq from "../../assets/Images/approved.png";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-8 h-fit p-8 bg-gradient-to-r from-blue-50 to-amber-50">
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={approveReq}
          alt="Employee Leave System"
          className="w-full h-60 md:h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 border border-gray-200 rounded-xl p-8 bg-white shadow-md"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          About ELMS
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          The <strong>Employee Leave Management System (ELMS)</strong> is a
          modern solution that simplifies leave application and approval
          processes for employees and managers.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          It eliminates manual paperwork, improves transparency, and ensures
          accurate leave tracking for HR and administrators.
        </p>
        <p className="text-gray-700 text-lg">
          ELMS promotes fairness, organization, and efficient workplace
          operations.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
