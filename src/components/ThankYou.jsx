// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-100 px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Thank You! 💖</h2>
        <p className="text-gray-700 mb-6">
          We've received your message. We'll get back to you as soon as possible.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Visit Again!🏠
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ThankYou;