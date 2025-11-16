import { motion } from "framer-motion";

const features = [
  { title: "Instant Leave Requests", desc: "Apply for leave in seconds with an intuitive interface." },
  { title: "Automated Approvals", desc: "Managers can approve or reject requests instantly." },
  { title: "Leave Analytics", desc: "Track leave data and generate reports easily." },
  { title: "Role-Based Access", desc: "Secure access control for employees, managers, and admins." },
  { title: "Email Notifications", desc: "Stay updated on leave approvals and requests." },
  { title: "Mobile Friendly", desc: "Access ELMS anywhere, on any device." },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Key Features
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
