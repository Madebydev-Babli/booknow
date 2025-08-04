import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#ffe4e6] via-white to-[#e0e7ff] flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-pink-600">Get in Touch 💌</h2>
          <p>
            We’d love to hear from you! Feel free to drop us a message or
            inquiry anytime.
          </p>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-600" />
            <span>madebybabli@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-pink-600" />
            <a
              href="https://wa.me/917383521849?text=Hi%20MadebyBabli%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Chat on WhatsApp 📲
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-600" />
            <span>GlowSpace Studio, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 text-pink-600 text-2xl">
            <a
              href="https://www.instagram.com/madebybabli"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/babli-chauhan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-800"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          action="https://formsubmit.co/madebybabli@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Redirect to thank-you page */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thank-you"
          />

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="bg-pink-600 text-white w-full py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
          >
            Send Message 💖
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;