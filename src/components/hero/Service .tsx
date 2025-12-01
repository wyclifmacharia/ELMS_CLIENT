import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, TrendingUp, Clock } from "lucide-react";
import serviceIMG from "../../assets/Images/services.jpg";

const services = [
  { icon: Zap, text: "Lightning-fast leave request processing" },
  { icon: Shield, text: "Enterprise-grade security & compliance" },
  { icon: Users, text: "Multi-level approval workflows" },
  { icon: TrendingUp, text: "Advanced analytics & reporting" },
  { icon: Clock, text: "24/7 automated notifications" },
  { icon: Check, text: "Customizable leave policies" },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main Image */}
              <img
                src={serviceIMG}
                alt="ELMS Services"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Premium Services
            </div>
            
            <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Everything You Need to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"> Succeed</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ELMS provides a comprehensive suite of tools designed to streamline
              your leave management process from start to finish, ensuring efficiency
              and transparency at every step.
            </p>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{service.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Explore All Features →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
