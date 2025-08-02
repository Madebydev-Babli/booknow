import { motion } from "framer-motion";
import { FaSpa, FaCut, FaAirFreshener } from "react-icons/fa";

const services = [
  {
    icon: <FaSpa size={40} className="text-pink-500 drop-shadow-lg" />,
    title: "Relaxing Facials",
    desc: "Glow-enhancing facials designed for deep hydration and radiance.",
  },
  {
    icon: <FaCut size={40} className="text-violet-500 drop-shadow-lg" />,
    title: "Hair Styling",
    desc: "From classic to trendy cuts, express your style with confidence.",
  },
  {
    icon: <FaAirFreshener size={40} className="text-fuchsia-500 drop-shadow-lg" />,
    title: "Aromatherapy",
    desc: "Breathe in peace with soothing scents and calm-inducing sessions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-[#fef1f6] via-white to-[#f3e8ff] py-20 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600"
      >
        Our Signature Services
      </motion.h2>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-sm sm:text-base">
        Designed with love, tailored for you. Step into a world of glam, glow, and grace 💖
      </p>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{scale:1.08}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="cursor-pointer bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-pink-200 hover:scale-105 transition-all text-center"
          >
            <div className="mb-5 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;