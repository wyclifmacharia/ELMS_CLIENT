import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Employee Submits Request",
    desc: "Simple online form to request leave with real-time validation.",
    icon: CheckCircle2,
    color: "blue",
  },
  {
    step: "02",
    title: "Manager Reviews",
    desc: "Supervisor gets instant notification for approval with one-click actions.",
    icon: Clock,
    color: "purple",
  },
  {
    step: "03",
    title: "HR Finalizes",
    desc: "HR validates and updates the records automatically with audit trails.",
    icon: Shield,
    color: "green",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How ELMS Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless three-step process that saves time and reduces errors
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative z-10">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${
                    item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    'from-green-500 to-emerald-500'
                  } flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-8">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                      item.color === 'blue' ? 'from-blue-100 to-cyan-100' :
                      item.color === 'purple' ? 'from-purple-100 to-pink-100' :
                      'from-green-100 to-emerald-100'
                    } flex items-center justify-center`}>
                      <item.icon className={`w-10 h-10 ${
                        item.color === 'blue' ? 'text-blue-600' :
                        item.color === 'purple' ? 'text-purple-600' :
                        'text-green-600'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r ${
                    item.color === 'blue' ? 'from-blue-600 to-cyan-600' :
                    item.color === 'purple' ? 'from-purple-600 to-pink-600' :
                    'from-green-600 to-emerald-600'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
