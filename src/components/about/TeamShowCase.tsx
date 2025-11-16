import { motion } from "framer-motion";
import  devimages from '../../assets/Images/story1.webp'


const teamMembers = [
  { name: "wyclif Macharia", role: "Project Lead", img: devimages },
  { name: "Michael Otieno", role: "Frontend Developer", img: devimages },
  { name: "Grace Wanjiru", role: "Backend Developer", img: devimages },
  { name: "Peter Kariuki", role: "UI/UX Designer", img: devimages },
];

const TeamShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-blue-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
