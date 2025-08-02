import { motion } from "framer-motion";
import founderImg from "../assets/parlour.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#fff0f6] via-white to-[#f3e8ff] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center bg-white rounded-xl shadow-lg p-8"
      >
        {/* LEFT: IMAGE */}
        <motion.img
          src={founderImg}
          alt="GlowSpace Founder"
          className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* RIGHT: TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            About GlowSpace ✨
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            GlowSpace Studio is a beauty sanctuary built to pamper, inspire, and empower. We blend comfort, care, and creativity to give you the confidence you deserve.
          </p>

          <p className="text-gray-600 text-base">
            From relaxing facials to trend-setting hair styles, our services are tailored to make you feel beautiful from the inside out. Step in and step up your glam!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;